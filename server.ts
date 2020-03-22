import express, { Application } from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';

import { resolvers } from './src/resolvers';
import { typeDefs } from './src/typeDefs';

const app: Application = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

mongoose.connect(
  'mongodb://localhost:27017/ts-graphql',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log('Database Connected');
    app.listen(3001, () => {
      console.log(`Server is running`);
    });
  }
);
