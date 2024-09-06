import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies";
import { rejectInstractureProducer } from "../../infrastructure/kafka/producer";

export const rejectInstructorController = (dependencies:IDependencies) =>{
   return async (req: Request, res: Response, next: NextFunction)=>{
    console.log("Controller hit: rejectInstructorController");
    const {
        useCases:{rejectInstructorUseCase}
    }= dependencies;
    try {
        // const instructorId = req.params.id;
        const rejectedInsData = req.body;

        console.log("Reasons for Rejection:", rejectedInsData);

        const rejectedData = await rejectInstructorUseCase(dependencies).execute(rejectedInsData)
        
        console.log(">>>>>>>>>>>>>",rejectedData);

        await rejectInstractureProducer(rejectedData)
        
        res.status(200).json({
            success:true,
            message:"Instracture request rejected"
        })
        
        
    } catch (error: any) {
        console.log("rejectInstructor controller error:", error);
        next(error); 
    }
   }
}