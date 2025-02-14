import { NextFunction, Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';

const NotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
  });
};
export default NotFound;
