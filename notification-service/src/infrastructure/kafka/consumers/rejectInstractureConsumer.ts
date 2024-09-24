import { rejectInstracture } from "../../services/rejectInstracture";

export default async(
    data:{email:string}
)=>{
    try {
        console.log("reject Notification consumer :",data);
        
        await rejectInstracture(data.email)
    } catch (error:any) {
        console.log("rejectInstracture mail send error: ", error?.message);
    }
}