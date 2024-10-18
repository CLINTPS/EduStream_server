import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const getAssessmentResultController = (dependencies: IDependencies) => {
  const {
    useCases: { getAssessmentResultUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Get assessment result data", req.query);
      const { userId } = req.query;
      if (typeof userId !== "string") {
        throw new Error("Invalid userId");
      }
      const response = await getAssessmentResultUseCase(dependencies).execute(
        userId
      );
      console.log("Response get exams", response);

      res.status(200).json({
        success: true,
        message: "All Exam results",
        data: response,
      });
    } catch (error) {
      console.error("Get assessment result controller error", error);
    }
  };
};
