import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const ProductPostSchema = new Schema<TProject>(
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
    live_link: {
      type: String,
    },
    github_link: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>('Project', ProductPostSchema);