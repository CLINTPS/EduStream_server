import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../../application/interface/IDependencies";

export const createAssessmentController = (dependencies:IDependencies) => {
    const {
        useCases:{createAssessmentUseCase}
    }=dependencies;    
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const data=req.body
            // console.log("Create assessment controller data...",data);
            // console.log("Create assessment controller data...",JSON.stringify(data, null, 2));
            const cretedAssessment = await createAssessmentUseCase(dependencies).execute(data)

            if(!cretedAssessment){
                throw new Error("Course creation failed!.");  
            }
            console.log("Create assessment creation data :",cretedAssessment);

            res.status(200).json({
                success:true,
                data:cretedAssessment,
                message:"Assessment created.."
            })
            
        } catch (error) {
           console.log("Create assessment controller error",error);
            
        }
        
    }
}