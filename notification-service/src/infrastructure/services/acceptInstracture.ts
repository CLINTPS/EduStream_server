import { acceptInstuctoreFunction } from "../../_lib/nodemailer";

export const acceptInstracture = async(email:string)=>{
    try{
        // console.log("Sending sccept mail :", email);
        await acceptInstuctoreFunction(email)
    }catch(error:any){
        console.log("Service index error:",error);
    }
}