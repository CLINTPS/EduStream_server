import { InstructorEntity, InstructorRejectEntity, userEditProfileEntity, UserEntity } from "../../domain/entites";

export interface IRepositories {
    create: (data:UserEntity)=>Promise<UserEntity|null>
    findByEmail:(email:string)=>Promise<UserEntity | null>
    verifyOtp: (email:string,otp:string)=>Promise<Boolean|null>
    findById: (id:string)=>Promise<UserEntity | null>
    blockUnblock:(userId:string)=>Promise<UserEntity | null>
    becomeInstracture:(instructorData:InstructorEntity)=>Promise<UserEntity|null>
    acceptInstructor:(email:string)=>Promise<UserEntity | null>
    rejectInstructor:(rejectResonData:InstructorRejectEntity)=>Promise<UserEntity | null>
    userEditProfile:(data:userEditProfileEntity)=>Promise<UserEntity | null>
}