import { AssessmentEntity } from "../../entities";

export interface ISubmitAssessmentUseCase {
    // execute(
    //   data:AssessmentEntity
    // ): Promise<AssessmentEntity | null>;
    execute(
      data: AssessmentEntity & {
          examId: string;
          userId: string;
          courseId: string;
          answers: { questionId: string; selectedAnswer: string }[];
      }
  ): Promise<{ correctAnswers: number; totalScore: number; resultStatus: string }>;
  }
  