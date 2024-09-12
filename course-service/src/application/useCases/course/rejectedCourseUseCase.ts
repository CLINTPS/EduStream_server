import { IDependencies } from "../../interface/IDependencies";

export const rejectedCourseUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { rejectedCourse },
  } = dependencies;

  return {
    execute: async (id: string, reason: string) => {
      return await rejectedCourse(id, reason);
    },
  };
};
