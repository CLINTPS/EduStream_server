import express, { Application, Request, Response } from 'express'
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { routes } from '../infrastructure/routes';
import { dependencies } from '../_boot/dependencies';

dotenv.config()

const app:Application = express()
const PORT:number=Number(process.env.PORT) || 4004

app.use((req, res, next) => {
    if (req.originalUrl === '/webhook') {
      next();
    } else {
      express.json()(req, res, next);
    }
  });
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/',routes(dependencies));


app.use("*",(req:Request,res:Response)=>{
    res.status(404).json({success:false,status:404,message:"Api not found"})
})

app.listen(PORT,()=>{
    console.log(`Connected to payment-service at port ${PORT}`);
})

export default app;