import express from 'express';

// Import the connection object
//data is stored in the database
import sequelize from './config/connection.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

//start the server
// Connect to the database before starting the Express.js server
//sequelize.sync() will create the tables 
//in the database based on the models
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
