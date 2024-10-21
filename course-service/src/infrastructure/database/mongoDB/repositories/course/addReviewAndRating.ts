import { Types } from "mongoose";
import { CourseEntity } from "../../../../../domain/entities";
import { Course } from "../../models";

export const addReviewAndRating = async (data: {
    courseId: string;
    rating: number;
    review: string;
    userId: string;
    userName: string;}):Promise<CourseEntity | null>=>{
    try {
        console.log("addReviewAndRating repo data :",data);
        const { courseId, userId, rating, review, userName } = data;
        const course = await Course.findById(courseId);
        console.log("Courses",course);
        
        if (!course) {
          throw new Error("Course not found");
        }
        if (!course.reviews) {
            course.reviews = [];
          }

        const existingReviewIndex = course.reviews.findIndex(
            (r) => r.userId.toString() === userId
          );

          if (existingReviewIndex !== -1) {
            course.reviews[existingReviewIndex].rating = rating;
            course.reviews[existingReviewIndex].review = review;
            course.reviews[existingReviewIndex].createdAt = new Date(); 
          } else {
            
            course.reviews.push({
              userId: new Types.ObjectId(userId),
              userName,
              rating,
              review,
              createdAt: new Date(),
            });
          }

          await course.save();

          return course;
        
    } catch (error: any) {
        throw new Error(error?.message);
    }
}