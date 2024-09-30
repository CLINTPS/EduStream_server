import { IDependencies } from "../../application/interfaces/IDependencies";
import { signupController } from "./signup";
import { loginController } from "./login";
import { getUserController } from "./getUser";
import { logoutController } from "./logout";
import { getAllUserController } from "./getAllUser";
import { blockUnblockUserController } from "./blockUnblockUser";
import { googleAuthController } from "./googleAuth";
import { becomeInstructorController } from "./becomeInstructor";
import { selectedInstructorController } from "./selectedInstructorController";
import { acceptInstructorController } from "./acceptInstructorController";
import { rejectInstructorController } from "./rejectInstructorController";
import { userEditProfileController } from "./userEditProfileController";
import { forgotPasswordController } from "./forgotPasswordController";

export const controllers=(dependencies:IDependencies)=>{
    return{
        signup:signupController(dependencies),
        login:loginController(dependencies),
        getUser:getUserController(dependencies),
        logout:logoutController(dependencies),
        getAllUserData:getAllUserController(dependencies),
        blockUnblockUser:blockUnblockUserController(dependencies),
        googleAuth:googleAuthController(dependencies),
        selectedInstructor:selectedInstructorController(dependencies),
        becomeInstructor:becomeInstructorController(dependencies),
        acceptInstructor:acceptInstructorController(dependencies),
        rejectInstructor:rejectInstructorController(dependencies),
        userEditProfile:userEditProfileController(dependencies),
        forgotPassword:forgotPasswordController(dependencies)
    }
}