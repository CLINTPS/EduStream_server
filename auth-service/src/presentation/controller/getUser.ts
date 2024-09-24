
import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";


export const getUserController=(dependencies:IDependencies) => {
    // console.log("Reached getUser controller");
    const {
        useCases:{userFindByIdUseCase}
    }=dependencies;

    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            // console.log("Get user controller Data ....",req.user);
            if (!req.user) {
                throw new Error("User doesn't exist!");
            }
            const result=await userFindByIdUseCase(dependencies).execute(req.user._id)
            if (!result) {
                throw new Error("User doesn't exist");
            }
            if(result.isBlocked){
                throw new Error("User doesn't exist");
            }
            // console.log('user data in get user data',result);

            res.status(200).json({
                success:true,
                data:result,
                message:"User exist"
            })

        } catch (error) {
            next(error)
        }
    } 
}