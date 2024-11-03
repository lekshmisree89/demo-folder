import { School, Class, Professor } from '../models/index.js';

// TODO: Define an interface for the class resolver arguments
// Define types for the arguments
 interface ClassArgs {
   id: string;

 }

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
        // Populate the classes field with the professor field
        //AND the professor field with the classes field
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },

   // TODO Add a new resolver for a single Class object
    class: async (_: unknown, { id }: ClassArgs) => {
      //_: unknown is a placeholder for the parent object
      // Define the class resolver with the id argument
      return await Class.findById(id).populate('professor');
    },

    professors: async () => {
      return await Professor.find({}).populate('classes');
    },
  },
};

export default resolvers;
