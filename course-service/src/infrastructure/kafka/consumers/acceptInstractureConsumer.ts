import { UserEntity } from "../../../domain/entities";
import { acceptInstracture } from "../../database/mongoDB/repositories";

export default async (data:UserEntity)=>{
    console.log("acceptInstracture...",data);    
    try {
        await acceptInstracture(data)
    } catch (error:any) {
        console.log("acceptInstracture-consumed error: ", error?.message);
    }
}