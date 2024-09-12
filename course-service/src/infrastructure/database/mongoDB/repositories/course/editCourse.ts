import { CourseEntity } from "../../../../../domain/entities";
import { Course } from "../../models";

export const editCourse = async (data: CourseEntity): Promise<CourseEntity | null> => {
    try {
        console.log("Edit course repo", data);

        const { courseId, title, description, thumbnailImage, thumbnailVideo, language, lessons, pricing } = data;

        const course = await Course.findById(courseId);

        if (!course) {
            throw new Error('Course not found');
        }

        course.title = title || course.title;
        course.description = description || course.description;
        course.thumbnailImage = thumbnailImage || course.thumbnailImage;
        course.thumbnailVideo = thumbnailVideo || course.thumbnailVideo;
        course.language = language || course.language;
        course.pricing = pricing || course.pricing;

        const updatedLessons = lessons.map((newLesson) => {
            const existingLesson = course.lessons.find(lesson => lesson._id.toString() === newLesson._id);

            if (existingLesson) {
                existingLesson.title = newLesson.title || existingLesson.title;
                existingLesson.description = newLesson.description || existingLesson.description;
                existingLesson.lessonVideo = newLesson.lessonVideo || existingLesson.lessonVideo;
                existingLesson.lessonNumber = newLesson.lessonNumber || existingLesson.lessonNumber;
            } else {
                course.lessons.push(newLesson);
            }

            return existingLesson || newLesson;
        });

        course.lessons = updatedLessons;

        const updatedCourse = await course.save();
        console.log("updatedCourse...", updatedCourse);

        return updatedCourse;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};
