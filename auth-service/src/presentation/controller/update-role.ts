import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
// import { User } from "../../infrastructure/database/mongoDB/model";

export const updateRoleController = (dependencies:IDependencies) =>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("================",req.body);

            // const user = await User.findOne({email:req.body.email})
            // console.log("Updating role for user...", user);
            // if (user) {
            //     user.role = req.body.role;
          
            //     await user.save();
          
            //     console.log(`User role updated to ${user.role}`);

            //     res.status(200).json({ success: true, message: 'Request is successfully' });

            //   } else {
                
            //     res.status(404).json({ success: false, message: 'User not found' });
            //   }


        } catch (error:any) {
            console.log("Update-role controller error :",error);
            next(error)
        }
    }
}