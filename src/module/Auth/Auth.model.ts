import mongoose from "mongoose";
import { TUser } from "./Auth.interface";
import bcrypt from 'bcrypt';
import config from "../../app/config";
const UserSchema=new mongoose.Schema<TUser>({
    name:{
        type:String,
        required:true
    },
    email:{type:String,
        required:true
    },
    password:{type:String,
        required:true
    }
})

UserSchema.pre("save",async function (next){
    const user=this
    user.password=await bcrypt.hash(user.password,Number(config.salt_rounds))
    next()
})
export const UserModel=mongoose.model<TUser>('User',UserSchema)