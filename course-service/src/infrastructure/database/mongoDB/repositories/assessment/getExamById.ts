import { AssessmentEntity } from "../../../../../domain/entities";
import { Assessment } from "../../models";

export const getExamById = async (
  id: string
): Promise<AssessmentEntity | null> => {
  try {
    console.log("getExamById repo", id);

    const getExam = await Assessment.findById(id);
    console.log("getExamById...", getExam);

    if (!getExam) {
      return null;
    }

    return getExam;
  } catch (error: any) {
    console.error("Error in getExamById repository:", error);

    throw new Error(error?.message || "Failed to get ExamById.");
  }
};
