import { updateInstroctureProfit } from "../../../infrastructure/database/mongoDB/repostories";

export const coursePurchaseSuccessConsumer = async (
    data:any
)=>{
    try {
        console.log("coursePurchaseSuccessConsumer Data....jjjhj in the consumer in the aaaaaaaaaaa",data);
        
        await updateInstroctureProfit(data.instructorId,data.amount)
        console.log("--------------------------------------");
        
    } catch (error:any) {
        console.log("Update instructore profit",error);
    }
}
