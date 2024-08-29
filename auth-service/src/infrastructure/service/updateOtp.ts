import { updateOTP } from "../database/mongoDB/repostories"

export const updateOTPService=async(email:string,otp:string)=>{
    console.log("Infa,serv,updateOtp",email,otp);
    try {
        await updateOTP({
          email,
          otp,
        });
      } catch (error) {
        console.log(error);
      }
}