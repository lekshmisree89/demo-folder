import apiRoutes from './api/index.js';
import express from 'express';
import tipRoutes from './api/tipsRoutes.js';
const router = express.Router();
router.use('/tips', apiRoutes);
router.use('/feedback', tipRoutes);
export default router;
