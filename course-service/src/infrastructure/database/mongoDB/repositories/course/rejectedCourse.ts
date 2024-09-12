import { CourseEntity } from "../../../../../domain/entities";
import { Course } from "../../models";

export const rejectedCourse = async (
  id: string,
  reason: string
): Promise<CourseEntity | null> => {
  try {
    console.log("rejectedCourse repo", id, reason);

    const rejectCourse = await Course.findByIdAndUpdate(
      id,
      {
        isRejected: true,
        rejectReason: reason,
      },
      { new: true }
    );

    console.log("rejectCourse...", rejectCourse);

    if (!rejectCourse) {
      throw new Error("Course not found");
    }

    return rejectCourse;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
