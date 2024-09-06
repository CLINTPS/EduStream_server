import { UserEntity } from "../../../../../domain/entities"
import { User } from "../../models"

export const rejectInstracture = async(data:UserEntity):Promise<UserEntity | null>=>{
    try {
        console.log("reject instracture Repo",data)
        
        const rejectInstractureData = await User.findOneAndUpdate(
            { email:data.email },
            { 
                $set: { rejectReson: data?.rejectReson }
            },
            { new: true }
        )
        
        console.log("accept instracture result",rejectInstractureData)

        return rejectInstractureData

    } catch (error:any) {
        throw new Error (error?.message);
    }
}