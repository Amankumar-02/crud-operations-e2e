import express from 'express';
import { signupUser, loginUser, logoutUser, getUsers } from '../controllers/userController.js';
import { disallowAuthenticated, authenticateUser } from '../middlewares/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/signup', disallowAuthenticated, signupUser);
userRouter.post('/login', disallowAuthenticated, loginUser);
userRouter.post('/logout', authenticateUser, logoutUser);
userRouter.get('/', authenticateUser, getUsers);

export default userRouter;