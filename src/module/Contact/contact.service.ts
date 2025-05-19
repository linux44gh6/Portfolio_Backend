import { TContact } from "./contact.interface";
import { Contract } from "./contract.model";
import { transporter } from "./utils";

const sendMail = async (payload: TContact) => {
  const result=await Contract.create(payload)
  try {
    console.log("Sending email with payload:", payload);
    const info = await transporter.sendMail({
      from: `"${payload.firstName}" <${payload.email}>`,
      to: "abireshan32@gmail.com", 
      subject: `New Message from ${payload.firstName}`, 
      text: `Hello ${payload.firstName},\n\n${payload.message}`, 
      html: `<p>Hello <b>${payload.firstName}</b>,</p><p>${payload.message}</p>`,
    });
  } catch (error) {
    return { success: false, message: "Error sending email" };
  }
  return result
};
const getAllContact=async()=>{
  const result=await Contract.find();
  return result
}

export const ContactService = { sendMail,getAllContact };
