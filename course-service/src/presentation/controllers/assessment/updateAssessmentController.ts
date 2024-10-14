import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const updateAssessmentController = (dependencies:IDependencies) => {
    const {
        useCases:{updateAssessmentUseCase}
    }=dependencies; 
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const data=req.body
            const {id} = req.params
            console.log("Update assessment controller data...",data);
            console.log("Update assessment controller assessmentId...",req.params);
            // console.log("Create assessment controller data...",JSON.stringify(data, null, 2));
           
            const updateAssessment = await updateAssessmentUseCase(dependencies).execute(id,data)
            console.log("updateAssessment..",updateAssessment);

            return res.status(200).json({
                success: true,
                message: "Assessment updated successfully.",
                data: updateAssessment,
            });
            
            
        } catch (error) {
           console.log("Update assessment controller error",error);
            
        }
        
    }
}