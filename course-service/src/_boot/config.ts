import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export default async () => {
    try {
        const mongoURL=process.env.DB_MONGO_URL;
        
        if(!mongoURL){
            throw new Error("MongoDB connection string not provided...")
        }
        await mongoose.connect(mongoURL.trim())
        console.log("MongoDB Connection Successfully..");

    } catch(error:any){
        console.log("Course Database Connection failed...");
        console.error(error?.message);  
    }
}