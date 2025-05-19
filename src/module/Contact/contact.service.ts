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
  text: `
    New message from: ${payload.firstName}
    Email: ${payload.email}
    
    Message:
    ${payload.message}
  `,
  html: `
    <h3>New Message from ${payload.firstName}</h3>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message.replace(/\n/g, '<br>')}</p>
  `,
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
