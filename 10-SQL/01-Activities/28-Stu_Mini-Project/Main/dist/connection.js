// App.js
// //query
// //routes
// //start server
// res.status.send
//meessage
//id,title
//npm i
//npm run build &&node dist/ServiceWorkerRegistration.js
//check in insomnia
//new collection-movie requests,get hhtp://localg=host:3001/movies
//show reviews ;api/movie reviews
// //get route/api/movies-get all movies
// make sure routes are ther
// //get route/api/movies/:id-get movie by id
// //app.get("./api/movies, req:request,res: response)=>{
//     resizeBy.json("list of movies");//chek in insomina
//     //
//     slect * form n-movies
//     SecurityPolicyViolationEvent.query  slect *
//     from movies
//     where id = ${req.params.id}
//     get databsae
import dotenv from 'dotenv';
dotenv.config();
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. 
//Read up on the benefits here: https://node-postgres.com/features/pooling
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    database: process.env.DB_NAME,
    port: 5432,
});
const connectToDb = async () => {
    try {
        await pool.connect();
        console.log('Connected to the database.');
    }
    catch (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
    }
};
export { pool, connectToDb };
