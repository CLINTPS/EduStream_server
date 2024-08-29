import { UserEntity } from "../../domain/entites";

export interface IFindUserByIdUseCase {
    execute(id:string):Promise<UserEntity | null>
}