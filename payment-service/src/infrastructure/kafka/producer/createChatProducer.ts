import { producer } from "..";

export default async (data: { type: string; participants: string[] }) => {
    try {

        await producer.connect();
        const message = {
            topic: "chat-service-topic",
            messages:[
                {
                    key:"createChat",
                    value: JSON.stringify(data)
                }
            ]
        }
        await producer.send(message)
    } catch (error) {
        console.error("Kafka disconnect error :",(error as Error).message);        
    } finally {
        try {
            await producer.disconnect()
        } catch (error) {
            console.error("Kafka disconnect error :",(error as Error).message);        
        }
    }
}