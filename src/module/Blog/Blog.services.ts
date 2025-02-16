import { TBlog } from "./Blog.interface";
import { Blog } from "./Blog.model";

const createBlog = async (payload:TBlog) => {
    const blogData = {
      ...payload,
    };
    const result = await Blog.create(blogData);
    return result;
  };
  
  export const BlogServices = {
    createBlog,
  };