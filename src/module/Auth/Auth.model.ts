import mongoose, { Schema } from "mongoose";
import { IUserModel, TUser } from "./Auth.interface";
import bcrypt from "bcrypt";
import config from "../../app/config";

const UserSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash the password before saving
UserSchema.pre<TUser>("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
  next();
});

// Add static method
UserSchema.statics.isPasswordMatched = async function (
  plainTextPass: string,
  hashedPass: string
): Promise<boolean> {
  return bcrypt.compare(plainTextPass, hashedPass);
};

// Create the User model with correct typing
export const UserModel = mongoose.model<TUser,IUserModel>("User", UserSchema);
