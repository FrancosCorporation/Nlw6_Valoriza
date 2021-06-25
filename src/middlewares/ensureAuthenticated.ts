import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const token = request.headers.authorization;

    if (!token) {
        return response.status(401).end();
    }
    try {
        const { sub } = verify(token.replace('Bearer ', ''), process.env.NODE_TOKEN_HASH || '') as IPayLoad;

        request.user_id = sub;

        return next();

    }
    catch (err) {
        return response.status(401).end();
    }
}