import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../error";
import { findUserById } from "../../../infrastructure/database/mongoDB/repositories";

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
    
    if (!req.user) {
        return next(ErrorResponse.unauthorized("Token not found,verify admin"));
    }
        
    const user = await findUserById(req.user._id);
    
    if (!user) {
        return next(ErrorResponse.unauthorized("user(admin) not found"));
    }

    if (user.role !== "admin") {
        return next(ErrorResponse.unauthorized("Role mismatch,verify admin"));
    }
    
    next();
}