import { Otp } from "../model/OtpSchema";

export const verifyOtp = async (email:string,otp:string)=>{
    try {
        const verified = await Otp.findOne({email:email,otp:otp})
        console.log(verified,"Verified");
        if(!verified){
            return false
        }
        return true
    } catch (error:any) {
        throw new Error(error?.message)
    }
}