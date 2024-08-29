import { IUserCreateUseCase } from "../../domain/useCases/IUserCreateUseCase";
import { IOtpVerifyUseCase } from "../../domain/useCases/IOtpVerifyUseCase";
import { IFindUserByEmailUseCase } from "../../domain/useCases/IFindUserByEmailUseCase";
import { ILoginUserUseCase } from "../../domain/useCases/ILoginUserUseCase";
import { IFindUserByIdUseCase } from "../../domain/useCases";
import { IblockUnblockUserUseCase } from "../../domain/useCases";

export interface IUseCases {
    userCreateUseCase:(dependencies:any)=>IUserCreateUseCase;
    userOtpUseCase:(dependencies:any)=>IOtpVerifyUseCase;
    userFindByEmailUseCase:(dependencies:any)=>IFindUserByEmailUseCase;
    userLoginUseCase:(dependencies:any)=>ILoginUserUseCase;
    userFindByIdUseCase:(dependencies:any)=>IFindUserByIdUseCase;
    userBlockUnblockUserUseCase:(dependencies:any)=>IblockUnblockUserUseCase;
}