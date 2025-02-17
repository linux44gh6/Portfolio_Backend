import { TBlog } from "./Blog.interface";
import { Blog } from "./Blog.model";

const createBlog = async (payload:TBlog) => {
    const blogData = {
      ...payload,
    };
    console.log(blogData);
    const result = await Blog.create(blogData);
    return result;
  };
  
  const getBlog = async () => {
    const result = await Blog.find();
    return result;
  }
  export const BlogServices = {
    createBlog,
    getBlog
  };