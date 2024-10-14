import { AssessmentEntity } from "../../../domain/entities";
import { IDependencies } from "../../interface/IDependencies";

export const updateAssessmentUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{updateAssessment}
    }= dependencies;

    return {
        execute:async(id:string,data:Partial<AssessmentEntity>)=>{
            try {
                return await updateAssessment(id,data)
            } catch (error:any) {
                throw new Error(error.message || "Updating assessment failed.");
            }
        }
    }
}