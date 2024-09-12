import { ErrorResponse } from "../../../../../_lib/common/error";
import { CourseEntity } from "../../../../../domain/entities";
import { Course } from "../../models";

export const getInstructorCourse = async (
  id: string
): Promise<CourseEntity[] | null> => {
  try {
    const course = await Course.find({ instructorRef: id });
    if (!course) {
      throw ErrorResponse.notFound("Course not found");
    }
    return course;
  } catch (error: any) {
    if (error instanceof ErrorResponse) {
      throw error;
    }
    throw ErrorResponse.internalError(
      error.message || "An unexpected error occurred"
    );
  }
};
