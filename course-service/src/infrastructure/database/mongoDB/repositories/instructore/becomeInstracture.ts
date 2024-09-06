import { UserEntity } from "../../../../../domain/entities";
import { User } from "../../models";

export const becomeInstracture = async(instructorData:UserEntity):Promise<UserEntity | null>=>{
    try {
        console.log("Become instracture Repo",instructorData);
        
        const existingInstracture = await User.findOne({email:instructorData.email})
        if (!existingInstracture) {
            throw new Error('Instracture not found');
        }
        console.log("existingInstracture....",existingInstracture);
        

        const updatedInstructorData = {
            role: "pending",
            profile: instructorData?.profile,
            contact: instructorData?.contact,
            address:instructorData?.address,
            instructoreProof:instructorData?.instructoreProof
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