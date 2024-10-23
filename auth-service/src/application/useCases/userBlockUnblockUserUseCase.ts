import { IDependencies } from "../interfaces/IDependencies";

export const userBlockUnblockUserUseCase = (dependencies:IDependencies)=>{
    const {
        repositories:{blockUnblock}
    } = dependencies;
    return {
        execute:async(userId:string)=>{
            try {
                return await blockUnblock(userId)
            } catch (error:any) {
                throw new Error(error.message || "user blockUnblock request faild....")
            }
        }
    }
}