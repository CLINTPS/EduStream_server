import { InstructorEntity } from "../../../domain/entities";
import { becomeInstracture } from "../../database/mongoDB/repositories"; 

export default async (instructorData:InstructorEntity)=>{
    console.log("instructorData...",instructorData);
    
    try {
        await becomeInstracture(instructorData)
    } catch (error:any) {
        console.log("user-created-consumed error: ", error?.message);
    }
}