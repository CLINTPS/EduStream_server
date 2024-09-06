import { userEditProfileEntity } from "../../../domain/entities";
import { userEditProfile } from "../../database/mongoDB/repositories";

export default async (data:userEditProfileEntity)=>{
    try {
        await userEditProfile(data)
    } catch (error:any) {
        console.log("user-created-consumed error: ", error?.message);
    }
}