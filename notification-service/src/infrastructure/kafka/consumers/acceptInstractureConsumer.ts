import { acceptInstracture } from "../../services/acceptInstracture";

export default async(
    data:{email:string}
)=>{
    try {
        console.log("accept Notification consumer :",data);
        
        await acceptInstracture(data.email)
    } catch (error:any) {
        console.log("acceptInstracture mail send error: ", error?.message);
    }
}