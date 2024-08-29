import { updateOTPService } from "../../service/updateOtp";

console.log("Send verification mail consumer");
export default async (
    
    data:{
        email:string,
        otp:string
    }
)=>{
    try {
        await updateOTPService(data.email,data.otp)
        console.log("Reached verification mail consumer");
    } catch (error:any) {
        console.log("send-verification-mail-consumed error: ", error?.message);
    }
}