import express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/index.js';



//app//port
const app = express();
const PORT = process.env.PORT || 3001;

//mi`ddleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


// Connect to the database before starting the Express.js server
// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
 
 //start the server
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
