
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

export const BlogController = { 
    getBlog,createBlog };