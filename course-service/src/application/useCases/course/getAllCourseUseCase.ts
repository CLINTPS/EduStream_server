import { CourseFilters } from "../../../infrastructure/database/mongoDB/repositories";
import { IDependencies } from "../../interface/IDependencies";

export const getAllCourseUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getAllCourse }
    } = dependencies;
  return {
    execute: async (filters: CourseFilters) => {
      return await getAllCourse(filters);
    }
  };
};