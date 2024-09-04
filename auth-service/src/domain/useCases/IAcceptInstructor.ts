import { UserEntity } from "../../domain/entites";

export interface IAcceptInstructor {
    execute (email:string):Promise<UserEntity | null>
}