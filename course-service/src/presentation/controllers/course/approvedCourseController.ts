import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const approvedCourseController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {
      repositories: { approvedCourse },
    } = dependencies;
    try {
      // console.log("approvedCourseController reached", req.body);

      const { id } = req.body;

      const result = await approvedCourse(id);

      // console.log("approvedCourseController result", result);

      res.status(200).json({
        success: true,
        message: "Course approved and published successfully",
        data: { result },
      });
    } catch (error) {
      console.log("Approved course controller error", error);
      next(error);
    }
  };
};
