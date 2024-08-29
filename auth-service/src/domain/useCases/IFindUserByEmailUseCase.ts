import { UserEntity } from "../entites";

export interface IFindUserByEmailUseCase {
    execute(email:string):Promise<UserEntity | null>
}
