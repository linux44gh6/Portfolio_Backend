import { Response } from "express"

type TResponse={
    statusCode:number,
    message:string,
    success:boolean,
    data?:any
}

const SendResponse=(res:Response,data:TResponse)=>{
    res.status(data.statusCode).json({
        success:data.success,
        message:data.message,
        data:data.data
    })
}

export default SendResponse