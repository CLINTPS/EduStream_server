import { consumer } from "../infrastructure/kafka";
import { createSubscriber,IAuthSubscriber } from "../infrastructure/kafka/subscriber";

export const runConsumer = async () => {
    console.log("Reached run consumer...");
    
        try {
            await consumer.connect()

            await consumer.subscribe({
                topic: "auth-service-topic",
                fromBeginning:true
            })

            const subscriber = createSubscriber();

            await consumer.run({
                eachMessage: async ({message})=>{
                    const { key, value } = message;
                    const subscriberMethod = String(key) as keyof IAuthSubscriber;
                    const subscriberData = JSON.parse(String(value))

                    try {
                        await subscriber[subscriberMethod](subscriberData)
                    } catch (error:any) {
                        console.error(`Error processing message from topic: ${error.message}`);
                    }

                }
            })

        } catch (error:any) {
            console.log("Kafka Consume Error : " + error?.message);
        }
}

export const stopConsumer = async () => {
    await consumer.stop();
    await consumer.disconnect();
}