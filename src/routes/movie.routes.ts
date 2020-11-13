import { Router } from 'express';
import MoviesController from '../controllers/MoviesController';

const movieController = new MoviesController();
const movieRouter = Router();

movieRouter.get('/', movieController.find);

movieRouter.post('/', movieController.create);

movieRouter.put('/:id',movieController.update);

movieRouter.delete('/:id',movieController.delete);

export default movieRouter;
