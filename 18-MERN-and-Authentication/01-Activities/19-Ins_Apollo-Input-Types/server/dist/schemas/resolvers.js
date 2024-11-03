import { Profile } from '../models/index.js';
const resolvers = {
    Query: {
        profiles: async () => {
            return await Profile.find();
        },
        profile: async (_parent, { profileId }) => {
            return await Profile.findOne({ _id: profileId });
        },
    },
    Mutation: {
        // ! Important for input types: With the arguments updated to accept the input types, we can now destructure the profileInput object from the args object.
        addProfile: async (_parent, { profileInput }) => {
            // We can now spread the profileInput object to the create method.
            return await Profile.create({ ...profileInput });
        },
        addSkill: async (_parent, { profileId, skill }) => {
            return await Profile.findOneAndUpdate({ _id: profileId }, {
                $addToSet: { skills: skill },
            }, {
                new: true,
                runValidators: true,
            });
        },
        removeProfile: async (_parent, { profileId }) => {
            return await Profile.findOneAndDelete({ _id: profileId });
        },
        removeSkill: async (_parent, { profileId, skill }) => {
            return await Profile.findOneAndUpdate({ _id: profileId }, { $pull: { skills: skill } }, { new: true });
        },
    },
};
export default resolvers;
