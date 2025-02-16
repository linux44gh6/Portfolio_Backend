import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProject = async (payload:TProject) => {
    const blogData = {
      ...payload,
    };
    const result = await Project.create(blogData);
    return result;
  };
  
  export const ProjectServices = {
    createProject,
  };