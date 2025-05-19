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
  const deleteBlog = async (blogId:string) => {
    const result = await Blog.findByIdAndDelete(blogId);
    return result;
  }
  const singleBlog = async (blogId:string) => {
    const result = await Blog.findById(blogId);
    return result;
  }
  export const BlogServices = {
    createBlog,
    getBlog,
    deleteBlog,
    singleBlog
  };