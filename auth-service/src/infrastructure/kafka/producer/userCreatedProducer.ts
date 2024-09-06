import { producer } from ".."
import { UserEntity } from "../../../domain/entites";

export default async(data:UserEntity,topic?:string)=>{
    try {
        const targetTopic = topic || 'default-topic'
        await producer.connect();
        const messages =[
            {
                topic:targetTopic,
                messages:[{
                    key : "userCreated",
                    value:JSON.stringify(data)
                }]
            },
            {
                topic:'course-service-topic',
                messages:[{
                    key : "userCreated",
                    value:JSON.stringify(data)
                }]
            }
        ]
        await producer.sendBatch({topicMessages:messages})
    } catch (error:any) {
        console.error('kafka producer error:',error?.message);   
    }finally{
        await producer.disconnect();
    }
}