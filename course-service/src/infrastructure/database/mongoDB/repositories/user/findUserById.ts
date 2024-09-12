import { UserEntity } from "../../../../../domain/entities";
import { User } from "../../models";

export const findUserById = async (
    id:string
):Promise<UserEntity | null> => {
    try {

        const user = await User.findById(id)

        return user
        
    }catch (error: any) {
        throw new Error(error?.message);
    }
}