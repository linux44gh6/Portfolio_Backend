import { Router } from "express";
import { ProjectController } from "./project.controller";

const router=Router()
router.post('/create-project', ProjectController.createProject)
router.get('/', ProjectController.getProject)

export const ProjectRoute=router