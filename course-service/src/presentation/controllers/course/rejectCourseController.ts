import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";

export const rejectCourseController = (dependencies: IDependencies) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const {
        repositories: { rejectedCourse },
      } = dependencies;
      try {
        console.log("rejectCourseController reached", req.body);
  
        const { id,reason  } = req.body;
  
        const result = await rejectedCourse(id,reason);
  
        console.log("rejectCourseController result", result);
  
        res.status(200).json({
          success:true,
          message: "Course reject successfully",
          data: {result},
        });
        
      } catch (error) {
        console.log("Reject course controller error", error);
        next(error);
      }
    };
  };