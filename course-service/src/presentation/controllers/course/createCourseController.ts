import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const createCourseController = (dependencies: IDependencies)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const {
            useCases:{createCourseUseCase}
        }=dependencies;
        try {
            const data=req.body;
            // console.log("Create course controller data :",req.body);
            const result = await createCourseUseCase(dependencies).execute(data)
            
            if(!result){
                throw new Error("Course creation failed!.");
                
            }
            console.log("Create course creation data :",result);

            res.status(200).json({
                success:true,
                data:result,
                message:"Course created.."
            })
            
        } catch (error) {
            console.log("Create course controller error",error);
            
            next(error)
        }
    }
}