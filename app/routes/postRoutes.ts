import PostController from '@app/controllers/postController';
import express, { Router } from 'express';

const postRoutes: Router = express.Router();

postRoutes.get('/', PostController.getAllPosts);
postRoutes.get('/:id', PostController.getPostById);
postRoutes.post('/', PostController.createPost);
postRoutes.put('/:id', PostController.updatePost);
postRoutes.delete('/:id', PostController.deletePost);

export default postRoutes;
