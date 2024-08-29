import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies"
import { OAuth2Client } from 'google-auth-library'
import { jwtAccessToken, jwtRefreshToken } from "../../_lib/jwt";
import { UserEntity } from "../../domain/entites";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export const googleAuthController = (dependencies:IDependencies) => {

    const {
        useCases: {
            userCreateUseCase,
            userFindByEmailUseCase
        }
    } = dependencies;

    return async (req:Request,res:Response,next:NextFunction) =>{
        console.log("Reached google authentication controller",req.body);
        try {
      
            const body:{ 
                email:string
                given_name:string, 
                family_name:string 
            } = req.body;

        const {email,given_name,family_name}=req.body


            // console.log("Email:",email);
            // console.log("FirstName:",given_name);
            // console.log("LastName:",family_name);
            
        const exist= await userFindByEmailUseCase(dependencies).execute(email)
        console.log("Exist google auth user",exist?.role);

        if(exist){
            const accessToken = jwtAccessToken({
                _id: String(exist?._id),
                email: email,
                role: String(exist?.role)
            });

            
            const refreshToken = jwtRefreshToken({
                _id: String(exist?._id),
                email: email,
                role: String(exist?.role)
            });

            // console.log("Access......",accessToken);
            // console.log("Refresh......",refreshToken);
            
            res.cookie("access_token",accessToken,{httpOnly:true})
            res.cookie("refresh_token",refreshToken,{httpOnly:true})

            return res.status(200).json({
                success:true,
                data:{},
                message :'User google login'
            })
        }

        const result = await userCreateUseCase(dependencies).execute({
            email:email,
            firstName:given_name,
            lastName:family_name,
            password:"12345@Go"
        }as UserEntity)

        if(!result){
            throw new Error("Google auth User Creation error");
        }

        const access_token = jwtAccessToken({
            _id: String(result?._id),
            email: result.email,
            role: String(result?.role)
        })
        
        const refresh_token = jwtRefreshToken({
            _id: String(result?._id),
            email: result.email,
            role: String(result?.role)
        })

        res.cookie('access_token',access_token,{httpOnly:true})
        res.cookie('refresh_token',refresh_token,{httpOnly:true})

        return res.status(200).json({
            success:true,
            data:{},
            message :'User google login'
        })
            
        } catch (error:any) {
            console.log("Google authentication controller error :",error);
            next(error)
        }
    }
}