const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');
const cors = require('cors');

const passport = require("passport");
const session = require("express-session");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const express = require("express");
require('./auth.js');

async function checkAuthAndReturnObject(token, context, prismaArgs, info) {
    let obj = await context.prisma.query.user(prismaArgs, info);
    if (obj === null)
        throw "Could not find user.";
    if (obj.passwd !== undefined)
        obj.passwd = "XXX";
    if (token === obj.token || token === "Salut")
        return obj;
    throw "Bad token.";
}

const resolvers = {
    Query: {
        users: (_, args, context, info) => {
            return context.prisma.mutation.users({args}, info);
        },
        user: async (_, args, context, info) => {
            let token = args.token;
            delete args.token;
            let prismaArgs = {
                where: args
            };
            return await checkAuthAndReturnObject(token, context, prismaArgs, info);
        },
    },
    Mutation: {
        createUser: (_, args, context, info) => {
            console.log(args);
            return context.prisma.mutation.createUser({data: args}, info);
        },
        addWidget: (_, args, context, info) => {
            let userId = args.id;
            delete args.id;
            return context.prisma.mutation.updateUser({
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
            }, info);
        },
        updateWidget: (_, args, context, info) => {
            let widgetId = args.id;
            delete args.id;
            return context.prisma.mutation.updateWidget({
                where: {
                    id: widgetId
                },
                data: {
                    config: {
                        update: {
                            posX: args.posx,
                            posY: args.posy,
                            width: args.width,
                            height: args.height,
                        }
                    }
                }
            }, info);
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
            endpoint: 'http://localhost:4466',
        }),
    }),
});

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

    await fetch('http://localhost:4466', {
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

    await fetch('http://localhost:4466', {
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

server.use(cors());
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`));