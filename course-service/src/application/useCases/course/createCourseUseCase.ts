import { CourseEntity } from "../../../domain/entities";
import { IDependencies } from "../../interface/IDependencies";

export const createCourseUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{ createCourse }
    }=dependencies;

    return {
        execute:async(data:CourseEntity)=>{
            console.log("Application useCase of create user data :",data);
            
            try {
                return await createCourse(data)
            } catch (error:any) {
                throw new Error(error.message || "User creation faild....")
            }
        }
    }
};