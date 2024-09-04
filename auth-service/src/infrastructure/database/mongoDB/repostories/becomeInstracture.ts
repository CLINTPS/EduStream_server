import { User } from "../model/UserSchema"
import { InstructorEntity, UserEntity } from "../../../../domain/entites"

export const becomeInstracture = async (instructorData:InstructorEntity):Promise<UserEntity| null> => {
    try {
        console.log("Become instracture Repo",instructorData);
        
        const existingInstracture = await User.findOne({email:instructorData.email})
        if (!existingInstracture) {
            throw new Error('Instracture not found');
        }
        console.log("existingInstracture....",existingInstracture);
        
        const updatedInstructorData = {
            role: "pending",
            profile: {
                dob: instructorData?.dob,
                gender: instructorData?.gender || "",
                bio: instructorData?.bio || "",
                qualification: instructorData?.qualification || "",
                experience: instructorData?.experience || 0,
            },
            contact: {
                phoneNumber: instructorData?.phoneNumber || "",
                socialMedia: {
                    linkedIn: instructorData?.linkedIn || "",
                    instagram: instructorData?.instagram || "",
                    facebook: instructorData?.facebook || "",
                },
            },
            address: {
                houseName: instructorData?.houseName || "",
                post: instructorData?.post || "",
                street: instructorData?.street || "",
                country: instructorData?.country || "",
                state: instructorData?.state || "",
                district: instructorData?.district || "",
            },
            instructoreProof: {
                idProof: instructorData?.idProof || "",
                certificate: instructorData?.certificate || "",
            },
        };

        console.log("updatedInstructorData....",updatedInstructorData);
        
        const updatedUser = await User.findOneAndUpdate(
            { email: instructorData.email },
            { $set: updatedInstructorData },
            { new: true }
        );

        console.log("updatedInstracture....",updatedUser);

        return updatedUser;
        
    } catch (error:any) {
        throw new Error (error?.message);
    }
}