import { Enrollment } from "../../models";
import { EnrollmentEntity } from "../../../../../domain/entities";

export const getEnrollmentByUserId = async (
  userId: string
): Promise<EnrollmentEntity[] | null> => {
  try {
    console.log("Reached get enrollment user id :", userId);

    const enrollment = await Enrollment.find({ userId }).populate("courseId");

    if (!enrollment) {
      throw new Error("Course enrollment failed!");
    }

    console.log("Find getEnrollmentByUserId :", enrollment);

    return enrollment;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

