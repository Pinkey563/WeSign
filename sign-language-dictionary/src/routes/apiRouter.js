import { Router } from 'express';
import Paths from '../constants/paths.js';
import authRouter from './authRouter.js';
import wordRouter from './wordRouter.js';
import userRouter from './userRouter.js';

const apiRouter = Router();

apiRouter.use(Paths.Auth.Base, authRouter);
apiRouter.use(Paths.Word.Base, wordRouter);
apiRouter.use(Paths.User.Base, userRouter);

export default apiRouter;
