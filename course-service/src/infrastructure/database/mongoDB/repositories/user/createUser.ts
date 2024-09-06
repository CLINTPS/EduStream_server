import { ErrorResponse } from "../../../../../_lib/common/error";
import { UserEntity } from "../../../../../domain/entities";
import { User } from "../../models";

export const createUser = async (data:UserEntity):Promise<UserEntity | null>=>{
    try {
        console.log("Repo create user reached",data);
        
        const newUser= await User.create(data)

        if(!newUser){
            throw ErrorResponse.internalError("User creation failed")
        }
        return newUser
    } catch (error:any) {
        if(error instanceof ErrorResponse){
            throw error;
        }
        throw ErrorResponse.internalError(
            error.message || "An unexpected error occurred"
          );
    }
}