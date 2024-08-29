import { IDependencies } from "../interfaces/IDependencies";


export const userLoginUseCase = (dependencies:IDependencies)=>{
    const {
        repositories:{ findByEmail}
    }=dependencies;

    return {
        execute:async (email:string,password:string) => {
            try {
                const result = await findByEmail(email)
                console.log("Find email for user");
                return result;
            } catch (error:any) {
                console.log("UserLogin user case error",error);               
                throw new Error(error.message);    
            }
        }
    }
}