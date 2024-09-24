import { IDependencies } from "../interfaces/IDependencies";

export const userFindByIdUseCase = (dependencies:IDependencies) => {
    // console.log("userFindIdUseCase.............");
    
    const {
        repositories:{findById}
    }=dependencies;

    return {
        execute: async (id:string)=>{
            return await findById(id);
        }
    }
}