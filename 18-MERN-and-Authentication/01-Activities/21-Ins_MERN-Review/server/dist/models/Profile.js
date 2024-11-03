import { Schema, model } from 'mongoose';
// Define the schema for the Profile document
const profileSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    skills: [
        {
            type: String,
            trim: true,
        },
    ],
}, {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
});
const Profile = model('Profile', profileSchema);
export default Profile;
