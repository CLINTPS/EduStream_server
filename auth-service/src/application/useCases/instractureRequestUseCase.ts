import { InstructorEntity, UserEntity } from "../../domain/entites";
import { IDependencies } from "../interfaces/IDependencies";

export const instractureRequestUseCase = (dependencies:IDependencies)=>{
    const {
        repositories: {becomeInstracture}
    }=dependencies;

    return {
        execute:async(instructorData:InstructorEntity)=>{
            try {
                return await becomeInstracture(instructorData)
            } catch (error:any) {
                throw new Error(error.message || "Become instracture request faild....")
            }
        }
    }
}