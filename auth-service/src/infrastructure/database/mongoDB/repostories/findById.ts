import { UserEntity } from "../../../../domain/entites";
import { User } from "../model";

export const findById = async (
    id:string
):Promise<UserEntity | null > => {
    try {
        const existUser = await User.findById(id)
        console.log("Current user find : ",existUser);
        
        if(!existUser){
            throw new Error("User does not exist!");
        }

        return existUser

    } catch (error:any) {
        throw new Error(error?.message);
        
    }
}