import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import userProfileUpdateProducer from "../../infrastructure/kafka/producer/userProfileUpdateProducer";

export const userEditProfileController = (dependencies:IDependencies) => {
    return async (req:Request,res:Response,next:NextFunction)=>{
        const {
            useCases:{userEditProfileUseCase}
        }= dependencies;
        try {
            console.log("userEditProfile",req.body);
            const data=req.body;

            const EditeUserData = await userEditProfileUseCase(dependencies).execute(data)

            console.log("<<<<<<<<",EditeUserData);

            await userProfileUpdateProducer(EditeUserData)
            
            res.status(200).json({
                success:true,
                message:"Profile Editing successfully.."
            })

        } catch (error: any) {
            console.log("userEditProfile controller error:", error);
            next(error); 
        }
    }

}