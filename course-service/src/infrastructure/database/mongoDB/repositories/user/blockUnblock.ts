import { User } from "../../models";

export const blockUnblock = async (id:string)=>{
    try {
        console.log("Reaches user blockUnblockUser",id);

        const userData= await User.findById(id)
        console.log("Blocking user details...",userData);

        if (userData) {  
            userData.isBlocked = !userData.isBlocked;
            await userData.save();
            console.log(`User is now ${userData.isBlocked ? 'blocked' : 'unblocked'}`);
        } 
        
    } catch (error: any) {
        throw new Error(error?.message);
      }
}