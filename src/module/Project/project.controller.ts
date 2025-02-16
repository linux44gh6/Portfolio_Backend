import { StatusCodes } from "http-status-codes";
import catchAsync from "../../Utills/catchAsync";
import SendResponse from "../../Utills/SendResponse";
import { ProjectServices } from "./project.service";

const createProject = catchAsync(async (req, res) => {
    const result=await ProjectServices.createProject(req.body);
    SendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blog created success',
      data: result,
    });
  });

export const ProjectController = { createProject };