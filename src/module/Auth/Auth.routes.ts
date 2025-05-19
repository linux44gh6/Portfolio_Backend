import { Router } from 'express';
import { AuthController } from './Auth.controller';

const route = Router();
route.post('/create-user', AuthController.createUser);
route.post('/login', AuthController.loginUser);
export const AuthRoute = route;
