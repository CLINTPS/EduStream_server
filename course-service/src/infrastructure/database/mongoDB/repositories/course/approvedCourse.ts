import { CourseEntity } from "../../../../../domain/entities";
import { Course } from "../../models";

export const approvedCourse = async(id:string):Promise<CourseEntity | null>=>{
    try {
        // console.log("approvedCourse repo",id);

        const updatedCourse  = await Course.findByIdAndUpdate(
            id,                      
            { isPublished: true },
            { new: true } 
        )
        console.log("updatedCourse...",updatedCourse);
        
        if(!updatedCourse) {
            throw new Error('Course not found');
        }

        return updatedCourse
    } catch (error:any) {
        throw new Error (error?.message);
    }
}