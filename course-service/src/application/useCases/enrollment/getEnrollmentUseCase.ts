import { IDependencies } from "../../interface/IDependencies";

export const getEnrollmentUseCase = (dependencies:IDependencies) => {
    const {
        repositories:{getEnrollment}
    }=dependencies;

    return {
        execute:async(id:string)=>{
         try{
            console.log(id,"reached in usecase")
            return await getEnrollment(id)
         }catch(error){
            throw new Error((error as Error)?.message)
         }
        }
    }
}
