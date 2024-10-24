import { NextFunction, Request, Response } from "express";
import { CourseFilters } from "../../../domain/entities";
import { IDependencies } from "../../../application/interface/IDependencies";

export const getAllCoursesController =  (dependencies:IDependencies) => {
    return async (req: Request, res: Response,next:NextFunction)=>{
        const {
            useCases:{getAllCourseUseCase}
        }=dependencies;
        try {
    
            console.log("*****************",req.query);
            
            
            const filters: CourseFilters = {
                type: req.query.type as string,
                category: req.query.category as string,
                language: req.query.language as string,
                search: req.query.search as string,
                page: req.query.page ? parseInt(req.query.page as string, 10) : 1,
                limit: req.query.limit ? parseInt(req.query.limit as string, 10) : 4,
                suggetion: req.query.suggetion as string,
    
            };
    
            
            const allData = await getAllCourseUseCase(dependencies).execute(filters);

            // console.log("Get all courese controller allData",allData);
            
    
            if (allData) {
                res.status(200).json({
                    success: true,
                    data: {
                        allCourse: allData.courses, 
                        totalCourses: allData.totalCourses, 
                        totalPages: allData.totalPages, 
                        currentPage: allData.currentPage, 
                    },
                    message: "All courses retrieved successfully",
                });
            } else {
                
                res.status(404).json({
                    success: false,
                    data: null,
                    message: "No courses found",
                });
            }
        } catch (error: any) {
            
            res.status(500).json({
                success: false,
                data: null,
                message: error.message || "An error occurred while fetching courses",
            });
        }
    }
};
