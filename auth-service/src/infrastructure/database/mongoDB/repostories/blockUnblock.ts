import { User } from "../model/UserSchema";
import { UserEntity } from "../../../../domain/entites";

export const blockUnblock = async(userId:string):Promise<UserEntity | null> =>{
    try {
        console.log("Reached-----------",userId);
        
        return null
    } catch (error:any) {
        throw new Error (error?.message);
    }
}