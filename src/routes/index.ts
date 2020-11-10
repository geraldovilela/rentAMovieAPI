// src/routes/index.ts
import { Router } from 'express';
import movieRouter from './movie.routes';

const routes = Router();

routes.use('/movie', movieRouter);

export default routes;
