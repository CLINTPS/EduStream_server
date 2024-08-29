import { IDependencies } from "../../application/interfaces/IDependencies";

export const userFindByEmailUseCase = (dependencies:IDependencies)=>{
    const {
        repositories:{findByEmail}
    }=dependencies;
    return {
        execute:async(email:string)=>{
            return await findByEmail(email);
        }
    }
}