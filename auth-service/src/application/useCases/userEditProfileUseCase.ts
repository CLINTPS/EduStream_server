import { userEditProfileEntity } from "../../domain/entites";
import { IDependencies } from "../interfaces/IDependencies";


export const userEditProfileUseCase = (dependencies:IDependencies)=>{
    const {
        repositories:{userEditProfile}
    }=dependencies;

    return {
        execute:async(data:userEditProfileEntity)=>{
            console.log("Reached userEditProfile",data);
            try {
                return await userEditProfile(data)
            } catch (error:any) {
                throw new Error(error.message || "userEditProfile faild....")
            }
        }
    }
}