import { AssessmentEntity } from "../../entities";

export interface IUpdateAssessmentUseCase {
  execute(
    id: string,
    data: Partial<AssessmentEntity>
  ): Promise<AssessmentEntity | null>;
}
