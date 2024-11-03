import { Class } from '../models/index.js';

// TODO: Add a comment describing the functionality of this expression
// Define the resolvers object with a Query object that contains a classes field
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement 
      // Find all classes and return the results as an array
      return await Class.find({});
    },
  },
};

export default resolvers;
