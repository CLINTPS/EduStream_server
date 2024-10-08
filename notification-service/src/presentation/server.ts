import express, { Application, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { notificationRoutes } from '../infrastructure/routes'
import { dependencies } from '../__boot/dependencies'

dotenv.config()
const app:Application=express()
const PORT:number = Number(process.env.PORT)

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use('/',(req:Request,res:Response)=>{
    res.status(200).json({
        message:"Notification service ON!"
    })
})

app.use('/api/notification',notificationRoutes(dependencies))

app.listen(PORT,()=>{
    console.log(`Connected to notification-service at port ${PORT}`);
})

export default app;