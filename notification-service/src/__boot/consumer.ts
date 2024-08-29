    import {consumer} from '../infrastructure/kafka'
    import { INotificationSubscriber,createSubscriber } from '../infrastructure/kafka/subscriber'

    const keyMap:{[key:string]:keyof INotificationSubscriber}={
        USER_CREATED_MESSAGE:'userCreated'
    }

    export const runConsumer = async() => {
        try {
            await consumer.connect();
            await consumer.subscribe({topic:"notification-service-topic",fromBeginning:true})
            const subscriber=createSubscriber();

            await consumer.run({
                eachMessage:async({message})=>{
                    const { key, value } = message;

                    if (!key || !value) {
                        console.error("Message key or value is missing.");
                        return;
                    }
    
                    const subscriberMethod = keyMap[String(key)] || String(key);
    
                    if (typeof subscriber[subscriberMethod] !== 'function') {
                        console.error(`Method ${subscriberMethod} is not defined on subscriber.`);
                        return;
                    }
    
                    try {
                        await subscriber[subscriberMethod](JSON.parse(String(value)));
                    } catch (error: any) {
                        console.error(`Error processing message with key ${key}: ${error.message}`);
                    }
                }
            })

        } catch (error:any) {
            console.error("Kafka Consume Error -> Notification:", error.message);
        }
    }

    export const stopConsumer = async () => {
        await consumer.stop();
        await consumer.disconnect();
    }