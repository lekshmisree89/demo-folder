import { Schema, model } from 'mongoose';
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
            validate: {
                validator: (v) => v.length > 0,
                message: 'Skill cannot be an empty string',
            },
        },
    ],
});
const Profile = model('Profile', profileSchema);
export default Profile;
