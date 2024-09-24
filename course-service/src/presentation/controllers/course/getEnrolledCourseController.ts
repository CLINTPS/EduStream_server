import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const getEnrolledCourseController =(dependencies:IDependencies)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const {
            useCases :{getEnrollmentByUserIdUseCase}
        }=dependencies;
        try {
            console.log("Reached getEnrolledCourse",req.params);
            
            const {id}=req.params;
            
            const result = await getEnrollmentByUserIdUseCase(dependencies).execute(id)

            console.log("getEnrolledCourse result....",result);
            

            res.status(200).json({
                success: true,
                message: "Get Enrolled course success",
                data: result,
            });

        } catch (error:any) {
            console.log("getAllCoursesController error",error);
            next(error)
        }
    }
}