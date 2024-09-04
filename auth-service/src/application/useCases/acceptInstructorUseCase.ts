import { IDependencies } from "../interfaces/IDependencies";


export const acceptInstructorUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{acceptInstructor}
    }=dependencies;

    return {
        execute:async(email:string)=>{
            return await acceptInstructor(email)
        }
    }
}