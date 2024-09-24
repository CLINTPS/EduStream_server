import { IDependencies } from "../../application/interfaces/IDependencies";
import { createCheckoutSessionController } from "./createCheckoutSessionController";
import { makePaymentWebhookController } from "./makePaymentWebhookController";

export const controllers = (dependencies:IDependencies) => {
    return {
        createCheckoutSession:createCheckoutSessionController(dependencies),
        makePaymentWebhook:makePaymentWebhookController(dependencies)
    }
}