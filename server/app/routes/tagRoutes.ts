import TagController from '@app/controllers/tagController';
import express, { Router } from 'express';

const tagRoutes: Router = express.Router();

tagRoutes.get('/', TagController.getAllTags);
tagRoutes.get('/:id', TagController.getTagById);
tagRoutes.post('/', TagController.createTag);
tagRoutes.put('/:id', TagController.updateTag);
tagRoutes.delete('/:id', TagController.deleteTag);

export default tagRoutes;
