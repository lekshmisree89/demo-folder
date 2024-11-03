import express from 'express';
import db from './config/connection.js';
// Require model
import { Item } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




//aggregate method is used to 
//perform operations on the data and return the computed result.
app.get('/items/sum-price', async (_req, res) => {
  try {
    // Call aggregate() on model
    const result = await Item
      .aggregate([// Group by null (no additional grouping by id)
        // Where prices are less or equal to 5
        { $match: { price: { $lte: 5 } } },//filtering the data where price is less than or equal to 5
        {
          $group: {
            // Group by null (no additional grouping by id)
            _id: null,
            // Sum of all prices
            sum_price: { $sum: '$price' },
            //sum of all prices where price is less than or equal to 5 from item collection
            // Average of all prices
            avg_price: { $avg: '$price' },//average of all prices from item collection
            // Maximum price
            max_price: { $max: '$price' },
            // Minimum price
            min_price: { $min: '$price' },
          },
        },
      ])
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
