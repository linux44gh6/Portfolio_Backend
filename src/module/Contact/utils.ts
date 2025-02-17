import nodemailer from 'nodemailer';
import config from '../../app/config';
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abireshan32@gmail.com",
      pass: `${config.app_pass}`,
    },
  });