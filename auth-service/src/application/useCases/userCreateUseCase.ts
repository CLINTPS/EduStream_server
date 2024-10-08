import { IDependencies } from "../interfaces/IDependencies";
import { UserEntity } from "../../domain/entites";

export const userCreateUseCase =(dependencies:IDependencies)=>{
    const {
        repositories:{ create }
    }=dependencies;

    return{
        execute:async(data:UserEntity)=>{
            try {
                return await create(data)
            } catch (error:any) {
                throw new Error(error.message || "User creation faild....")
            }
        }
    }
}