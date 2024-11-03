import { Schema, Types } from 'mongoose';

// Helper function to format date
const formatDate = (date: Date) => {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Reaction schema
const reactionSchema = new Schema({
  reactionId: {
    type: Types.ObjectId,  // Correctly set the type to Mongoose's ObjectId
    default: () => new Types.ObjectId(),  // Default value is a new ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //get: (timestamp) => formatDate(timestamp),
  },
}, {
  toJSON: { getters: true },
  id: false,
});

export default reactionSchema;
