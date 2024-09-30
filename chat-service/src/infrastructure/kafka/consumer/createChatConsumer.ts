import { createChat } from "../../database/mongoDB/repositories";

export default async (data:any)=>{
    try {
        console.log("createChat data....",data);

        await createChat(data)

    }  catch (error:any) {
        console.log("createChat error: ", error?.message);
    }
}