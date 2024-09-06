import { UserEntity } from "../../../domain/entities";
import { rejectInstracture } from "../../database/mongoDB/repositories";

export default async (data:UserEntity)=>{
    console.log("rejectInstracture...",data);    
    try {
        await rejectInstracture(data)
    } catch (error:any) {
        console.log("rejectInstracture-consumed error: ", error?.message);
    }
}