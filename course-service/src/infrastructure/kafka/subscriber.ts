import { 
    userCreatedConsumer,
    userProfileUpdateConsumer,
    blockUnblockConsumer,
    becomeInstructoreConsumer
} from "./consumers";

interface IBaseEvent {
    userCreated(data:any):Promise<void>;
    userProfileUpdate(data:any):Promise<void>
    blockUnblock(id:string):Promise<void>
    becomeInstracture(instructorData:any):Promise<void>
}

export interface ICourseSubscriber extends Pick<IBaseEvent, 'userCreated' | 'userProfileUpdate' | 'blockUnblock' | 'becomeInstracture'>{ }

export const  createSubscriber=():ICourseSubscriber=>{
    return {
        userCreated:userCreatedConsumer,
        userProfileUpdate:userProfileUpdateConsumer,
        blockUnblock:blockUnblockConsumer,
        becomeInstracture:becomeInstructoreConsumer
    }
}