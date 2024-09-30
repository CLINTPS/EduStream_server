import jwt from "jsonwebtoken"
import { generateAccessToken } from "../../jwt"
import { Request,Response,NextFunction } from "express"

interface UserPayload {
    _id:string;
    email:string;
    role:string;
}

declare global {
    namespace Express {
        interface Request {
            user?:UserPayload
        }
    }
}

export const jwtMiddleware = async (req:Request,res:Response,next:NextFunction):Promise<any> => {
    try {
        // console.log("Jwt middle ware reached req.cookies : ",req.cookies);
        const { access_token,refresh_token }=req.cookies;
        if(!access_token && !refresh_token ){
            return next()
        }
        let user;

        if(access_token){
            user = jwt.verify(access_token,process.env.ACCESS_TOKEN_SECRET!) as UserPayload
        }

        if(!user && refresh_token){
            user=jwt.verify(refresh_token,process.env.REFRESH_TOKEN_SECRET!) as UserPayload
            if(user){
                const newAccessToken = generateAccessToken(user);
                res.cookie("access_token",newAccessToken,{
                    httpOnly:true,
                    secure:true,
                    sameSite:"none",
                })
            }
        }
        req.user=user
        next()

    } catch (error) {
        console.log("Error in JWT middleware:",error);
        next(error)
    }
}