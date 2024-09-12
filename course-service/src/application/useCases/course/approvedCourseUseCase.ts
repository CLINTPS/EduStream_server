import { IDependencies } from "../../interface/IDependencies";

export const approvedCourseUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{approvedCourse}
    }=dependencies;

    return {
        execute:async(id:string)=>{
            return await approvedCourse(id)
        }
    }
}