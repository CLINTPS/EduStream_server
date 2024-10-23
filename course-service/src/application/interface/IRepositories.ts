import { AssessmentEntity, CourseEntity, EnrollmentEntity } from "../../domain/entities";
import ResultEntity from "../../domain/entities/resultEntity";
import { CourseFilters } from "../../infrastructure/database/mongoDB/repositories";

export interface IRepositories {
    createCourse:(data:CourseEntity)=>Promise<CourseEntity | null>
    getInstructorCourse:(id:string)=>Promise<CourseEntity[] | null>
    approvedCourse:(id:string)=>Promise<CourseEntity | null>
    rejectedCourse:(id:string,reason:string)=>Promise<CourseEntity | null>
    editCourse:(data:CourseEntity)=>Promise<CourseEntity | null>
     getAllCourse(filters: CourseFilters): Promise<{
        courses: CourseEntity[];
        totalCourses: number;
        totalPages: number;
        currentPage: number;
    } | null>;
    getCourse:(id:string)=>Promise<CourseEntity | null>
    getEnrollmentByUserId:(id:string)=>Promise<EnrollmentEntity[] | null>
    getEnrollment:(id:string)=>Promise<EnrollmentEntity | null>
    getChechkEnrolled:(courseId:string,userId:string)=>Promise<EnrollmentEntity | null | boolean>
    createAssessment:(data:AssessmentEntity)=>Promise<AssessmentEntity | null>
    updateAssessment:(id: string, data: Partial<AssessmentEntity>)=>Promise<AssessmentEntity | null>;
    getAssessment:(id:string)=>Promise<AssessmentEntity | null>
    submitAssessment:(data:AssessmentEntity)=>Promise<AssessmentEntity | null>
    getExamById:(id:string)=>Promise<AssessmentEntity | null>
    getAssessmentResult:(id:string)=>Promise<AssessmentEntity | null>
    getAssessmentAttendOrNot:(userId:string,examId:string)=>Promise<ResultEntity | null >
    addReviewAndRating:(data:CourseEntity)=>Promise<CourseEntity | null>
}