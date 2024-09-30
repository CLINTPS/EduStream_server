import database from './_boot/config'
import { runConsumer, stopConsumer } from './_boot/consumer';
import server from './presentation/server'

(async()=>{
    try {
        server;
        await database()
        await Promise.all([
            database(),
            runConsumer()
        ]).then(()=>{
            console.log("kafka chat consumer is runnnig...")
        }).catch((error)=>{
            console.error(`Error  while initializing Kafka consumer: ${error}`);
            process.exit(0)
        })

        process.on('SIGTERM',async()=>{
            console.log("SIGTERM RECIEVED....")
            stopConsumer();
        })

    } catch (error) {
        console.log("chat-service starting index error:",error);
    }finally{
        process.on("SIGINT",async () => {
            console.log("\n Server is shutting down...");
      process.exit(1);
        })
    }
})();