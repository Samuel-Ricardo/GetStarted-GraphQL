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
    getUserByEmail(email: String): User!
  }

  type Mutation {
    createUser(name:String!, email:String!): User!
  }
`;

const users = [
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

const resolvers = {
  Query: {
    hello: () => "Hello World",

    users: () => users,

    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email);
    }
  },

  Mutation: {

    createUser: (_, args) => {
      const newUser = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        acctive: true
      };

      users.push(newUser)

      return newUser;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then( ({url}) => console.log(`Server Started on ${url}`))

// Start gql server and open playground
//
// node src/index.js
