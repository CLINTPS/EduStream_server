import { producer } from "..";

export default async( id:string)=>{
    try {
        await producer.connect();
        const messages =[
            {
                topic:'course-service-topic',
                messages:[{
                    key : "blockUnblock",
                    value:JSON.stringify(id)
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