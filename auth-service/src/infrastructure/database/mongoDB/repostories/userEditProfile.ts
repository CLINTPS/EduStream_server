import { userEditProfileEntity, UserEntity } from "../../../../domain/entites";
import { User } from "../model";


export const userEditProfile = async (data:userEditProfileEntity):Promise<UserEntity | null>=>{
    try {
        console.log("User edit profile Repo",data);

        const existingUser = await User.findOne({email:data.email})
        if (!existingUser) {
            throw new Error('User not found');
        }

        console.log("Existing user",existingUser);

        const newUserProfileData = {
            firstName:data.firstName,
            lastName:data.lastName,
            profile: {
                dob: data?.dob,
                gender: data?.gender || "",
                avatar: data?.profileImage,
            },
            contact: {
                phoneNumber: data?.phoneNumber || "",
            },
            address: {
                houseName: data?.houseName || "",
                street: data?.street || "",
                country: data?.country || "",
                state: data?.state || "",
                district: data?.district || "",
            },
        }
        
        console.log("newUserProfileData....",newUserProfileData);
        
        const updateUserData = await User.findOneAndUpdate(
            {email:data.email},
            {$set:newUserProfileData},
            {new:true}
        )

        return updateUserData

    } catch (error:any) {
        throw new Error (error?.message);
    }
}