import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";
import { jwtMiddleware } from "../../_lib/common";
// import { User } from "../database/mongoDB/model";

export const routes = (dependencies : IDependencies)=>{
    const {
        signup,login,getUser,logout,getAllUserData,blockUnblockUser,googleAuth,updateRole
    }=controllers(dependencies);
    
    const router =Router()
    router.route("/").get(jwtMiddleware,getUser);
    router.route("/signup").post(signup);
    router.route("/login").post(login);
    router.route("/logout").delete(logout);
    router.route("/getAllUser").get(getAllUserData);
    router.route("/blockUnblockUser").post(blockUnblockUser);
    router.route("/googleSignup").post(googleAuth);
    router.route("/update-role").post(updateRole)
    
    return router
}









//     router.post('/blockUnblockUser', async (req, res) => {
//     const { userId, isBlocked } = req.body;
//     try {
//         console.log("Received User ID:", userId);
//         console.log("Current isBlocked value from frontend:", isBlocked);

//         const user = await User.findById(userId);
//         console.log("Fetched User:", user);

//         if (user) {
//             user.isBlocked = isBlocked;
            
//             console.log("Before saving, user.isBlocked:", user.isBlocked);
//             await user.save();
//             console.log("After saving, user.isBlocked:", user.isBlocked);
            

//             res.status(200).json({ success: true, message: `User ${user.isBlocked ? 'blocked' : 'unblocked'} successfully` });
//         } else {
//             res.status(404).json({ success: false, message: 'User not found' });
//         }
//     } catch (error) {
//         console.error("Error during block/unblock operation:", error);
//         res.status(500).json({ success: false, message: 'Server Error' });
//     }
// });