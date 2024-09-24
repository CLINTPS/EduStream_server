import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const getEnrolledSingleCourseController =(dependencies:IDependencies)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const {
            useCases :{getEnrollmentUseCase,getChechkEnrolledUseCase}
        }=dependencies;
        try {
            console.log("Reached getEnrolledSingleCourseController",req.params);

            const {id}=req.params;
            
            const result = await getEnrollmentUseCase(dependencies).execute(id)

            res.status(200).json({
                success: true,
                message: "Get course success",
                data: result,
            });

        } catch (error:any) {
            console.log("getEnrolledSingleCourseController error",error);
            next(error)
        }
    }
}