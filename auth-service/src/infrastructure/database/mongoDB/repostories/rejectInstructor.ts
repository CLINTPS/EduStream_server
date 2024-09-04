import { InstructorRejectEntity, UserEntity } from "../../../../domain/entites";
import { User } from "../model";

export const rejectInstructor = async (rejectResonData:InstructorRejectEntity):Promise<UserEntity | null> => {
    try {
        console.log("reject instracture Repo",rejectResonData);

        const existingInstracture = await User.findOne({email:rejectResonData.email})
        console.log("existingInstracture.....",existingInstracture);


        if (!existingInstracture) {
            throw new Error('Instracture not found');
        }

        const updatedInstructorData = {
            role:"student",
            rejectReson:rejectResonData.reasons
        }

        const updatedInstracture = await User.findOneAndUpdate (
            {email:rejectResonData.email},
            {$set:updatedInstructorData},
            {new:true}
        )

        console.log("updatedInstracture.....",updatedInstracture);
        
        
        return updatedInstracture
        
    } catch (error:any) {
        throw new Error (error?.message);
    }
}