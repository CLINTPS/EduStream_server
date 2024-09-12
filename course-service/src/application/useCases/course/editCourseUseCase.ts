import { CourseEntity } from "../../../domain/entities";
import { IDependencies } from "../../interface/IDependencies";

export const editCourseUseCase = (dependencies:IDependencies)=>{
    const {
        repositories: { editCourse }
    }=dependencies;
    return {
        execute:async(data:CourseEntity)=>{
            console.log("Edit course useCase data :",data);
            try {
                return await editCourse(data)
            } catch (error:any) {
                throw new Error(error.message || "User creation faild....")
            }
        }
    }
}