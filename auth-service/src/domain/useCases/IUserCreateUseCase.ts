import { UserEntity } from "../../domain/entites";

export interface IUserCreateUseCase {
    execute (data:UserEntity):Promise<UserEntity|null>
}