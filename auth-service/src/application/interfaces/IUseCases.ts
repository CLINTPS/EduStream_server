import { 
    IAcceptInstructor,
    IBecomeInstracture, 
    IblockUnblockUserUseCase, 
    IFindUserByEmailUseCase, 
    IFindUserByIdUseCase, 
    IOtpVerifyUseCase, 
    IRejectInstructorUseCase, 
    IUserCreateUseCase, 
    IUserEditProfileUseCase, 
    ILoginUserUseCase
} from "../../domain/useCases";


export interface IUseCases {
    userCreateUseCase:(dependencies:any)=>IUserCreateUseCase;
    userOtpUseCase:(dependencies:any)=>IOtpVerifyUseCase;
    userFindByEmailUseCase:(dependencies:any)=>IFindUserByEmailUseCase;
    userLoginUseCase:(dependencies:any)=>ILoginUserUseCase;
    userFindByIdUseCase:(dependencies:any)=>IFindUserByIdUseCase;
    userBlockUnblockUserUseCase:(dependencies:any)=>IblockUnblockUserUseCase;
    instractureRequestUseCase:(dependencies:any)=>IBecomeInstracture;
    acceptInstructorUseCase:(dependencies:any)=>IAcceptInstructor;
    rejectInstructorUseCase:(dependencies:any)=>IRejectInstructorUseCase;
    userEditProfileUseCase:(dependencies:any)=>IUserEditProfileUseCase;
}