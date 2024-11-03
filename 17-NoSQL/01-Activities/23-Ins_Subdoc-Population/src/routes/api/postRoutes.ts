import { Router } from 'express';
const router = Router();
import { getSinglePost, getPosts, createPost } from '../../controllers/postController.js';

router.route('/').get(getPosts).post(createPost);

//path: /api/posts/:postId
router.route('/:postId').get(getSinglePost);

export default router;
