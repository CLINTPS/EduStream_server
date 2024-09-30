import { UserEntity } from "../../../domain/entities";
import { createUser } from "../../database/mongoDB/repositories";

export default async(data:UserEntity)=>{
    try {
        await createUser(data)
    } catch (error:any) {
        console.log("user-created-consumed error: ", error?.message);
    }
}