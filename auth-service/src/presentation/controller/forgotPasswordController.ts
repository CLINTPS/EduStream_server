import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { userCreatedProducer } from "../../infrastructure/kafka/producer";

export const forgotPasswordController=(dependencies:IDependencies) => {
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("Reached forgotPasswordController...",req.body);
            const userCredentials =req.body;
            console.log("userCredentials....",userCredentials);

            if(!userCredentials.otp){
                try {
                    let email=req.body.email
                    console.log('User otp send to this mail :',email);
                    await userCreatedProducer(email,'notification-service-topic')
                    return res.status(200).json({
                        success:true,
                        message:"Otp send successfully"
                    })
                    
                } catch (error:any) {
                    console.log(error, "Something Went Wrong in OTP section");
                    return res.json({
                    success: false,
                    message: "Something went wrong in otp",
                    });
                }
            }

        } catch (error) {
            next(error)
        }
    } 
}