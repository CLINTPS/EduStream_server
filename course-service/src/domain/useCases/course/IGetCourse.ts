import { CourseEntity } from "../../../domain/entities";

export interface IGetCourse {
    execute (id:string):Promise<CourseEntity | null>
}