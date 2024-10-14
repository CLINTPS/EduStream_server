import { CourseEntity } from "../../../../../domain/entities";
import { Course } from "../../models";

export interface CourseFilters {
    type?: string;
    category?: string;    
    language?: string;    
    search?: string;   
    page?: number;      
    limit?: number;
    suggetion?:string;       
}


export const getAllCourse = async (filters: CourseFilters): Promise<{
    courses: CourseEntity[];
    totalCourses: number;
    totalPages: number;
    currentPage: number;
} | null> => {
    try {
        console.log("Folters......",filters);
        
        const { type, category, language,suggetion, search, page = 1, limit = 4 } = filters;

        const query: any = {
            isPublished: true,
            isRejected: false,
            isBlocked: false
        };

        if (type) {
            query["pricing.type"] = type;
        }

        if (category) {
            query.category = category;
        }
        
        if (language) {
            query.language = language;
        }

        if (suggetion) {
            query.category = suggetion;
        }

        if (search) {
            const searchRegex = new RegExp(search, "i");
            query.$or = [
                { title: { $regex: searchRegex } },
                { description: { $regex: searchRegex } }
            ];
        }

        const currentPage = page;
        const itemsPerPage = limit;
        const skip = (currentPage - 1) * itemsPerPage;
        console.log("GetAllCourse...",query);
        

        const totalCourses = await Course.countDocuments(query);

        
        const courses = await Course.find(query)
            .sort({ createdAt: -1 }) 
            .skip(skip)
            .limit(itemsPerPage)
            .exec();

        const totalPages = Math.ceil(totalCourses / itemsPerPage);

        return {
            courses,
            totalCourses,
            totalPages,
            currentPage
        };
    } catch (error: any) {
        console.error("Repository Error:", error);
        throw new Error(error.message || "Error fetching courses");
    }
};