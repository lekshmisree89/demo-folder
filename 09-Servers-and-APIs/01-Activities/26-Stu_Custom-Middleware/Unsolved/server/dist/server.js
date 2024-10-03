import express from 'express';
import allRoutes from './routes/index.js';
import logRequest from './middleware/logRequest.js';
//TODO: import the `logRequest` middleware.
const app = express();
app.use(logRequest);
const PORT = process.env.PORT || 3002;
// Serves static files in the entire client's dist folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//TODO: apply the `logRequest` middleware to all routes.
app.use(express.static('../client/dist'));
app.use(allRoutes);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
