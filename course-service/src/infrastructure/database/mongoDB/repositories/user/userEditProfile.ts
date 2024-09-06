import { UserEntity } from "../../../../../domain/entities";
import { User } from "../../models";

export const userEditProfile = async (
  data: UserEntity
): Promise<UserEntity | null> => {
  try {
    console.log("User edit profile Repo", data);

    const existingUser = await User.findOne({ email: data.email });
    if (!existingUser) {
      throw new Error("User not found");
    }

    const updateUserData = await User.findOneAndUpdate(
      { email: data.email },
      {
        $set: {
          firstName: data.firstName,
          lastName: data.lastName,
          profile:data?.profile ,
          address:data?.address,
          contact:data?.contact
        },
      },
      { new: true,upsert: true }
    );
    console.log("Updated user:", updateUserData);

    return updateUserData;

  } catch (error: any) {
    throw new Error(error?.message);
  }
};