import { Profile } from '../models/index.js';
const resolvers = {
    Query: {
        profiles: async () => {
            return await Profile.find();
        },
        /*
          ! Important for Query Variables:
          Each query resolver function can accept up to four parameters.
          The second parameter, commonly referred to as "args," represents the variable argument values passed with the query.
          It is always an object, and in this case, we are destructuring that object to retrieve the profileId value.
        */
        profile: async (_parent, { profileId }) => {
            return await Profile.findOne({ _id: profileId });
        },
    },
    Mutation: {
        addProfile: async (_parent, { name }) => {
            return await Profile.create({ name });
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
