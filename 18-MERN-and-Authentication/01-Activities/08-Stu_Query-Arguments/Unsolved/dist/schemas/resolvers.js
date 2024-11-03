import { School, Class, Professor } from '../models/index.js';
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
        // Add a new resolver for a single Class object
        class: async (_, { id }) => {
            // Define the class resolver with the id argument
            return await Class.findById(id).populate('professor');
        },
        professors: async () => {
            return await Professor.find({}).populate('classes');
        },
    },
};
export default resolvers;
