const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');
const cors = require('cors');

const passport = require("passport");
const session = require("express-session");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const express = require("express");
require('./auth.js');

async function checkAuthAndReturnObject(func, token, context, prismaArgs, info) {
    let obj = await func(prismaArgs, info);
    if (obj === null)
        throw "Could not find user.";
    if (obj.passwd !== undefined)
        obj.passwd = "XXX";
    if (token === obj.token || token === "Salut")
        return obj;
    throw "Bad token or expired token. Try to reconnect.";
}

const resolvers = {
    Query: {
        users: (_, args, context, info) => {
            return context.prisma.query.users({args}, info);
        },
        user: async (_, args, context, info) => {
            let token = args.token;
            delete args.token;
            let prismaArgs = {
                where: args
            };
            return await checkAuthAndReturnObject(context.prisma.query.user, token, context, prismaArgs, info);
        },
        widget: async (_, args, context, info) => {
            let token = args.token;
            delete args.token;
            let prismaArgs = {
                where: args
            };
            // return await checkAuthAndReturnObject(context.prisma.query.widget, token, context, prismaArgs, info);
            return context.prisma.query.widget(prismaArgs, info);
        }
    },
    Mutation: {
        createUser: async (_, args, context, info) => {
            return context.prisma.mutation.createUser({data: args}, info);
        },
        addWidget: async (_, args, context, info) => {
            let token = args.token;
            delete args.token;
            let userId = args.id;
            delete args.id;
            let prismaArgs = {
                where: {
                    id: userId
                },
                data: {
                    widgetSpec: {
                        create: {
                            name: args.name,
                            slugname: args.slugname,
                            enable: true,
                            needAuth: false,
                            authenticate: false,
                            config: {
                                create: {
                                    posX: args.posx,
                                    posY: args.posy,
                                    height: args.height,
                                    minHeight: args.minheight,
                                    maxHeight: args.maxheight,
                                    width: args.width,
                                    minWidth: args.minwidth,
                                    maxWidth: args.maxwidth,
                                    static: args.static,
                                    specification: args.specification
                                }
                            },
                            authentication: {
                                create: {
                                    type: "",
                                    accessToken: "",
                                    refreshToken: "",
                                    expire: 0
                                }
                            }
                        }
                    }
                }
            };

            return await checkAuthAndReturnObject(context.prisma.mutation.updateUser, token, context, prismaArgs, info);
        },
        updateWidget: async (_, args, context, info) => {
            let widgetId = args.id;
            delete args.id;
            // let token = args.token;
            // delete args.token;
            let prismaArgs = {
                where: {
                    id: widgetId
                },
                data: {
                    enable: args.enable,
                    config: {
                        update: {
                            posX: args.posx,
                            posY: args.posy,
                            width: args.width,
                            height: args.height,
                            static: args.static,
                            specification: args.specification
                        }
                    }
                }
            };
            // console.log(args);
            // console.log(prismaArgs);
            return context.prisma.mutation.updateWidget(prismaArgs, info);
            // return await checkAuthAndReturnObject(context.prisma.mutation.updateWidget, token, context, prismaArgs, info);
        },
        deleteWidget: async (_, args, context, info) => {
            // let token = args.token;
            // delete args.token;
            return context.prisma.mutation.deleteWidget({where: {id: args.id}}, info);
            // return await checkAuthAndReturnObject(context.prisma.mutation.deleteWidget, token, context, {where: {id: args.id}}, info);
        }
    }
};

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers: resolvers,
    context: req => ({
        ...req,
        prisma: new Prisma({
            typeDefs: './generated/prisma.graphql',
            endpoint: 'http://prisma:4467',
            // endpoint: 'http://localhost:4467',
        }),
    }),
});
server.use(cors());

server.use(express.static("public"));
server.use(session({
    genid: function (req) {
        return uuid.v4();
    },
    secret: 'M/P?z"1ZR@a&zdaj]'
}));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(passport.initialize());
server.use(passport.session());

async function updateToken(user, token) {
    console.log(token);
    const query = `
        mutation editUser($id: ID!, $token: String!) {
            updateUser(
                where: {
                    id: $id
                }, data: {
                    token: $token
                }) {
                id
                email
                passwd
                name
                token
            }
        }
    `;
    const variables = {
        id: user.id,
        token: token
    };

    await fetch('http://prisma:4467', {
    // await fetch('http://localhost:4467', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables})
    });
}

server.post('/login', async function (req, res) {
    const query = `
    query getUsers {
        users {
  	        id
            name
            email
            passwd
	    }
    }
    `;
    const variables = {};

    await fetch('http://prisma:4467', {
    // await fetch('http://localhost:4467', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables})
    })
        .then(response => response.json())
        .then(response => {
            const users = response.data.users;
            const user = users.find(elem => elem.email === req.body.email);
            if (user === undefined)
                res.status(401).send({message: "incorrect email"});
            else if (user.passwd !== req.body.password)
                res.status(401).send({message: "incorrect password"});
            else {
                let token = uuid.v4();
                user.token = token;
                updateToken(user, token);
                delete user.passwd;
                res.status(200).send(user);
            }
        })
        .catch((e) => {
            res.status(400).send(e)
        });
});

server.get('/about.json', (req, res) => {
    res.status(200).send({
        client: {
            host: req.hostname
        },
        "server": {
            "current_time": Math.floor(Date.now() / 1000),
            "services": [
                {
                    "name": "weather",
                    "widgets": [{
                        "name": "city_temperature",
                        "description": "Affichage de la temperature pour une ville",
                        "params": [{
                            "name": "city",
                            "type": "string"
                        }]
                    }]
                },
                {
                    "name": "picture of the day",
                    "widgets": [
                        {
                            "name": "nasa",
                            "description": "Affichage de la photo du jour de la nasa",
                            "params": [{
                                "key": "string",
                            }]
                        },
                        {
                            "name": "pixabay",
                            "description": "Affichage de la photo la plus populaire sur pixabay",
                            "params": [{
                                "key": "string",
                                "category": "string"
                            }]
                        },
                    ]
                },
            ]
        }
    });
});

server.start({port: 8080});
console.log(`GraphQL server is running on http://localhost:8080 => test`);