import Matchup from '../models/Matchup.js';
export async function createMatchup({ body }, res) {
    const matchup = await Matchup.create(body);
    if (!matchup) {
        return res.status(400).json({ message: 'Unable to create matchup' });
    }
    return res.status(200).json(matchup);
}
export async function createVote(req, res) {
    const vote = await Matchup.findOneAndUpdate({ _id: req.body.id }, { $inc: { [`tech${req.body.techNum}_votes`]: 1 } }, { new: true });
    if (!vote) {
        return res.status(400).json({ message: 'Unable to vote on matchup' });
    }
    return res.status(200).json(vote);
}
export async function getAllMatchups(_req, res) {
    const allMatchups = await Matchup.find({});
    if (!allMatchups) {
        return res.status(400).json({ message: 'No matchups found' });
    }
    return res.status(200).json(allMatchups);
}
export async function getMatchup({ params }, res) {
    const matchup = await Matchup.findOne({ _id: params.id });
    if (!matchup) {
        return res.status(400).json({ message: 'No matchup found by that id' });
    }
    return res.status(200).json(matchup);
}
