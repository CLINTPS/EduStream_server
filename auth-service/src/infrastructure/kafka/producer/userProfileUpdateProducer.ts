import { producer } from "..";
import { userEditProfileEntity } from "../../../domain/entites";

export default async( data:userEditProfileEntity | null)=>{
    try {
        await producer.connect();
        const messages =[
            {
                topic:'course-service-topic',
                messages:[{
                    key : "userProfileUpdate",
                    value:JSON.stringify(data)
                }]
            }
        ]
        await producer.sendBatch({topicMessages:messages})
    } catch (error:any) {
        console.error('kafka userProfileUpdate producer error:',error?.message);   
    }finally{
        await producer.disconnect();
    }
}