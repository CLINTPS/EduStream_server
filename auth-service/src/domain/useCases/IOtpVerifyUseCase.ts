export interface IOtpVerifyUseCase {
    execute(email:string,otp:string):Promise<Boolean|null>
}