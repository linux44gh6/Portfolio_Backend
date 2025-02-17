import { StatusCodes } from "http-status-codes";
import catchAsync from "../../Utills/catchAsync";
import SendResponse from "../../Utills/SendResponse";
import { ContactService } from "./contact.service";

const sendMail=catchAsync(async(req,res)=>{
    const contactData=req.body;
    const result=await ContactService.sendMail(contactData);
    SendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Mail send success',
        data: result,
      });
})

export const ContactController={sendMail}

