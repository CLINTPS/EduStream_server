import { User } from "../model/UserSchema";
import { UserEntity } from "../../../../domain/entites";

export const create = async(data:UserEntity):Promise<UserEntity | null> =>{
    try {
        console.log("Repo",data);
        
        const newUser = await User.create(data)
        if (!newUser) {
            throw new Error("User creation failed.........");
        }
        return newUser;
    } catch (error:any) {
        throw new Error (error?.message);
    }
}