import { UserEntity } from "../entites";

export interface IblockUnblockUserUseCase {
    execute(id:string,isBlocked:boolean):Promise<UserEntity | null >
}