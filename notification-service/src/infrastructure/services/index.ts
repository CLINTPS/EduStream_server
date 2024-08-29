import { genarateVerificationOtp } from "../../_lib/otp";
import { sendOTPMail } from "../../_lib/nodemailer";
import { sendVerifyMailProducer } from "../../infrastructure/kafka/producers";

export const sendVerificationMail = async(email:string)=>{
    try{
        const otp=genarateVerificationOtp()
        console.log("Sending OTP mail to:", email, "OTP:", otp);
        await sendOTPMail(email,otp)

        //message produce to kafka
        await sendVerifyMailProducer({
            email:email,
            otp:otp
        })
            
    }catch(error:any){
        console.log("Service index error:",error);
    }
}