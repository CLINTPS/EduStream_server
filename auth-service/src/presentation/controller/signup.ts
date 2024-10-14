import { Request,Response,NextFunction } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies"
import { signupValidation } from "../../_lib/validation"
import { hashPassword } from "../../_lib/bcrypt"
import { userCreatedProducer } from "../../infrastructure/kafka/producer"
import { ErrorResponse } from "../../_lib/common/error"


export const signupController = (dependencies:IDependencies)=>{
    const {
        useCases:{userCreateUseCase,userOtpUseCase,userFindByEmailUseCase}
    } = dependencies;

    return async(req:Request,res:Response,next:NextFunction)=>{
        const userCredentials =req.body;
        console.log("SignUpDatas....",userCredentials);

        //Check email already used or not
        if(!userCredentials.otp){
            try {
                const userExist:any= await userFindByEmailUseCase(
                    dependencies
                ).execute(userCredentials.email)
                console.log("UserExist",userExist);

                if(userExist){
                    // ErrorResponse.conflict("This Email is alredy registered, please choose another email")
                    // console.log("Email is alredy registread");
                    return res.json({
                        success:false,
                        message:"Email is alredy registread"
                    })
                }
                
            } catch (error:any) {
                console.log("Something went wrong..",error);
                next(error)
            }
        }

        //otp send request pass through the nodemailer
        if(!userCredentials.otp){
            try {
                let email=req.body.email
                console.log('User otp send to this mail :',email);
                await userCreatedProducer(email,'notification-service-topic')
                return res.status(200).json({
                    success:true,
                    message:"Otp send successfully"
                })
                
            } catch (error:any) {
                console.log(error, "Something Went Wrong in OTP section");
                return res.json({
                success: false,
                message: "Something went wrong in otp",
                });
            }
        }

        if(userCredentials.otp){
            console.log("UserCredential otp check");  
            try {
                const isOtpVerified = await userOtpUseCase(dependencies)
                .execute(
                    userCredentials.email,
                    userCredentials.otp
                )
                console.log("is OTP Verifed",isOtpVerified);
                if(!isOtpVerified){
                    const {email, ...restValues}=userCredentials;
                    return res.status(401).json({
                        user:restValues,
                        success: false,
                        message:"Invalid Otp try again"
                    })
                }

            } catch (error:any) {
                console.log("Somthig went wrong OTP verification");
                return res.json({
                    success:false,
                    message:"Invalid OTP"
                })
            }
        }

        if(userCredentials.otp){
            try {
                console.log("User signup data ..............>>>>>",req.body);
                
                const {error,value}=signupValidation.validate(req.body)
                
                if(error){
                    throw new Error(error.message)
                }
                
                value.password = await hashPassword(value.password)
                // console.log("User signup hashed data ....>>>>....>>>>",value);
                const UserData = {
                    firstName:value.firstName,
                    lastName: value.lastName,
                    email: value.email,
                    password: value.password,
                }
                // console.log("UserData ...>>>....>>>>....>>>>",UserData);
                const lastUserData = await userCreateUseCase(dependencies).execute(UserData);
                
                if (lastUserData) {
                    await userCreatedProducer(lastUserData);
                    return res.status(200).json({
                        success: true,
                        message: "User-Signup successfully"
                    });
                } else {
                    console.error('Failed to create user: lastUserData is null');
                    return res.status(500).json({
                        success: false,
                        message: "User creation failed"
                    });
                }
                // console.log("User data saved to database: ", lastUserData);


            } catch (error:any) {
                console.log("Somthin went wrong user signup last stage :",error);
                
            }
        }
        
    }
}