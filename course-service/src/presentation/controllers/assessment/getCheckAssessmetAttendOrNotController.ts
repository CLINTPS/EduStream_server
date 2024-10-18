import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const getCheckAssessmetAttendOrNotController = (
  dependencies: IDependencies
) => {
  const {
    useCases: { getAssessmentAttendOrNotUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { examId, userId } = req.body;

      console.log("getCheckAssessmetAttendOrNot...userId", userId);
      console.log("getCheckAssessmetAttendOrNot...examId", examId);

      const response = await getAssessmentAttendOrNotUseCase(dependencies).execute(userId,examId)
      
      console.log("Response of assessment attend or not",response);

      res.status(200).json({
        success:true,
        message:"Assessment result",
        data:response
      })
      
    } catch (error) {
      console.error("getCheckAssessmetAttendOrNot controller error", error);
    }
  };
};
