import { InstructorRejectEntity } from "../../domain/entites";
import { IDependencies } from "../interfaces/IDependencies";

export const rejectInstructorUseCase = (dependencies:IDependencies)=>{
    const {
        repositories:{rejectInstructor}
    }=dependencies;

    return {
        execute:async(rejectResonData:InstructorRejectEntity)=>{
            console.log("Reached rejectResonData",rejectResonData);
            
            try {
                return await rejectInstructor(rejectResonData)
            } catch (error:any) {
                throw new Error(error.message || "Become instracture rejection request faild....")
            }
        }
    }
}