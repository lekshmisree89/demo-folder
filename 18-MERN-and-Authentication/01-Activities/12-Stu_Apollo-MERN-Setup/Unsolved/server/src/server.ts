import express from 'express';
import db from './config/connection.js';
import path from 'node:path';

// Import the ApolloServer class
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// Import the two parts of a GraphQL schema
import { typeDefs, resolvers } from './schemas/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {

  await server.start();
  await db();

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));


// Important for MERN Setup: When our application runs from production, 
//it functions slightly differently than in development
// In development, we run two servers concurrently that work together
// In production, our Node server runs and delivers 
//our client-side bundle from the dist/ folder


  if (process.env.NODE_ENV === 'production') {
    //path.join() method joins the specified path segments into one path
    app.use(express.static(path.join(__dirname, '../client/dist')));
//__dirname is the directory of the current file
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      //if the route is not found, send the index.html file
    });
  }
//



  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();
