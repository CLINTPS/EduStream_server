import { IDependencies } from "../../interface/IDependencies";

export const getEnrollmentByUserIdUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{getEnrollmentByUserId}
    }=dependencies;

    return {
        execute:async(id:string)=>{
            return await getEnrollmentByUserId(id)
        }
    }
}

