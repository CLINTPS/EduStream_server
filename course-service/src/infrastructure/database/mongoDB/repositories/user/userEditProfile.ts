import { userEditProfileEntity,UserEntity } from "../../../../../domain/entities";
import { User } from "../../models";

export const userEditProfile = async (
  data: userEditProfileEntity
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
          "profile.dob": data?.dob,
          "profile.gender": data?.gender,
          "profile.avatar": data?.profileImage,
          "contact.phoneNumber": data?.phoneNumber,
          "address.houseName": data?.houseName,
          "address.street": data?.street,
          "address.country": data?.country,
          "address.state": data?.state,
          "address.district": data?.district,
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