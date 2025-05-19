import { Router } from "express";
import { BlogController } from "./Blog.controller";

const router=Router()
router.post('/create-blog',BlogController.createBlog)
router.get('/',BlogController.getBlog)
router.delete('/:blogId',BlogController.deleteBlog)
router.get('/:blogId',BlogController.singleBlog)

export const BlogRoute=router