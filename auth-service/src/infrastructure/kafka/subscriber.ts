import { sendVerificationMailConsumer } from "./consumer";

console.log("Subscriber");
export interface ISubscribe {
    
    sendVerificationMail(data:any):Promise<void>
}

export interface IAuthSubscriber extends Pick<ISubscribe,"sendVerificationMail">{}

export const createSubscriber= ():IAuthSubscriber => {
    return {
        sendVerificationMail:sendVerificationMailConsumer
    }
}