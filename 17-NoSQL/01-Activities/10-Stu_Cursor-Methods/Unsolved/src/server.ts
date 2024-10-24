import express from 'express';
import { MongoClient, MongoError } from 'mongodb';
import data from './models/data.js';

const app = express();
const PORT = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

const dbName = 'numbersDB';

await client.connect()
  .catch(err => { console.log(err) });

const db = client.db(dbName);

async function seedDB() {
  try {
    await db.collection('numberList').deleteMany({});
    await db.collection('numberList').insertMany(data);

  } catch (err: unknown) {
    const MongoClientError = err as MongoError;

    console.error('Mongo connection error: ', MongoClientError.message);
  }
}

await seedDB();

app.use(express.json());


// * It is done when the documents are returned in descending order using MongoDB methods.

// * It is done when the results are limited to five documents.

// * It is done when documents that contain the largest five numbers are skipped.

// * It is done when routes are successfully tested and the results are returned in Insomnia.

// TODO: Update route to use cursor methods
app.get('/numbers', async (_req, res) => {
  try {
    const results = await db.collection('numberList')
    // find() returns all documents. Equivalent to `Select *` in SQL.
    .find()
    
    // sort() returns documents in ascending order. To sort in descending order, use -1.
    .sort({ number: -1 })
    .skip(5)
    .limit(5)
    //.skip(5)// skip() skips the first five documents.
    .toArray()

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
