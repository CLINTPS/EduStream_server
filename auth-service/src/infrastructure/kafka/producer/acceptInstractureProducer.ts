import { producer } from "..";
import { UserEntity } from "../../../domain/entites";

export default async( data:UserEntity )=>{
    try {
        await producer.connect();
        const messages =[
            {
                topic:'course-service-topic',
                messages:[{
                    key : "acceptInstracture",
                    value:JSON.stringify(data)
                }]
            },
            {
                topic:'notification-service-topic',
                messages:[{
                    key : "acceptInstracture",
                    value:JSON.stringify({email:data.email})
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