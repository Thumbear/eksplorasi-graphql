const { gql } = require("apollo-server");

const typeDefs = gql`

    type User {
        id: ID!
        name : String!
        username : String!
        age : Int!
        nationality : Nationality!
        friends : [User]
        favMovies : [Movie]
    }

    type Movie {
        id : ID!
        name : String!
        yearOfPublication : Int!
        isInTheaters : Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!) : User!
        movies: [Movie!]! 
        movie(id: ID!) : Movie

    }

    input CreateUserInput  {
        name : String!
        username : String!
        age : Int!
        nationality : Nationality = CANADA
    }    

    input UpdateUsernameUser {
        id: ID!
        newUsername: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUsername(input: UpdateUsernameUser!): User

    }

    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }
`;

module.exports = { typeDefs }