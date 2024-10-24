import { CourseEntity } from "../../entities";

export interface IAddReviewAndRatingUseCase {
    execute(data: {
        courseId: string;
        rating: number;
        review: string;
        userId: string;
        userName: string;
      }):Promise<CourseEntity | null>
}