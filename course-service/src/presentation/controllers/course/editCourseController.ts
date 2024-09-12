import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const editCourseController = (dependencies:IDependencies)=>{
    return async(req: Request, res: Response, next: NextFunction)=>{
        const {
            useCases:{editCourseUseCase}
        }=dependencies;
        try {
            console.log("editCourseController reached", req.body);
            const data = req.body
            const resultData = await editCourseUseCase(dependencies).execute(data)
            
            if(!resultData){
                throw new Error("Course creation failed!.");
            }

            console.log("Edit course result data :",resultData);

            res.status(200).json({
                success:true,
                data:{resultData},
                message:"Course updated successfuly.."
            })

        } catch (error) {
            console.log("Edit course controller error", error);
            next(error);
          }
    }
}