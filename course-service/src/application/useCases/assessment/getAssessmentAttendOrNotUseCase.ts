import { IDependencies } from "../../interface/IDependencies";

export const getAssessmentAttendOrNotUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{getAssessmentAttendOrNot}
    }=dependencies;

    return {
        execute:async(userId:string,examId:string)=>{
            return await getAssessmentAttendOrNot(userId,examId)
        }
    }
}