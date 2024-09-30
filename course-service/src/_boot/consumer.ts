import { consumer } from "../infrastructure/kafka";
import {
  createSubscriber,
  ICourseSubscriber,
} from "../infrastructure/kafka/subscriber";

export const runConsumer = async () => {
  console.log("Course service reached run consumer...");
  try {
    await consumer.connect();
    await consumer.subscribe({
      topic: "course-service-topic",
      fromBeginning: true,
    });

    const subscriber = createSubscriber();

    await consumer.run({
      eachMessage: async ({ message }) => {
        const { key, value } = message;
        const subscriberMethod = String(key) as keyof ICourseSubscriber;
        const subscriberData = JSON.parse(String(value));
        console.log(
          `Received key: ${key}, Subscriber Method: ${subscriberMethod}`
        );

        try {
          await subscriber[subscriberMethod](subscriberData);
        } catch (error: any) {
          console.error(
            `Error processing message from topic: ${error.message}`
          );
        }
      },
    });
  } catch (error: any) {
    console.log("Kafka Consume Error : " + error?.message);
  }
};

export const stopConsumer = async () => {
  await consumer.stop();
  await consumer.disconnect();
};
