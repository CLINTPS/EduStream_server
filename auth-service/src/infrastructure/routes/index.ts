import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";
import { jwtMiddleware } from "../../_lib/common";

export const routes = (dependencies : IDependencies)=>{
    const {
        signup,
        login,
        getUser,
        logout,
        getAllUserData,
        blockUnblockUser,
        googleAuth,
        becomeInstructor,
        selectedInstructor,
        acceptInstructor,
        rejectInstructor,
        userEditProfile
    }=controllers(dependencies);
    
    const router =Router()
    router.route("/").get(jwtMiddleware,getUser);
    router.route("/signup").post(signup);
    router.route("/login").post(login);
    router.route("/logout").delete(logout);
    router.route("/getAllUser").get(getAllUserData);
    router.route("/blockUnblockUser").post(blockUnblockUser);
    router.route("/googleSignup").post(googleAuth);
    router.route("/becomeInstructor").post(becomeInstructor)
    router.route("/acceptInstructor").post(acceptInstructor) 
    router.route("/instructors/:id").get(selectedInstructor)
    router.route("/reject-instructor").post(rejectInstructor)
    router.route("/userEditProfile").post(userEditProfile)
    return router
}