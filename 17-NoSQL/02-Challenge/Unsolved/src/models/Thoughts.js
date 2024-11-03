import { Schema, model, Types } from "mongoose";
//   *Reaction** (SCHEMA ONLY)
// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId
// * `reactionBody`
//   * String
//   * Required
//   * 280 character maximum
// * `username`
//   * String
//   * Required
// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query
//   * 
const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [reactionSchema]
});
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
const thoughtData = [
    { thoughtText: 'The Great Gatsby', username: '10' },
    { thoughtText: 'The Catcher in the Rye', username: '15' },
];
Thought
    .create({ name: 'New York Public Library', thoughts: thoughtData })
    .then(data => console.log(data))
    .catch(err => console.error(err));
export default Thought;
