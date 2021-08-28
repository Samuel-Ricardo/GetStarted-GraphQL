const { ApolloServer, gql } = require('apollo-server');


// Query -> (GET)

// Mutation -> (POST || PUT || PATH || DELETE)

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {

  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then( ({url}) => console.log(`Server Started on ${url}`))
