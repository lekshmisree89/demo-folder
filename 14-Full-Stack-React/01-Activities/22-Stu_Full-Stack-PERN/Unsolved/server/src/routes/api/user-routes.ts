import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';

const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
    try{    
        const users = await User.findAll();//findAll is a sequelize method that returns all the users in the database
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
);


//TODO: Get all the Users out of the database and send them to the 
//client as a response




    



export { router as userRouter };
