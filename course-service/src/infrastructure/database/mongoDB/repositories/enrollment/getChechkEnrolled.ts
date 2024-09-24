import { EnrollmentEntity } from "../../../../../domain/entities";
import { Enrollment } from "../../models";

export const getChechkEnrolled = async (
    courseId:string,userId:string
): Promise<EnrollmentEntity | null | false> => {
  try {
    console.log("Check getEnrollment userId :", userId);
    console.log("Check getEnrollment courseId :", courseId);

    const isEnrolled = await Enrollment.findOne({courseId: courseId, userId:userId })
    if (!isEnrolled) {
      return false
    }
    console.log("CHeck Data.......", isEnrolled);

    return isEnrolled;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
