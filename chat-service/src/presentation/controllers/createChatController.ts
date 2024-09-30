import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";


export const createChatController = (
  dependencies: IDependencies
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("createChatController data..",req.body);
      

    } catch (error) {
      console.log("createChatController error.....", error);
      next(error);
    }
  };
};
