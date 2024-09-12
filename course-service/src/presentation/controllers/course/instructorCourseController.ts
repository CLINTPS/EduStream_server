import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../../application/interface/IDependencies";
import mongoose from "mongoose";

export const instructorCourseController = (dependencies: IDependencies) => {
    const {
        useCases: { getInstructorCourseUseCase }
      } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            console.log("ID.............",id);
            
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error("Invalid ID!!!");
              }
            const course=await getInstructorCourseUseCase(dependencies).execute(id)
            console.log("Instructore courses",course);
            
            res.status(200).json({
                success: true,
                data: course,
                message: "Course retrieved successfully"
              });
        } catch (error:any) {
         next(error)   
        }
    }
}