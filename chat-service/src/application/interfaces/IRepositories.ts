import { ChatEntity } from "../../domain/entities";

export interface IRepositories{
    createChat:(data:ChatEntity)=>Promise<ChatEntity | null>
}
