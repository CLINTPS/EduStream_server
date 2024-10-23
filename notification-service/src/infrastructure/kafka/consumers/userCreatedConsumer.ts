import { sendVerificationMail } from "../../../infrastructure/services";

export default async(
    data:string
)=>{
    try {
        console.log("sendVerificationMail consumer :",data);
        await sendVerificationMail(data)
    } catch (error:any) {
        console.log("user-created-consumed mail send error: ", error?.message);
    }
}