import {Kafka,Producer,Consumer} from 'kafkajs'

console.log("kafka Notification service index")

const kafka= new Kafka({
    clientId:'notification-service',
    brokers:["localhost:29092"]
});

export const producer:Producer=kafka.producer();
export const consumer:Consumer=kafka.consumer({
    groupId:"notification-service-kafka-group"
})