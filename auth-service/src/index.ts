import database from './__boot/config';
import server from './presentation/server';
import { runConsumer,stopConsumer } from './__boot/consumer';

(async()=>{
    try {
        server;
        // await database()   
        await Promise.all([
            database(),
            runConsumer()
        ]).then(()=>{
            console.log("kafka consumer is runnnig...")
        }).catch((error)=>{
            console.error(`Error  while initializing Kafka consumer: ${error}`);
            process.exit(0)
        })
        
        process.on('SIGTERM',async()=>{
            console.log("SIGTERM RECIEVED....")
            stopConsumer();
        })
        
    } catch (error) {
        console.log("auth-service starting index error:",error);
    }finally{
        process.on("SIGINT",async()=>{
            console.log("Sever is shutting down....");
            process.exit()
        })
    }
})()