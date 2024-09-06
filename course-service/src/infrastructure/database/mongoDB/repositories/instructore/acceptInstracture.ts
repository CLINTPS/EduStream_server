import { UserEntity } from "../../../../../domain/entities";
import { User } from "../../models";

export const acceptInstracture = async(data:UserEntity):Promise<UserEntity | null>=>{
    try {
        console.log("accept instracture Repo",data)
        
        const acceptInstractureData = await User.findOneAndUpdate(
            { email:data.email },
            { 
                $set: { role: "instructor" }
            },
            { new: true }
        )
        
        console.log("accept instracture result",acceptInstractureData)
        return acceptInstractureData

    } catch (error:any) {
        throw new Error (error?.message);
    }
}