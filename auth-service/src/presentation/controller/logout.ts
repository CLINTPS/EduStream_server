import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const logoutController = (dependencies:IDependencies) => {
    return async (req:Request,res:Response,next:NextFunction) => {
        console.log("LogOut controller reached");
        
        try {
            res.cookie("access_token","",{
                maxAge:1,
                httpOnly:true,
                secure:true,
                sameSite:"none"
            })
            res.cookie("refresh_token","",{
                maxAge:1,
                httpOnly:true,
                secure:true,
                sameSite:"none"
            })
            console.log("User access and refresh tokent deleted....");

            res.status(204).json({})
            
        } catch (error) {
            console.log("Logout controller error :",error);
            next(error)
        }
    }
}