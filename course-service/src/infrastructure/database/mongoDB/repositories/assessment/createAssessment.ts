import { ErrorResponse } from "../../../../../_lib/common/error";
import { AssessmentEntity } from "../../../../../domain/entities";
import { Assessment } from "../../models";

export const createAssessment = async (
  data: AssessmentEntity
): Promise<AssessmentEntity | null> => {
  try {
    // console.log("Reached create assessment repo", data);

    const assessment = await Assessment.create(data);
    // console.log("assessment create success", assessment);

    if (!assessment) {
      throw ErrorResponse.internalError("Course creation failed!.");
    }

    return assessment;
  } catch (error: any) {
    console.error("Create assessment repo error :", error);
    if (error instanceof ErrorResponse) {
        throw error;
      }
      throw ErrorResponse.internalError(
        error.message || "An unexpected error occurred"
      );
  }
};
