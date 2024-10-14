import { IDependencies } from "../../interface/IDependencies";

export const getAssessmentUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{getAssessment}
    }=dependencies;

    return {
        execute:async(id:string)=>{
            return await getAssessment(id)
        }
    }
}