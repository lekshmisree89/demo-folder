import tipRoutes from './tipRoutes.js';
import feedbackRoutes from './feedbackRoutes.js';
import express, {type Request,type Response} from 'express';
const router = express.Router();
import path from 'node:path';
import { fileURLToPath } from 'node:url'; 
import allRoutes from './routes/index.js';
//html routes 

router.get('/', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
  // This view route is a GET route for the feedback page
  router.get('/feedback', (_req: Request, res: Response) =>
    res.sendFile(path.join(__dirname, '../../client/dist/feedback.html'))
  );


  //api routes
router.use('/api/tips', tipRoutes);
router.use('/api/feedback', feedbackRoutes);



export default router;
