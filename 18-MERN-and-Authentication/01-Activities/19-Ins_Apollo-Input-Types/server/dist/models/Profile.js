import { Schema, model } from 'mongoose';
// ! Remember to update the schema to match the requirements of the application.
const profileSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    zipCode: {
        type: String,
        required: false,
        default: '',
    },
    skills: [
        {
            type: String,
            trim: true,
        },
    ],
});
const Profile = model('Profile', profileSchema);
export default Profile;
