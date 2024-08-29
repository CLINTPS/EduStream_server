import { User } from "../model";
import { UserEntity } from "../../../../domain/entites";

export const findByEmail = async(
    email:string
): Promise<UserEntity | null> => {
    try {
        const existingUser=await User.findOne({email:email})
        console.log("existingUser",existingUser);
        return existingUser;
    } catch (error:any) {
        throw new Error(error?.message)
    }
}