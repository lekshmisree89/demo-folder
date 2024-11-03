import Matchup, { Model } from '../models'; // Import the Matchup model correctly
import { Document } from 'mongoose';


const resolvers ={
        Query: {
             matchups: async () => {
                return await Matchup.find({}) as unknown as Model<IMatchup, {}, {}, {}, Document<unknown, {}, IMatchup> & IMatchup & Required<{ _id: unknown; }> & { __v?: number; }, Schema<IMatchup, Model<IMatchup, ... 4 more ..., any>, ... 6 more ..., Document<...> & ... 2 more ... & { ...; }>>; // Use the find method on the Matchup model
             }
        }
};

export default resolvers;

