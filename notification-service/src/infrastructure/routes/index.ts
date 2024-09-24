import { Router } from "express";
import { controllers } from "../../presentation/controller";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const notificationRoutes = (dependencies:IDependencies)=>{
    console.log("Notification service router reached");
    
    const{
        sendVerificationMail
    }=controllers(dependencies);

    const router = Router();
    router.route("/email-verification").get(sendVerificationMail)
    return router;
}