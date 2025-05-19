
import catchAsync from "../../Utills/catchAsync";
import { StatusCodes } from "http-status-codes";
import SendResponse from "../../Utills/SendResponse";
import { BlogServices } from "./Blog.services";
const createBlog = catchAsync(async (req, res) => {
    const result=await BlogServices.createBlog(req.body);
    SendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blog created success',
      data: result,
    });
  });
  const getBlog = catchAsync(async (req, res) => {
    const result=await BlogServices.getBlog();
    SendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blog created success',
      data: result,
    });
  });

  const deleteBlog = catchAsync(async (req, res) => {
    const {blogId}=req.params;
    console.log(blogId);
    const result=await BlogServices.deleteBlog(blogId);
    SendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blog deleted success',
      data: result,
    });
  })
  const singleBlog = catchAsync(async (req, res) => {
    const {blogId}=req.params;
    const result=await BlogServices.singleBlog(blogId);
    SendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blog retrive success',
      data: result,
    });
  })
export const BlogController = { 
    getBlog,
    createBlog,
    deleteBlog,
    singleBlog
   };