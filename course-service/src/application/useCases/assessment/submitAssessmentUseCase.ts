import { AssessmentEntity } from "../../../domain/entities";
import { IDependencies } from "../../interface/IDependencies";

export const submitAssessmentUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { submitAssessment },
  } = dependencies;

  return {
    execute: async (data: AssessmentEntity) => {
      console.log("UseCase submit assessment data..", data);
      try {
        return await submitAssessment(data);
      } catch (error: any) {
        throw new Error(error.message || "Submit assessment failed.");
      }
    },
  };
};
