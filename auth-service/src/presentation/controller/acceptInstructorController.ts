import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const acceptInstructorController = (dependencies:IDependencies) => {
    return async (req: Request, res: Response, next: NextFunction)=>{
        const {
            useCases : { acceptInstructorUseCase } 
        } = dependencies;
        try {
            console.log("acceptInstructor====", req.body);
            const AcceptInstructor = await acceptInstructorUseCase(dependencies).execute(req.body.email);

            console.log("??????????????????????????",AcceptInstructor);

            res.status(200).json({
                success:true,
                message: "Accepted instracture request..",
                data:{}
            })
            
        } catch (error: any) {
            console.log("acceptInstructor controller error:", error);
            next(error); 
        }
    }
}