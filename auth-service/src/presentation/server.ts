import express, { Application, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { dependencies } from '../__boot/dependencies'
import { routes } from '../infrastructure/routes'
import { errorHandler } from '../_lib/common/error'

dotenv.config()
const app:Application = express()
const PORT:number=Number(process.env.PORT) || 4001

app.use(express.json())
app.use(cookieParser())

app.use('/',routes(dependencies));

app.use("*",(req:Request,res:Response)=>{
    res.status(404).json({success:false,status:404,message:"Api not found"})
})

app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Connected to auth-service at port ${PORT}`);
})

export default app;