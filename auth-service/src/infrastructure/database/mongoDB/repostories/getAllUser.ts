import { User } from "../model/UserSchema";

export const getAllUser = async ():Promise<any | null>=>{
    try {
        const allUser = await User.find({},{password:0})
        console.log("All user datas........................",allUser);
        return allUser;
    } catch (error:any) {
        throw new Error(error);
    }
}