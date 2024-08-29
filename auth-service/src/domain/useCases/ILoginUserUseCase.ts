import { UserEntity } from "../entites";

export interface ILoginUserUseCase{
    execute(email:string,password:string):Promise<UserEntity | null>
}