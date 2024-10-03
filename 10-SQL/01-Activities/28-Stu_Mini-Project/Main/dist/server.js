import express from 'express';
//import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';
await connectToDb();
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//ROUTES
//get all movies
app.get('/api/movies', async (_req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM movies`);
        console.log(result);
        const movies = result.rows;
        res.json(movies);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//get all reviews
app.get('/api/reviews', async (_req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM reviews`);
        const reviews = result.rows;
        res.json(reviews);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//POST route to add a movie
app.post('/api/movies', async (req, res) => {
    try {
        const { title } = req.body;
        const result = await pool.query(`INSERT INTO movies (title) VALUES ($1) RETURNING *`, [title]);
        res.json(result.rows[0]);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//POST route to add a review
app.post('/api/reviews', async (req, res) => {
    try {
        const { movie_id, review } = req.body;
        const result = await pool.query(`INSERT INTO reviews (movie_id, review) VALUES ($1, $2) RETURNING *`, [movie_id, review]);
        res.json(result.rows[0]);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//DELETE route to delete a movie
app.delete('/api/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`DELETE FROM movies WHERE id = $1`, [id]);
        res.json(result.rows[0]);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Default response for any other request (Not Found)
app.use((_req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
