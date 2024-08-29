import { UserEntity } from "../../domain/entites";

export interface IRepositories {
    create: (data:UserEntity)=>Promise<UserEntity|null>
    findByEmail:(email:string)=>Promise<UserEntity | null>
    verifyOtp: (email:string,otp:string)=>Promise<Boolean|null>
    findById: (id:string)=>Promise<UserEntity | null>
    blockUnblock:(id:string)=>Promise<UserEntity | null>
}