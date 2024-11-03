import { Schema, model, Document, ObjectId } from 'mongoose';

interface IPost extends Document { 
  _id: ObjectId;
  text?: string;
  username?: string;
  comments?: string[];
  // commentCount?: number;
}

// Schema to create Post model
const postSchema = new Schema<IPost>(
  {
    text: String,
    username: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
  },
  {
    toJSON: {
      virtuals: true,//virtul is a extra
      // field that is not stored in the database
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
  return this.comments?.length;
});

// Initialize our Post model
const Post = model('post', postSchema);

export default Post;
