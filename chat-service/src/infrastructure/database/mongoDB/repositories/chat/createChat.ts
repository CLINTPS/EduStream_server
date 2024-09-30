import { ErrorResponse } from "../../../../../_lib/common/error";
import { ChatEntity } from "../../../../../domain/entities";
import { Chat } from "../../model";

export const createChat = async (data:ChatEntity):Promise<any | null>=>{
    try {

        console.log("Create chat repository data :",data);

        const chat = await Chat.create(data)

        if(!chat){
            throw ErrorResponse.internalError("Chat creation error")
        }
        
        return chat 
    } catch (error) {
        console.error("Create chat repo error",error);
        
    }
}