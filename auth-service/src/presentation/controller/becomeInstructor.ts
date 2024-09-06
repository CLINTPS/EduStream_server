import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { becomeInstractureProducer } from "../../infrastructure/kafka/producer";

export const becomeInstructorController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {
      useCases: { instractureRequestUseCase },
    } = dependencies;

    try {      
      const becomeInstructorData = req.body;
      console.log("----------------", becomeInstructorData);

      const lastUserData = await instractureRequestUseCase(dependencies).execute(becomeInstructorData);

      console.log(">>>>>>>>>>>>>>",lastUserData);
      await becomeInstractureProducer(lastUserData)

      res.status(200).json({
        success: true,
        message: "Become instracture successfully..",
        data: lastUserData,
      })

    } catch (error: any) {
      console.log("BecomeInstructor controller error:", error);
      next(error);
    }
  };
};
