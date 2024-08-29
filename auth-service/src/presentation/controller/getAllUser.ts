import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { ErrorResponse } from "../../_lib/common/error";
import { getAllUser } from "../../infrastructure/database/mongoDB/repostories/getAllUser";


export const getAllUserController = (dependencies:IDependencies) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Reaches all user details constroller");
            
          const allData = await getAllUser();
          if (!allData) {
            return next(ErrorResponse.notFound('Users not found'));
          }
          res.status(200).json({ success: true, data: { allData }, message: "All user data retrieved successfully" });

        } catch (error:any) {
            console.log("getAllUser Controller error :",error);
            next(error)
        }
    }
}