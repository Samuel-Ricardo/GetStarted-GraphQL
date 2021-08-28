const { ApolloServer, gql } = require('apollo-server');


// Query -> (GET)

// Mutation -> (POST || PUT || PATH || DELETE)

const typeDefs = gql`

  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Query {
    hello: String
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World"
    
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then( ({url}) => console.log(`Server Started on ${url}`))

// Start gql server and open playground
//
// gql node src/index.js
