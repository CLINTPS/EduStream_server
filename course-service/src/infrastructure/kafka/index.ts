import { Kafka, Producer, Consumer } from 'kafkajs'

console.log("kafka course service index....")

const kafka = new Kafka({
    clientId:'course-service',
    brokers:["localhost:29092"]
})

export const producer:Producer=kafka.producer();
export const consumer:Consumer=kafka.consumer({
    groupId:"course-service-kafka-group"
})