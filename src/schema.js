import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from "./resolvers"
const typeDefs = `
    type Query {
        Products: [Product]
        greet(name: String!):  String
    }

    type Product {
        id: ID
        name: String!
        description: String!
        price: Int!
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})