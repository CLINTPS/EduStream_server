import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../../application/interface/IDependencies";

export const getAllCoursesController =(dependencies:IDependencies)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const {
            useCases :{getAllCourseUseCase}
        }=dependencies;
        try {
            // console.log("Reached getAllCoursesController");
            
            const allData = await getAllCourseUseCase(dependencies).execute()
            // console.log("getAllCoursesController...",allData);

            res.status(200).json({
                success:true,
                data:{allData},
                message:"All course getting"
            })
            
        } catch (error:any) {
            console.log("getAllCoursesController error",error);
            next(error)
        }
    }
}