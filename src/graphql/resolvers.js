const User = require('../model/User')

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id)
    },

    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email })
    }
}