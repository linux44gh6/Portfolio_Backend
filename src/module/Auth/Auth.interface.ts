import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role:string
};
export interface IUserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomEmail(id: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPass: string,
    hashedPass: string
  ): Promise<boolean>;
}
