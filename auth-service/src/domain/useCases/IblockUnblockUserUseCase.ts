import { UserEntity } from "../entites";

export interface IblockUnblockUserUseCase {
    execute(userId:string,isBlocked:boolean):Promise<UserEntity | null >
}