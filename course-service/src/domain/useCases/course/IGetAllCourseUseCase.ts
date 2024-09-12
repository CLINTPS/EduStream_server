import { CourseEntity } from "../../entities";


export interface IGetAllCourseUseCase {
    execute(): Promise<CourseEntity[] | null>;
}