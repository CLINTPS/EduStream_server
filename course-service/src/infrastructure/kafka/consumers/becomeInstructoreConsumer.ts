import { UserEntity } from "../../../domain/entities";
import { becomeInstracture } from "../../database/mongoDB/repositories"; 

export default async (instructorData:UserEntity)=>{
    console.log("becomeInstracture...",instructorData);
    
    try {
        await becomeInstracture(instructorData)
    } catch (error:any) {
        console.log("becomeInstracture-consumed error: ", error?.message);
    }
}