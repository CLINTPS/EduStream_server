import { CourseFilters } from "../../../infrastructure/database/mongoDB/repositories";
import { CourseEntity } from "../../entities";

export interface IGetAllCourseUseCase {
  execute(filters: CourseFilters): Promise<{
    courses: CourseEntity[];
    totalCourses: number;
    totalPages: number;
    currentPage: number;
} | null>;
}
