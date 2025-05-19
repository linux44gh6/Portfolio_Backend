import { Router } from "express";
import { ProjectController } from "./project.controller";

const router=Router()
router.post('/create-project', ProjectController.createProject)
router.get('/', ProjectController.getProject)
router.delete('/:projectId', ProjectController.deleteProject)
router.get('/:projectId', ProjectController.singleProject) 

export const ProjectRoute=router