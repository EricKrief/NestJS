import { Request, Response, NextFunction } from "express";


export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('From logger middleware');
    console.log(req.params);
    next();
}

export function doStuffMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('Doing stuff');
    next();
}