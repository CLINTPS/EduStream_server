import { producer } from "..";
import { UserEntity } from "../../../domain/entites";

export default async(instructorData:UserEntity | null)=>{
    console.log("instructorData.....",instructorData);
    
    try {
        await producer.connect();
        const messages =[
            {
                topic:'course-service-topic',
                messages:[{
                    key : "becomeInstracture",
                    value:JSON.stringify(instructorData)
                }]
            }
        ]
        await producer.sendBatch({topicMessages:messages})
    } catch (error:any) {
        console.error('kafka become instracture producer error:',error?.message);   
    }finally{
        await producer.disconnect();
    }
}