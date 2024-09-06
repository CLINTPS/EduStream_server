import { blockUnblock } from "../../database/mongoDB/repositories/user/blockUnblock";

export default async (id:string)=>{
    try {
        console.log("cousumer block id :",id);
        
        await blockUnblock(id)
    } catch (error:any) {
        console.log("user-blockUnblock-consumed error: ", error?.message);
    }
}