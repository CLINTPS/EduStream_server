import { CourseEntity } from "../../entities";

export interface IGetInstructorCourseUseCase {
    execute(id:string): Promise<CourseEntity[] | null>;
}