import { UserEntity } from "../../../../domain/entites";
import { User } from "../model";

export const updateInstroctureProfit = async (
    userId:string,
    amount:number
):Promise<UserEntity | null> => {
    try {
        console.log(">>>>>>>>>>>>>><<<><><><><><><><><>><>><",userId,amount);
        
        // const instructorProfit = Math.trunc(amount * 0.7);
		// const adminProfit = Math.trunc(amount * 0.3);

        // const updateInstructorProfit = await User.findByIdAndUpdate(
		// 	userId,
		// 	{ $inc: { profit: instructorProfit } },
		// 	{ new: true }
		// );

		// await User.findOneAndUpdate(
		// 	{ role: "admin" },
		// 	{ $inc: { profit: adminProfit } },
		// 	{ new: true }
		// );

        const updateInstructorProfit= await User.findByIdAndUpdate(
            userId,
            {$inc:{profit:amount}},
            {new: true}
        )

        return updateInstructorProfit;
        
    } catch (error: any) {
		console.error("Error updating Instructore profit:", error);
		throw new Error(error?.message);  
    }
}