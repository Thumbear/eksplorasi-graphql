const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs")
const { resolvers } = require("./schema/resolvers")


const server = new ApolloServer({ typeDefs, resolvers });
// setiap yang didefinisiin tipenya akan ada di typeDefs
// semua hasil function atau method yang didefinisikan akan ada di resolvers

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});

