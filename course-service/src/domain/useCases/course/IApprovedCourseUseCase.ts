import { CourseEntity } from "../../../domain/entities";

export interface IApprovedCourseUseCase {
    execute (id:string):Promise<CourseEntity | null>
}