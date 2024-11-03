import { School, Class, Professor } from '../models/index.js';

// It's done when I have a GraphQL query that returns the following:

//   * Every class's name, credit hours, and building number

//   * Every professor's name and student review score

// * It's done when I have a GraphQL query that returns the following:

//   * Every professor's id, name, student review score, office hours, and office building number

// ---

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      

      });
    },

    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    
  professors: async () => {
      return await Professor.find({}).populate('classes');
    }

  },
};

export default resolvers;
