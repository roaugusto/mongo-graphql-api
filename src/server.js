const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./graphql/resolvers');
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect("mongodb://localhost:27017/local", {
    "authSource": "admin",
    "user": 'admin',
    "pass": 'graphqltest',
    "useNewUrlParser" : true,
    "useUnifiedTopology": true
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'graphql/schema.graphql'),
    resolvers
});

server.start();