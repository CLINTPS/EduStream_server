import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../error";
import { findUserById } from "../../../infrastructure/database/mongoDB/repositories";

export const verifyInstructor = async (req: Request, res: Response, next: NextFunction) => {
    // console.log("Verify instuctore...",req.body);
    
    if (!req.body.instructorRef) {
        return next(ErrorResponse.unauthorized("Token not found,verify admin"));
    }
    
    const user = await findUserById(req.body.instructorRef);
    console.log("Verify instuctore...",user);
    
    if (!user) {
        return next(ErrorResponse.unauthorized("Token not found,verify admin"));
    }

    if (user.role !== "instructor") {
        return next(ErrorResponse.unauthorized("Access denied, require instructor"));
    }
    next();
}