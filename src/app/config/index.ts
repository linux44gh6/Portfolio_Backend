import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
   NODE_ENV: process.env.NODE_ENV,
  // DB_HOST: process.env.DB_HOST,
  // DB_PORT: process.env.DB_PORT,
  // DB_USER: process.env.DB_USER,
  // DB_PASSWORD: process.env.DB_PASSWORD,
  // DB_NAME: process.env.DB_NAME,
  // JWT_SECRET: process.env.JWT_SECRET,
  // JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};
