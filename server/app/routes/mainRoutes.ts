import express, { Router } from 'express';
import postRoutes from './postRoutes';
import tagRoutes from './tagRoutes';

const mainRoutes: Router = express.Router();

mainRoutes.use('/tags', tagRoutes);
mainRoutes.use('/posts', postRoutes);

export default mainRoutes;
