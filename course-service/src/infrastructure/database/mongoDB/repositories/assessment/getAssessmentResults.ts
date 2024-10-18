import { Types } from "mongoose";
import { AssessmentEntity } from "../../../../../domain/entities";
import { Result } from "../../models/resultSchema";

export const getAssessmentResult = async (
    id: string
  ): Promise<AssessmentEntity[] | null> => {
    try {
  
      const getAssessmentResults = await Result.find({ userId: new Types.ObjectId(id) })
      .populate('courseId') 
      .populate('examId')
      ;
  
      if (!getAssessmentResults || getAssessmentResults.length === 0) {
        return null;
      }

      console.log("getAssessmentResult repo...",getAssessmentResult);
      
     
      return getAssessmentResults as unknown as AssessmentEntity[];
    } catch (error: any) {
      console.error("Error in getAssessment result repository:", error);
  
      throw new Error(error?.message || "Failed to get assessment result.");
    }
  };
  