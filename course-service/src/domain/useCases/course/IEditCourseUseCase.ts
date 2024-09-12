import { CourseEntity } from "../../entities";

export interface IEditCourseUseCase {
    execute(data:CourseEntity):Promise<CourseEntity | null>
}