import express from 'express';
// We import the ObjectId class from mongodb
import { MongoClient, ObjectId } from 'mongodb';
const app = express();
const PORT = process.env.PORT || 3001;
const connectionStringURI = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(connectionStringURI);
const dbName = 'inventoryDB';
await client.connect()
    .catch(err => { console.log(err); });
const db = client.db(dbName);
app.use(express.json());
app.post('/books', async (req, res) => {
    try {
        const results = await db.collection('bookCollection').insertOne({ title: req.body.title, author: req.body.author });
        res.status(201).json(results);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
app.get('/books', async (_req, res) => {
    try {
        const results = await db.collection('bookCollection')
            .find({})
            .toArray();
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// TODO: Add Delete route that uses a filter to delete a single document by id
// We use the deleteOne method to delete a single document by id
app.delete('/books/:id', async (req, res) => {
    try {
        const results = await db.collection('bookCollection')
            .deleteOne({ _id: new ObjectId(req.params.id) });
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
//insomnia
//DELETE http://localhost:3001/books/615d1e2e7f3c6e7e9b0f4b9b
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
