import catchAsync from '../../Utills/catchAsync';
import SendResponse from '../../Utills/SendResponse';
import { AuthService } from './Auth.service';

const createUser = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await AuthService.createUser(data);
  console.log(result);
  SendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Created Successfully',
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const loginData = req.body;
  const result = await AuthService.loginUser(loginData);
  SendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Login Successfully',
    data: result,
  });
});
export const AuthController = {
  createUser,
  loginUser,
};
