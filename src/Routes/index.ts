import { Router } from 'express';
import { AuthRoute } from '../module/Auth/Auth.routes';
import { BlogRoute } from '../module/Blog/Blog.routes';
import { ProjectRoute } from '../module/Project/project.routes';
import { ContactRoute } from '../module/Contact/contact.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoute,
  },
  {
    path: '/blog',
    route: BlogRoute,
  },
  {
    path: '/project',
    route: ProjectRoute,
  },
  {
    path: '/contact',
    route: ContactRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
