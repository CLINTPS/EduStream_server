import { AssessmentEntity } from "../../../../../domain/entities";
import { Assessment } from "../../models";

export const getAssessment = async (
  id: string
): Promise<AssessmentEntity | null> => {
  try {
    // console.log("getAssessment repo", id);

    const getAssessment = await Assessment.findOne({ courseId: id });
    // console.log("getAssessment...", getAssessment);

    if (!getAssessment) {
      return null;
    }

    return getAssessment;
  } catch (error: any) {
    console.error("Error in getAssessment repository:", error);

    throw new Error(error?.message || "Failed to get assessment.");
  }
};
