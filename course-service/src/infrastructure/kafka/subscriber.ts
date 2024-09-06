import { 
    userCreatedConsumer,
    userProfileUpdateConsumer,
    blockUnblockConsumer,
    becomeInstructoreConsumer,
    acceptInstractureConsumer,
    rejectInstractureConsumer
} from "./consumers";

interface IBaseEvent {
    userCreated(data:any):Promise<void>;
    userProfileUpdate(data:any):Promise<void>
    blockUnblock(id:string):Promise<void>
    becomeInstracture(instructorData:any):Promise<void>
    acceptInstracture(data:any):Promise<void>
    rejectInstracture(data:any):Promise<void>
}

export interface ICourseSubscriber extends Pick<IBaseEvent, 'userCreated' | 'userProfileUpdate' | 'blockUnblock' | 'becomeInstracture' | 'acceptInstracture' | 'rejectInstracture'>{ }

export const  createSubscriber=():ICourseSubscriber=>{
    return {
        userCreated:userCreatedConsumer,
        userProfileUpdate:userProfileUpdateConsumer,
        blockUnblock:blockUnblockConsumer,
        becomeInstracture:becomeInstructoreConsumer,
        acceptInstracture:acceptInstractureConsumer,
        rejectInstracture:rejectInstractureConsumer
    }
}