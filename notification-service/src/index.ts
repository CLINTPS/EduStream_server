import server from './presentation/server';
import { runConsumer,stopConsumer } from './__boot/consumer';

(async()=>{
    try {
        server;
        await runConsumer().then(()=>{
            console.log("kafka consumer is runnnig.....")
        }).catch((error:any)=>{
            console.error(`Error while initializing Kafka consumer: ${error}`);
            process.exit(0)
        })

    } catch (error) {
        console.log("Notification-service starting index error:",error);
    }finally{
        process.on("SIGINT",async()=>{
            console.log("Sever is shutting down....");
            stopConsumer();
        })
    }
})();