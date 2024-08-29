import { IDependencies } from "../interfaces/IDependencies";

export const userOtpUseCase=(dependencies:IDependencies)=>{
    const {
        repositories: {verifyOtp}
    }=dependencies;
    return{
        execute:async(email:string,otp:string)=>{
            try {
                return await verifyOtp(email,otp)
            } catch (error:any) {
                throw new Error (error.message || "Otp something went wrong")
                console.log("Otp something went wrong");
            }
        }
    }
}