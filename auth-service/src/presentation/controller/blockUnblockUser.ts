import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies";
import { User } from "../../infrastructure/database/mongoDB/model";


export const blockUnblockUserController = (dependencies:IDependencies) => {

    const {
        useCases: {userBlockUnblockUserUseCase}
    } = dependencies;

    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("Reaches all user blockUnblockUser constroller",req.body);
            const userData= await User.findById(req.body.userId)
            console.log("Blocking user details...",userData);
            
            if (userData) {
                userData.isBlocked = !userData.isBlocked;
                await userData.save();
                console.log(`User is now ${userData.isBlocked ? 'blocked' : 'unblocked'}`);
                res.status(200).json({ success: true, isBlocked: userData.isBlocked });
            } else {
                res.status(404).json({ success: false, message: 'User not found' });
            }
            
        } catch (error:any) {
            console.log("blockUnblockUser Controller error :",error);
            next(error)
        }
    }
}