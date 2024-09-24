import { 
    sendVerificationMailConsumer,
    coursePurchaseSuccessConsumer 
} from "./consumer";

console.log("Subscriber");
export interface ISubscribe {
    
    sendVerificationMail(data:any):Promise<void>
    coursePaymentSuccess(data:any):Promise<void>
    
}

export interface IAuthSubscriber extends Pick<ISubscribe,"sendVerificationMail" | "coursePaymentSuccess">{}

export const createSubscriber= ():IAuthSubscriber => {
    return {
        sendVerificationMail:sendVerificationMailConsumer,
        coursePaymentSuccess:coursePurchaseSuccessConsumer
    }
}