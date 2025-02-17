import { model, Schema } from 'mongoose';
import { TBlog } from './Blog.interface';

const ProductPostSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required:true
    },
    description: {
      type: String,
      required:true
    },
    image: {
      type: String,
    },
    likes: {
      type: Number,
    },
    date: {
      type: Date,
    },
    author: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<TBlog>('Blog', ProductPostSchema);