import { UserEntity } from "../../../../domain/entites";
import { User } from "../model";


export const acceptInstructor = async(email:string):Promise<UserEntity | null>=>{
    try {
        console.log("acceptInstructor repo",email);

        const AcceptInspecture = await User.findOneAndUpdate(
            { email:email },
            { 
                $set: { role: "instructor" }
                // $unset: { rejectReson: "" }
            },
            { new: true }
        );

        console.log("AcceptInspecture....",AcceptInspecture);

        return AcceptInspecture;

        return null
    } catch (error:any) {
        throw new Error (error?.message);
    }
}