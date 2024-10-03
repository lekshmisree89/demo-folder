// TODO: import express
import express, { type Request, type Response } from 'express';



// Import the JSON data
import { readFileSync } from 'node:fs';
const termData = JSON.parse(readFileSync('src/terms.json', 'utf8'));



// TODO: initialize app variable
const app = express();
const PORT = 3001;


//GET
// TODO: Create a route for a GET request that will return the 
//content of our `terms.json` file
app.get('/api', (_req: Request, res: Response) => {
  res.json(termData)
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
