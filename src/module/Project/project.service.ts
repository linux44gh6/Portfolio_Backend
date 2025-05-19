import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProject = async (payload:TProject) => {
  console.log(payload);
    const blogData = {
      ...payload,
    };
    const result = await Project.create(blogData);
    return result;
  };
  
  const getProject = async () => {
    const result = await Project.find();
    return result;
  }
  const deleteProject = async (projectId:string) => {
    const result = await Project.findByIdAndDelete(projectId);
    return result;
  }
  const singleProject = async (projectId:string) => {
    const result = await Project.findById(projectId);
    return result;
  }
  export const ProjectServices = {
    createProject,
    getProject,
    deleteProject,
    singleProject
  };