import {
    acceptInstractureConsumer,
    userCreatedConsumer
} from './consumers'
import rejectInstractureConsumer from './consumers/rejectInstractureConsumer';

interface IUserEvents {
    userCreated(data:any):Promise<void>;
    acceptInstracture(data:any):Promise<void>;
    rejectInstracture(data:any):Promise<void>;
}

export interface INotificationSubscriber extends Pick<IUserEvents, 'userCreated' | 'acceptInstracture' | 'rejectInstracture'>{ }

export const createSubscriber=():INotificationSubscriber=>{
    return {
        userCreated:userCreatedConsumer,
        acceptInstracture:acceptInstractureConsumer,
        rejectInstracture:rejectInstractureConsumer
    }
}