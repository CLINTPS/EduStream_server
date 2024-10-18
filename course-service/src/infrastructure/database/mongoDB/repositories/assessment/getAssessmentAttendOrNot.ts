import ResultEntity from "../../../../../domain/entities/resultEntity";
import { Result } from "../../models/resultSchema";

export const getAssessmentAttendOrNot = async (
  userId: string,
  examId: string
): Promise<ResultEntity[] | null> => {
  try {
    console.log("Attend or not repo..", userId, examId);

    const attendedAssessment = await Result.findOne({
      userId: userId,
      examId: examId,
    });
    // console.log("attendedAssessment", attendedAssessment);

    if (!attendedAssessment) {
      return null;
    }

    return attendedAssessment as unknown as ResultEntity[];
  } catch (error: any) {
    console.error("Error in getAssessmentAttendOrNot repository:", error);
    // return false;
    throw new Error(error?.message || "Failed to get assessment result.");
  }
};
