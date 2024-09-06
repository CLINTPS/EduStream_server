import express, { Application } from 'express'
import cookieParser from "cookie-parser";
import cors from "cors";
import proxy from "express-http-proxy";
import dotenv from "dotenv"
import morgan from 'morgan'

dotenv.config()
const app:Application=express()
const PORT:number=Number(process.env.PORT || 4000);

app.use(express.json())
app.use(cookieParser())
app.use(morgan('tiny'))

const corsOptions = {
  origin: String(process.env.CLIENT_URL),
  credentials: true
};

console.log("Cores Option",corsOptions);
app.use(cors(corsOptions))

const routes = [
  {path :'/api/auth',serviceUrl:process.env.AUTH_SERVICE},
  {path :'/api/notification',serviceUrl:process.env.NOTIFICATION_SERVICE},
  {path :'/api/course',serviceUrl:process.env.COURSE_SERVICE},
]
console.log("Using routes",routes);

routes.forEach(route =>{
  if(route.serviceUrl){
    app.use(route.path, proxy(route.serviceUrl));
  }
})


app.listen(PORT, () => {
    console.log(`Api-Gateway running Port : ${PORT}`);
});