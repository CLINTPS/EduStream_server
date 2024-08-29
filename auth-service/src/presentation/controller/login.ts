import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies"
import { loginValidation } from "../../_lib/validation";
import { ErrorResponse } from "../../_lib/common/error";
import { comparePassword } from "../../_lib/bcrypt";
import { jwtAccessToken, jwtRefreshToken } from "../../_lib/jwt";

export const loginController = (dependencies:IDependencies) => {
    const {
        useCases : { userLoginUseCase } 
    } = dependencies;

    return async (req:Request,res:Response,next:NextFunction) => {
        try {
            console.log("User login data for cliend side :",req.body);
            const { value,error } = loginValidation.validate(req.body)
            if(error){
                throw new Error(error.message);
            }
            console.log("Check....../////",value);
            
            const result = await userLoginUseCase(dependencies).execute(value.email,value.password)
            console.log("Resutl data of user login area...........",result);

            if(!result){
                return next(ErrorResponse.unauthorized("Your email address doesn't seem to be in our system."));
            }

            if(result.isBlocked){
                return next(ErrorResponse.unauthorized("EduSream team blocked your account,Please contact to support team"))
            }

            const matchPassword = await comparePassword(value.password,result.password!)
            console.log("Login time password is :",matchPassword);
            
            if(!matchPassword){
                return next(ErrorResponse.unauthorized("Incorrect password. Please try again.."))
            }

            const accessToken = await jwtAccessToken({
                _id:String(result?._id),
                email:result?.email!,
                role:result?.role!
            })
            // console.log(` ${result.email} Access jwt token :`,accessToken);
            
            
            const refreshToken = await jwtRefreshToken({
                _id:String(result?._id),
                email:result?.email!,
                role:result?.role!
            })
            // console.log(` ${result.email} Access jwt token :`,refreshToken);

            res.cookie("access_token",accessToken,{
                httpOnly:true,
                secure:true,
                sameSite:"none"
            })

            res.cookie("refresh_token",refreshToken,{
                httpOnly:true,
                secure:true,
                sameSite:"none"
            })

            res.status(200).json({
                success:true,
                data:result,
                message : "User_Login successful.."
            })
            
        } catch (error:any) {
            console.log("Login controller error :",error);
            next(error)
        }
    }
}