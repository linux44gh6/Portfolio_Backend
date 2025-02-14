import { TUser } from "./Auth.interface";
import { UserModel } from "./Auth.model";

const createUser=async(payload:TUser)=>{
const result=await UserModel.create(payload)
return result
}

export const AuthService={
    createUser
}