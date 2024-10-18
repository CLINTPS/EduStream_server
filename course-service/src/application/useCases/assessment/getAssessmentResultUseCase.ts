import { IDependencies } from "../../interface/IDependencies";

export const getAssessmentResultUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{getAssessmentResult}
    }=dependencies;

    return {
        execute:async(id:string)=>{
            return await getAssessmentResult(id)
        }
    }
}