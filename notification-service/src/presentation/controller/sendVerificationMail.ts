import { Request,Response,NextFunction} from 'express'
import { IDependencies } from "../../application/interfaces/IDependencies";
import { sendVerificationMail } from "../../infrastructure/services";

export const sendVerificationMailController=(dependencies:IDependencies)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        // console.log("Controller sendverification reached");
        
        try {
            console.log("Controller sendverification reached",req.body);

            if(!req.body){
                throw new Error("Email is required!");
            }
            await sendVerificationMail(req.body.email);
            res.status(200).json({
                success:true,
                data:{},
                message:"Email sended...."
            })

        } catch (error:any) {
            console.log("Send Verification controler error",error);
            next(error);
        }
    };
};