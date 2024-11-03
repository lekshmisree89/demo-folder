
//dependencies
import express from 'express';
import db from './config/connection.js';

// Import the ApolloServer class
import { ApolloServer } from '@apollo/server'; 
// Import the middleware function 
import { expressMiddleware } from '@apollo/server/express4';

// Import the two parts of a GraphQL schema
// The type definitions define the "shape" of your data and specify what queries and mutations are available
import { typeDefs, resolvers } from './schemas/index.js';//

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {

  await server.start();// Start the server
  await db();

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  // Middleware for parsing JSON and urlencoded form data
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));
  // Use the `applyMiddleware` function to connect ApolloServer to Express

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();
