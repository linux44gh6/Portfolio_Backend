import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { userEmail: string },
  secret: string,
  expiresIn: string | number
): string => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn: expiresIn as jwt.SignOptions['expiresIn'],
  });
};
