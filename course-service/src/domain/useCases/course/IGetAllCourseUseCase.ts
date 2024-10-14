import { CourseFilters } from "../../../infrastructure/database/mongoDB/repositories";
import { CourseEntity } from "../../entities";


export interface IGetAllCourseUseCase {
    execute(filters: CourseFilters): Promise<CourseEntity[] | null>;
}