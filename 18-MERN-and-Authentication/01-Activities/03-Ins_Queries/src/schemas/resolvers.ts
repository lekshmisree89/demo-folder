import { School, Class, Professor } from '../models/index.js';
// Define the resolvers object with a Query object
// that contains a classes field
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
      return await Professor.find({});
      //uses a mongoose method to find all professors
    }
  },
};

export default resolvers;
