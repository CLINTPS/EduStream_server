import { AssessmentEntity } from "../../entities";

export interface ISubmitAssessmentUseCase {
    execute(
      data:AssessmentEntity
    ): Promise<AssessmentEntity | null>;
  }
  