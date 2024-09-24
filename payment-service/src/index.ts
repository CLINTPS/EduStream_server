import server from './presentation/server'
import database from './_boot/config'

(async()=>{
    try {
        server;
        await Promise.all([
            database()
        ])
    } catch (error:any) {
        console.log("payment-service starting index error:",error);
    }finally{
        process.on("SIGINT",async()=>{
            console.log("\n Sever is shutting down....");
            process.exit()
        })
    }
})();