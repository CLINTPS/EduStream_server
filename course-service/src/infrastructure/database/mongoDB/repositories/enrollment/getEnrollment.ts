import { EnrollmentEntity } from "../../../../../domain/entities";
import { Enrollment } from "../../models";

export const getEnrollment=async(id:string):Promise<EnrollmentEntity | null  > =>{
    try {
        console.log("Check getEnrollment....in repository",id);
        
        const isEnrolled = await Enrollment.findOne({courseId: id}).populate("courseId")
        if(!isEnrolled){
            throw new Error("enrollment notfound");
        }
        console.log("DATA........",isEnrolled);
        
        return isEnrolled;
    } catch (error) {
        throw new Error((error as Error).message)
    }
    }