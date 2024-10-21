import { Kafka,Producer,Consumer} from 'kafkajs'

console.log("kafka payment service index");

const kafka = new Kafka({
    clientId:'payment-service',
    brokers:["localhost:29092"]
})

// const kafka= new Kafka({
//     clientId:'auth-service',
//     brokers:["kafka:9092"]
// });

export const producer:Producer=kafka.producer();
export const consumer:Consumer=kafka.consumer({
    groupId:"payment-service-kafka-group"
})