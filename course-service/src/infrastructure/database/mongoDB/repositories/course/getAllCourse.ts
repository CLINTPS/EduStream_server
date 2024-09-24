import { CourseEntity } from "../../../../../domain/entities";
import { Course } from "../../models";

export const getAllCourse = async():Promise<CourseEntity[] | null>=>{
    try {
        const allCourse = await Course.find({
            isPublished: true,
            isRejected: false,
            isBlocked:false
        })
        // console.log("All pendingCourse...",allCourse);
        return allCourse
    } catch (error:any) {
        throw new Error(error);
        
    }
}