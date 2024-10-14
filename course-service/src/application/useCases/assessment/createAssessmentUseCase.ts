import { AssessmentEntity } from "../../../domain/entities";
import { IDependencies } from "../../interface/IDependencies";

export const createAssessmentUseCase = (dependencies:IDependencies)=>{
    const {
        repositories:{createAssessment}
    }=dependencies;

    return {
        execute:async(data:AssessmentEntity)=>{
            // console.log("Application useCase of assessment data :",data);
            try {
                return await createAssessment(data)
            } catch (error:any) {
                throw new Error(error.message || "User creation faild....")
            }
        }
    }
}