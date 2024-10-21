import { CourseEntity } from "../../entities";

export interface IAddReviewAndRatingUseCase {
    execute(data:CourseEntity):Promise<CourseEntity | null>
}