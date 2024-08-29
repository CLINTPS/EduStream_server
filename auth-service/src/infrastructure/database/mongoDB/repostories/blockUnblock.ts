import { User } from "../model/UserSchema";
import { UserEntity } from "../../../../domain/entites";

export const blockUnblock = async(data:UserEntity):Promise<UserEntity | null> =>{
    try {
        console.log("Reached-----------");
        
        return null
    } catch (error:any) {
        throw new Error (error?.message);
    }
}