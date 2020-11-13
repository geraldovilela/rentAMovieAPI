import { Router } from 'express';
import MoviesController from '../controllers/MoviesController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';


const movieController = new MoviesController();
const movieRouter = Router();

movieRouter.use(ensureAuthenticated);

movieRouter.get('/', movieController.find);

movieRouter.post('/', movieController.create);

movieRouter.put('/:id',movieController.update);

movieRouter.delete('/:id',movieController.delete);

movieRouter.get('/search', movieController.findBytitle)

export default movieRouter;
