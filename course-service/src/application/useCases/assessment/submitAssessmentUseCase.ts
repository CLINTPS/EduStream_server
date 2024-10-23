import { AssessmentEntity } from "../../../domain/entities";
import { IDependencies } from "../../interface/IDependencies";

export const submitAssessmentUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { submitAssessment },
  } = dependencies;

  return {
    execute: async (
      data: AssessmentEntity & {
          examId: string;
          userId: string;
          courseId: string;
          answers: { questionId: string; selectedAnswer: string }[];
      }
  ) => {
      return await submitAssessment(data);
  },
  };
};
