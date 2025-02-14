import { StatusCodes } from "http-status-codes";
import { AppError } from "../../app/Error/AppError/AppError";
import { TUser } from "./Auth.interface";
import { UserModel } from "./Auth.model";
import jwt from "jsonwebtoken"
import config from "../../app/config";
import { createToken } from "./Utills";
const createUser=async(payload:TUser)=>{
const result=await UserModel.create(payload)
return result
}

const loginUser=async(payload:Partial<TUser>)=>{
    const password=payload.password as string
    const user=await UserModel.findOne({email:payload.email})
    if(!user){
        throw new AppError(StatusCodes.NOT_FOUND,"user not found")
    }
    const isPasswordMatch=await UserModel.isPasswordMatched(password,user.password)
    if(!isPasswordMatch){
        throw new AppError(StatusCodes.UNAUTHORIZED,"password not match")
    }
    const jwtPayload={
        userEmail:user.email
    }
    const accessToken=createToken(jwtPayload,config.jwt_secret as string,config.jwt_expires_in as string)
    return {accessToken}
}
export const AuthService={
    createUser,
    loginUser
}