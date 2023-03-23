import { Request, Response, NextFunction } from 'express';
import ErrorUtils from '../Util/ErrorUtil';

const errorMidlleware = (
  error: Error & Partial<ErrorUtils>,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'error interno';
  return res.status(statusCode).json({ message });
};

export default errorMidlleware;