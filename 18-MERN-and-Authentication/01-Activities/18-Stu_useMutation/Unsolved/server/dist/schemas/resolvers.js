import { Thought } from '../models/index.js';
const resolvers = {
    Query: {
        thoughts: async () => {
            return await Thought.find().sort({ createdAt: -1 }); //
        }, //sorts the thoughts in descending order by the createdAt value
        thought: async (_parent, { thoughtId }) => {
            return await Thought.findOne({ _id: thoughtId });
        },
    },
    Mutation: {
        addThought: async (_parent, { thoughtText, thoughtAuthor }) => {
            return await Thought.create({ thoughtText, thoughtAuthor });
        }, //creates a new thought in the database
        addComment: async (_parent, { thoughtId, commentText }) => {
            return await Thought.findOneAndUpdate({ _id: thoughtId }, {
                $addToSet: { comments: { commentText } },
            }, {
                new: true,
                runValidators: true,
            }); //adds a new comment to a thought in the database
        },
        removeThought: async (_parent, { thoughtId }) => {
            return await Thought.findOneAndDelete({ _id: thoughtId });
        },
        removeComment: async (_parent, { thoughtId, commentId }) => {
            return await Thought.findOneAndUpdate({ _id: thoughtId }, { $pull: { comments: { _id: commentId } } }, { new: true });
        },
    },
};
export default resolvers;
