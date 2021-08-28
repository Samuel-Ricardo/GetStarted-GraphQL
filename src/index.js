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
    hello: () => "Hello World",
    users: () => [
      {
        _id: String(Math.random()),
        name: 'Samu',
        email: 'samu@gmail.com',
        active: true
      },
      {
        _id: String(Math.random()),
        name: 'Samu2',
        email: 'samu2@gmail.com',
        active: false
      },
      {
        _id: String(Math.random()),
        name: 'Samu3',
        email: 'samu3@gmail.com',
        active: true
      },
    ]
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then( ({url}) => console.log(`Server Started on ${url}`))

// Start gql server and open playground
//
// node src/index.js
