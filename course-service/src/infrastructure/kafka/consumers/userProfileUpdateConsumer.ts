import { UserEntity } from "../../../domain/entities";
import { userEditProfile } from "../../database/mongoDB/repositories";

export default async (data:UserEntity)=>{
    try {
        await userEditProfile(data)
    } catch (error:any) {
        console.log("user-created-consumed error: ", error?.message);
    }
}