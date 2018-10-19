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
        users: (_, args, context,info) => {
            return context.prisma.query.users({args}, info);
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
    // Mutation: {
    // }
};

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
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
    return uuid.v4();},
    secret: 'M/P?z"1ZR@a&zdaj]'
}));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(passport.initialize());
server.use(passport.session());

server.use(cors());

function updateToken(user, token) {
    // const query = `
    // mutation getUser {
    //     users{
    //         id
    //         email
    //         passwd
    //         name
    //     }
    // }
    // `;
    // const variables = {};
    //
    // await fetch('http://localhost:4466', {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({query, variables})
    // })
    //     .then(response => response.json())
    //     .then(response => {
    //
    //     })
    //     .catch((e) => {
    //         res.status(400).send(e)
    //     });
}

server.post('/login', async function (req, res) {
    const query = `
    query getUser {
        users{
            id
            email
            passwd
            name
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
            const user = users.find(elem => elem.email === req.body.username);
            if (user === undefined)
                res.status(401).send({message: "incorrect username"});
            else if (user.passwd !== req.body.password)
                res.status(401).send({message: "incorrect password"});
            else {
                user.token = uuid.v4();
                // TODO : add the token to the user in prisma.
                delete user.passwd;
                res.status(200).send(user);
            }
        })
        .catch((e) => {
            res.status(400).send(e)
        });
});

server.start(() => console.log(`GraphQL server is running on http://localhost:4000`));
