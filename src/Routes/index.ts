import { Router } from 'express';
import path from 'path';
import { AuthRoute } from '../module/Auth/Auth.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/',
    route: AuthRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
