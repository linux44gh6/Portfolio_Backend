import mongoose from "mongoose";
import { TErrorSources } from "../../../interface/error";

export const handelValidationError=(err:mongoose.Error.ValidationError)=>{
const errorSources:TErrorSources=Object.values(err.errors).map((val:mongoose.Error.ValidatorError|mongoose.Error.CastError)=>{
return{
    path:val.path,
    message:val.message
}
})
return{
    statusCode:400,
    message:'Validation Error',
    errorSources
}
}
