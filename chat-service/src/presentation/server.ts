import express , { Application,Request,Response } from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { routes } from '../infrastructure/routes'
import { dependencies } from '../_boot/dependencies'
import http from 'http'
import cors from 'cors'
import connectSocketIo from '../infrastructure/socket'

dotenv.config()

const app:Application = express()
const PORT:number=Number(process.env.PORT) || 4005

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(cors({
    origin:"https://edu-stream-client.vercel.app",
    credentials:true
}))

const server = http.createServer(app)

connectSocketIo(server)

app.use('/',routes(dependencies));

app.use("*",(req:Request,res:Response)=>{
    res.status(404).json({success:false,status:404,message:"Api not found"})
})

server.listen(PORT,()=>{
    console.log(`Connected to Chat-service at port ${PORT}`);
})

export default app;