// import fake database 
const { UserList } = require("./../fake-data")

const resolvers = {

    Query: {
        users() {
            return UserList; 
        }
    }
}

module.exports = { resolvers }