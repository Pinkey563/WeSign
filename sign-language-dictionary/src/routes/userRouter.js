import { Router } from 'express';
import { getAllUsers, deleteUser } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const userRouter = Router();

userRouter.get('/', authMiddleware, getAllUsers);
userRouter.delete('/:id', authMiddleware, deleteUser);

export default userRouter;
