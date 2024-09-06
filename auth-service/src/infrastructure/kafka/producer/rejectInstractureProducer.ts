import { producer } from "..";
import { UserEntity } from "../../../domain/entites";

export default async( data:UserEntity | null)=>{
    try {
        await producer.connect();
        const messages =[
            {
                topic:'course-service-topic',
                messages:[{
                    key : "rejectInstracture",
                    value:JSON.stringify(data)
                }]
            }
        ]
        await producer.sendBatch({topicMessages:messages})
    } catch (error:any) {
        console.error('kafka acceptInstracture producer error:',error?.message);   
    }finally{
        await producer.disconnect();
    }
}