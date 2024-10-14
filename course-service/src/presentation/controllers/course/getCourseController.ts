import { NextFunction, Request, Response } from "express"
import { IDependencies } from "../../../application/interface/IDependencies";

export const getCourseController =(dependencies:IDependencies)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const {
            useCases :{getCourseUseCase,getChechkEnrolledUseCase}
        }=dependencies;
        try {
            // console.log("Reached getCourseController",req.params);
            const {id}=req.params;
            const userId = req.headers['user-id'] as string;
            // console.log('getCourseController course id:',id);
            // console.log('getCourseController user id:',userId);

            
            const courseData  = await getCourseUseCase(dependencies).execute(id)
            const isEnrolled = await getChechkEnrolledUseCase(dependencies).execute(id, userId)
            // const isEnrolled=false
            // if(userId){
            //      isEnrolled = await getChechkEnrolledUseCase(dependencies).execute(id, userId)
            // }
            // if (!isEnrolled && !userId) {
            //     courseData.lessons = [];
            //   }

            console.log("getCourseController courseData ",courseData );
            console.log("getCourseController isEnrolled",isEnrolled);

            res.status(200).json({
                success: true,
                message: "Get course success",
                data: courseData ,
                isEnrolled: isEnrolled ? true : false,
            });
            
        } catch (error:any) {
            console.log("getAllCoursesController error",error);
            next(error)
        }
    }
}