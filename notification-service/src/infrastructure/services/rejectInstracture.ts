import { rejectInstructorFunction } from "../../_lib/nodemailer";

export const rejectInstracture = async(email:string)=>{
    try{
        // console.log("Sending reject mail :", email);
        await rejectInstructorFunction(email)
    }catch(error:any){
        console.log("Service index error:",error);
    }
}