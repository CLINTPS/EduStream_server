import express, { Application, Request, Response } from 'express'
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config()

const app:Application = express()
const PORT:number=Number(process.env.PORT) || 4003

app.use(express.json())
app.use(cookieParser())

// app.use('/',routes(dependencies));

app.use("*",(req:Request,res:Response)=>{
    res.status(404).json({success:false,status:404,message:"Api not found"})
})

app.listen(PORT,()=>{
    console.log(`Connected to course-service at port ${PORT}`);
})

export default app;