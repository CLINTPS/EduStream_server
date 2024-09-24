import express, { Router} from 'express'
import { controllers } from '../../presentation/controllers'
import { IDependencies } from '../../application/interfaces/IDependencies'

export const routes = (dependencies:IDependencies)=>{
    const {
        createCheckoutSession,
        makePaymentWebhook
    }=controllers(dependencies);

    const router = Router();

    router.route("/create-checkout-session").post(createCheckoutSession);
    router.post("/webhook",express.raw({ type: "application/json" }),makePaymentWebhook);
    return router;
}