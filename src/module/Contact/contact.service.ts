import { TContact } from "./contact.interface";
import { transporter } from "./utils";

const sendMail = async (payload: TContact) => {
  try {
    console.log("Sending email with payload:", payload);

    const info = await transporter.sendMail({
      from: `"${payload.firstName}" <${payload.email}>`,
      to: "abireshan32@gmail.com", 
      subject: `New Message from ${payload.firstName}`, 
      text: `Hello ${payload.firstName},\n\n${payload.message}`, 
      html: `<p>Hello <b>${payload.firstName}</b>,</p><p>${payload.message}</p>`,
    });

    console.log("Email sent successfully:", info.response);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Error sending email" };
  }
};

export const ContactService = { sendMail };
