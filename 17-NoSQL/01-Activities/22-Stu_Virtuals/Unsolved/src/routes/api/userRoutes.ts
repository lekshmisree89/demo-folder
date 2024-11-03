import { Router } from 'express';
const router = Router();
import { createUser, getUsers, getSingleUser } from '../../controllers/userController.js';


///api/users /endpint 
router.route('/').get(getUsers).post(createUser);//get all users and create a new user;get request and post request

//api/users/:userId
router.route('/:userId').get(getSingleUser);//get a single user post request

export default router;
