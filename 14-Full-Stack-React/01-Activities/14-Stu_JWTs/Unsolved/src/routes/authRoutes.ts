import { Router } from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

const router = Router();

// TODO: Add JWT signing and separate login route from userRoutes

// Login route


router.post('/login', async (req: Request, res: Response) => {
  try {

    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      // the error message shouldn't specify if the login failed because of wrong email or password
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }

    const secretKey = process.env.JWT_SECRET_KEY || '';

    const token = jwt.sign( { userId: userData.id, email: userData.email } ,secretKey, { expiresIn: '1h' });
  
    res.status(200).json({ message: 'You are now logged in!', token });
    console.log(token);
  } catch (err) {
    res.status(500).json(err);// Internal server error menas something went wrong on the server
  }
});

export default router;
