import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const addReviewController = (dependencies:IDependencies) => {
    const {
        useCases:{addReviewAndRatingUseCase}
    }=dependencies;
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("Add review controller data:",req.body);
            const data=req.body

            const response = await addReviewAndRatingUseCase(dependencies).execute(data)
            console.log("Review response",response);
            
            res.status(200).json({
                success:true,
                message:"Review and Rating is added successfully"
            })
            
        } catch (error) {
            console.error("Add review controller error : ",error);
            
        }
    }
}