const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');
const cors = require('cors');

const passport = require("passport");
const session = require("express-session");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const express = require("express");
require('./auth.js');

const resolvers = {
    Query: {
        users: (_, args, context, info) => {
            return context.prisma.query.users({args}, info);
        },
        user: (_, args, context, info) => {
            console.log(args);
            return context.prisma.query.user({args}, info);
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

server.post('/login', passport.authenticate('local', {
    failureFlash: false
}));

server.start(() => console.log(`GraphQL server is running on http://localhost:4000`));
