import { CourseEntity } from "../../entities";

export interface IRejectedCourseUseCase {
    execute (id:string,reason:string):Promise<CourseEntity | null>
}