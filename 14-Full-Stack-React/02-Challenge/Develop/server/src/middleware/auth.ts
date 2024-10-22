import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Verify the token exists and add the user data to the request object
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    if (decoded) {
      const user = decoded as JwtPayload;
      req.user = user;
      return next();  // Calling next() to continue to the next middleware
    } else {
      return res.status(400).json({ message: 'Invalid token' });
    }
  });
};

export const generateToken = (username: string) => {
  return jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '15m' });
};
