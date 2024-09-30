import {
    userCreatedConsumer,
    coursePaymentSuccessConsumer,
    createChatConsumer
} from './consumer'

interface IChatEvent {
    userCreated(data:any):Promise<void>
    coursePaymentSuccess(data:any):Promise<void>
    createChat(data:any):Promise<void>
}
export interface IChatSubscriber 
extends Pick<
IChatEvent,
| "userCreated"
| "coursePaymentSuccess"
| "createChat"
>{}

export const createSubscriber = (): IChatSubscriber => {
    return {
        userCreated:userCreatedConsumer,
        coursePaymentSuccess:coursePaymentSuccessConsumer,
        createChat:createChatConsumer
    }
}