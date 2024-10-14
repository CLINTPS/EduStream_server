import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const getAssessmentController = (dependencies: IDependencies) => {
  const {
    useCases: { getAssessmentUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Reached get assessment..ID:", req.params);
      const { id } = req.params;
      const AssessmentData = await getAssessmentUseCase(dependencies).execute(
        id
      );
      console.log("Assessment Data.", AssessmentData);
      if (!AssessmentData) {
        return res.status(200).json({
          success: false,
          message: "No assessment added yet for this course",
          data: null,
        });
      }
      res.status(200).json({
        success: true,
        message: "Alredy added assessment",
        data: AssessmentData,
      });
    } catch (error: any) {
      console.log("Get assessment controller error..", error);
    }
  };
};
