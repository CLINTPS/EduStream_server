import { IDependencies } from "../../interface/IDependencies";

export const getCourseUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{getCourse}
    }=dependencies;

    return {
        execute:async(id:string)=>{
            return await getCourse(id)
        }
    }
}