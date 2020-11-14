import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AuthConfig from "../config/auth";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const AuthHeader = request.headers.authorization;

  if (!AuthHeader) {
    throw new Error("JWT is misssing.")
  }

  const [, token] = AuthHeader.split(' ');

  try {
    const tokenData = verify(token, AuthConfig.jwt.secret);

    const { sub } = tokenData as TokenPayload;

    request.user = {
      id:sub
    }

    return next();
  } catch {
    throw new Error('Invalid JWT Token')
  }
};
