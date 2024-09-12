import { CourseEntity } from "../../../domain/entities/courseEntity";

export interface ICreateCourseUseCase {    
    execute(data:CourseEntity):Promise<CourseEntity | null>;
}