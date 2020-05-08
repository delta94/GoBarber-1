import { Router, Request, Response } from 'express';
import appoitmentRoutes from './appointments.routes';
import usersRouter from './user.routes';
import sessionsRouter from './sessions.routes';

import authMiddleware from '../middlewares/authMiddleware';

const routes = Router();

routes.use('/sessions', sessionsRouter);

routes.use(authMiddleware);

routes.use('/appointments', appoitmentRoutes);
routes.use('/users', usersRouter);

routes.get('/', (request: Request, response: Response) =>
  response.json({ message: 'Hello GoStack' }),
);

export default routes;