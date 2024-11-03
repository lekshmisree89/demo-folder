import { Application, User } from '../models/index.js';
// TODO: Add comments to the functionality of the getApplications method
export const getApplications = async (_req, res) => {
    try {
        const applications = await Application.find();
        res.json(applications);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// TODO: Add comments to the functionality of the getSingleApplication method
export const getSingleApplication = async (req, res) => {
    try {
        const application = await Application.findOne({ _id: req.params.applicationId });
        if (!application) {
            return res.status(404).json({ message: 'No application with that ID' });
        }
        res.json(application);
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
// TODO: Add comments to the functionality of the createApplication method
// Create a new application
export const createApplication = async (req, res) => {
    try {
        const application = await Application.create(req.body); //it creates a new application by 
        //using the Application model and the request body
        const user = await User.findOneAndUpdate({ _id: req.body.userId }, { $addToSet: { applications: application._id } }, { new: true });
        if (!user) {
            return res.status(404).json({
                message: 'Application created, but found no user with that ID',
            });
        }
        res.json('Created the application 🎉');
        return;
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
        return;
    }
};
// interface IApplication extends Document {
//   published: boolean;
//   createdAt: Date;
//   buildSuccess: boolean;
//   description: string;
//   tags: typeof Tag[];
//   getResponses: number;
// }insomnia post request
// {
//   "published": true,
//   "buildSuccess": true,
//   "description": "This is a test application",
//   "tags": [
//       {
//           "tagId": "60b5b1f3c3e5b7b9c3b2f5b5",
//           "tagName": "Test"
//       }
//   ],
//http://localhost:3001/api/applications/60b5b1f3c3e5b7b9c3b2f5b5/tag
// TODO: Add comments to the functionality of the updateApplication method
export const updateApplication = async (req, res) => {
    try {
        const application = await Application.findOneAndUpdate({ _id: req.params.applicationId }, { $set: req.body }, { runValidators: true, new: true });
        if (!application) {
            return res.status(404).json({ message: 'No application with this id!' });
        }
        res.json(application);
        return;
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
        return;
    }
};
// TODO: Add comments to the functionality of the deleteApplication method
export const deleteApplication = async (req, res) => {
    try {
        const application = await Application.findOneAndDelete({ _id: req.params.applicationId });
        if (!application) {
            return res.status(404).json({ message: 'No application with this id!' });
        }
        const user = await User.findOneAndUpdate({ applications: req.params.applicationId }, { $pull: { applications: req.params.applicationId } }, { new: true });
        if (!user) {
            return res.status(404).json({
                message: 'Application created but no user with this id!',
            });
        }
        res.json({ message: 'Application successfully deleted!' });
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
// TODO: Add comments to the functionality of the addTag method
export const addTag = async (req, res) => {
    try {
        const application = await Application.findOneAndUpdate({ _id: req.params.applicationId }, { $addToSet: { tags: req.body } }, { runValidators: true, new: true });
        if (!application) {
            return res.status(404).json({ message: 'No application with this id!' });
        }
        res.json(application);
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
// TODO: Add comments to the functionality of the addTag method
export const removeTag = async (req, res) => {
    try {
        const application = await Application.findOneAndUpdate({ _id: req.params.applicationId }, { $pull: { tags: { tagId: req.params.tagId } } }, { runValidators: true, new: true });
        if (!application) {
            return res.status(404).json({ message: 'No application with this id!' });
        }
        res.json(application);
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
