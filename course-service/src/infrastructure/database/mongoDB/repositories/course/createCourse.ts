import { ErrorResponse } from "../../../../../_lib/common/error";
import { CourseEntity } from "../../../../../domain/entities";
import { Course } from "../../models/courseSchema";

export const createCourse = async (
    data:CourseEntity
):Promise<CourseEntity | null> => {
    try {
        console.log("Reached course create repo",data);
        
        const course = await Course.create(data)
        console.log("course create success",course);

        if(!course){
            throw ErrorResponse.internalError("Course creation failed!.")
        }

        return course

    } catch (error: any) {
        if (error instanceof ErrorResponse) {
          throw error;
        }
        throw ErrorResponse.internalError(
          error.message || "An unexpected error occurred"
        );
      }
}