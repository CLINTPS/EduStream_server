import { IDependencies } from "../../interface/IDependencies";

export const getChechkEnrolledUseCase = (dependencies : IDependencies)=>{
    const {repositories:{getChechkEnrolled}} = dependencies;
    return {
        execute:async(courseId:string,userId:string)=>{
            return await getChechkEnrolled(courseId,userId)
        }
    }
}
