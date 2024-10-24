import { CourseEntity } from "../../../domain/entities";
import { IDependencies } from "../../interface/IDependencies";

export const addReviewAndRatingUseCase = (dependencies:IDependencies)=>{
    const {
        repositories: { addReviewAndRating }
    }=dependencies;
    return {
        execute: async (data: {
            courseId: string;
            rating: number;
            review: string;
            userId: string;
            userName: string;
        }) => {
            console.log("addReviewAndRating UseCase data :", data);
            try {
                return await addReviewAndRating(data);
            } catch (error: any) {
                throw new Error(error.message || "addReviewAndRatingUseCase failed....");
            }
        }
    }
}