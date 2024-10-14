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
        userEditProfile,
        forgotPassword
    }=controllers(dependencies);
    
    const router =Router()
    router.route("/").get(jwtMiddleware,getUser);
    router.route("/signup").post(signup);
    router.route("/login").post(login);
    router.route("/logout").delete(logout);
    router.route("/forgot-password").post(forgotPassword)
    router.route("/getAllUser").get(jwtMiddleware,getAllUserData);
    router.route("/blockUnblockUser").post(jwtMiddleware,blockUnblockUser);
    router.route("/googleSignup").post(googleAuth);
    router.route("/becomeInstructor").post(jwtMiddleware,becomeInstructor)
    router.route("/acceptInstructor").post(jwtMiddleware,acceptInstructor) 
    router.route("/instructors/:id").get(jwtMiddleware,selectedInstructor)
    router.route("/reject-instructor").post(jwtMiddleware,rejectInstructor)
    router.route("/userEditProfile").post(jwtMiddleware,userEditProfile)
    return router
}