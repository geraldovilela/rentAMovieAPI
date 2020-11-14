// src/routes/index.ts
import { Router } from 'express';
import movieRouter from './movie.routes';
import userRouter from './users.routes';
import sessionsRoutes from './sessions.routes';
import rentRouter from './rent.routes';
const routes = Router();

routes.use('/session', sessionsRoutes)
routes.use('/movie', movieRouter);
routes.use('/user', userRouter);
routes.use('/rent',rentRouter);


export default routes;
