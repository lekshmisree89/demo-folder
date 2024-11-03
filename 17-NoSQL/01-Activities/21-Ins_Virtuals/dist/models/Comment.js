import { Schema, model } from 'mongoose';
// Schema for what makes up a comment
const commentSchema = new Schema({
    text: String,
    username: String,
});
// Initialize the Comment model
const Comment = model('comment', commentSchema);
export default Comment;
