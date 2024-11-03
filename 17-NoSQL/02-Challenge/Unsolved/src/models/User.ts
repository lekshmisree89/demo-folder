// Import schema and model from mongoose
import { Schema, model, Document } from 'mongoose';

//User:

// username

// String
// Unique
// Required
// Trimmed
// email

// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)
// thoughts

// Array of _id values referencing the Thought model
// friends

// Array of _id values referencing the User model (self-reference

interface IUser extends Document {
  username: string;
  email: string;
  thoughts: string[];
  friends: string[];
}
  //schema for user document
const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] },
  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

//Schema Settings:

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

///initialize User model
const User = model<IUser>('User', userSchema);
 export default User;

