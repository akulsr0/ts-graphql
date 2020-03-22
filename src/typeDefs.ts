import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    city: String!
  }
  type Mutation {
    createUser(name: String!, email: String!, city: String!): User!
  }
`;
