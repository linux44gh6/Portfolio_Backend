import { Router } from 'express';
import { AuthController } from './Auth.controller';

const route = Router();
route.post('/create-user', AuthController.createUser);
export const AuthRoute = route;
