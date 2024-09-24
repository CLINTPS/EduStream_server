import { Enrollment } from "../../models";
import { EnrollmentEntity } from "../../../../../domain/entities";

export const createEnrollment = async (
  data: EnrollmentEntity
): Promise<EnrollmentEntity | null> => {
  try {
    console.log("Reach createEnrollment :", data);

    const enrollment = await Enrollment.create(data);

    if (!enrollment) {
      throw new Error("Course enrollment failed!");
    }

    console.log("Find createEnrollment", enrollment);

    return enrollment;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
