import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const submitAssessmentController = (dependencies:IDependencies) => {
    const {
        useCases:{submitAssessmentUseCase}
    }=dependencies;
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("Submit assessment data...",req.body);
            const data=req.body;

            const submitResponse = await submitAssessmentUseCase(dependencies).execute(data)
            console.log("submitResponse..",submitResponse);

            res.status(200).json({
                success: true,
                data: submitResponse,
                message: "Assessment submitted successfully."
            });
             
            
        } catch (error:any) {
            console.error("Submit assessment controller error :",error);
            
        }
    }
}