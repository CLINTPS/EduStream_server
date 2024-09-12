import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";
import { getPendingCourse } from "../../../infrastructure/database/mongoDB/repositories";
import { ErrorResponse } from "../../../_lib/common/error";

export const getPendingCourseController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log("getPendingCourseController reached");

      const pendingCourse = await getPendingCourse();
      if (!pendingCourse) {
        return next(ErrorResponse.notFound("Pending course not found"));
      }
      //   console.log("pendingCourse.........",pendingCourse);

      res
        .status(200)
        .json({
          success: true,
          data: { pendingCourse },
          message: "All pending course data retrieved successfully",
        });
    } catch (error) {
      console.log("Create course controller error", error);

      next(error);
    }
  };
};
