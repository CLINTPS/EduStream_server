import { Course } from "../../models";

export const getPendingCourse = async():Promise<any | null>=>{
    try {
        const pendingCourse = await Course.find({
            isPublished: false,
            isRejected: false
        })
        // console.log("All pendingCourse...",pendingCourse);
        return pendingCourse
    } catch (error:any) {
        throw new Error(error);
        
    }
}