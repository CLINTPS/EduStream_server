import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../../application/interface/IDependencies";

export const getCourseController =(dependencies:IDependencies)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const {
            repositories :{getCourse}
        }=dependencies;
        try {
            console.log("Reached getCourseController",req.params);
            const {id}=req.params;
            
            const result = await getCourse(id)

            res.status(200).json({
                success: true,
                message: "Get course success",
                data: result,
              });
            
        } catch (error:any) {
            console.log("getAllCoursesController error",error);
            next(error)
        }
    }
}