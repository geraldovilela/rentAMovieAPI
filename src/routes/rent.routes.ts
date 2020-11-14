import { Router } from 'express';
import RentController from '../controllers/RentController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const rentController = new RentController();
const rentRouter = Router();

rentRouter.use(ensureAuthenticated);
rentRouter.post('/', rentController.rent)
rentRouter.put('/', rentController.return)

export default rentRouter;
