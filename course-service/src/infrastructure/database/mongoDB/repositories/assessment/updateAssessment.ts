import { AssessmentEntity } from "../../../../../domain/entities";
import { Assessment } from "../../models";
import { ErrorResponse } from "../../../../../_lib/common/error";

export const updateAssessment = async (
  id: string,
  data: Partial<AssessmentEntity>
): Promise<AssessmentEntity | null> => {
  try {
    console.log("Update assessment repo for ID:", id, "with data:", data);

    const assessment = await Assessment.findByIdAndUpdate(id,data,{new:true})

    console.log("Response repo assessment.",assessment);

    if(!assessment){
        throw ErrorResponse.notFound("Assessment not found.");
    }
    
    return assessment;
  } catch (error: any) {
    console.error("Update assessment repo error:", error);


    if (error instanceof ErrorResponse) {
      throw error;
    }

    throw ErrorResponse.internalError(
      error.message || "An unexpected error occurred"
    );
  }
};
