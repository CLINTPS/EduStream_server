import { CourseEntity } from "../../../../../domain/entities";
import { Course } from "../../models";

export const getCourse = async(id:string):Promise<CourseEntity | null>=>{
    try {
        // console.log("getCourse repo",id);

        const getCourse  = await Course.findById(
            id,                      
        )
        // console.log("getCourse...",getCourse);
        
        if(!getCourse) {
            throw new Error('Course not found');
        }

        return getCourse
    } catch (error:any) {
        throw new Error (error?.message);
    }
}