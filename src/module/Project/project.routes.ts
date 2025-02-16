import { Router } from "express";
import { ProjectController } from "./project.controller";

const router=Router()
router.post('/create-project', ProjectController.createProject)

export const ProjectRoute=router