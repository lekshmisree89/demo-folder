import Tech from '../models/Tech.js';
export async function getAllTech(_req, res) {
    const allTech = await Tech.find({});
    if (!allTech) {
        return res.status(400).json({ message: 'No technologies found' });
    }
    return res.status(200).json(allTech);
}
