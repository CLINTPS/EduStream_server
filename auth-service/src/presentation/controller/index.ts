import { IDependencies } from "../../application/interfaces/IDependencies";
import { signupController } from "./signup";
import { loginController } from "./login";
import { getUserController } from "./getUser";
import { logoutController } from "./logout";
import { getAllUserController } from "./getAllUser";
import { blockUnblockUserController } from "./blockUnblockUser";
import { googleAuthController } from "./googleAuth";
import { updateRoleController } from "./update-role";

export const controllers=(dependencies:IDependencies)=>{
    return{
        signup:signupController(dependencies),
        login:loginController(dependencies),
        getUser:getUserController(dependencies),
        logout:logoutController(dependencies),
        getAllUserData:getAllUserController(dependencies),
        blockUnblockUser:blockUnblockUserController(dependencies),
        googleAuth:googleAuthController(dependencies),
        updateRole:updateRoleController(dependencies)
    }
}