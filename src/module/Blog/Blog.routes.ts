import { Router } from "express";
import { BlogController } from "./Blog.controller";

const router=Router()
router.post('/create-blog',BlogController.createBlog)
router.get('/',BlogController.getBlog)

export const BlogRoute=router