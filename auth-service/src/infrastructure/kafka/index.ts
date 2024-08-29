import { Kafka, Producer,Consumer } from "kafkajs";

console.log("kafka auth service index")

const kafka= new Kafka({
    clientId:'auth-service',
    brokers:["localhost:29092"]
});

export const producer:Producer=kafka.producer();
export const consumer:Consumer=kafka.consumer({
    groupId:"auth-service-kafka-group"
})