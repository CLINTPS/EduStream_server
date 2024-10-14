import { AssessmentEntity, CourseEntity, EnrollmentEntity } from "../../domain/entities";
import { CourseFilters } from "../../infrastructure/database/mongoDB/repositories";

export interface IRepositories {
    createCourse:(data:CourseEntity)=>Promise<CourseEntity | null>
    getInstructorCourse:(id:string)=>Promise<CourseEntity[] | null>
    approvedCourse:(id:string)=>Promise<CourseEntity | null>
    rejectedCourse:(id:string,reason:string)=>Promise<CourseEntity | null>
    editCourse:(data:CourseEntity)=>Promise<CourseEntity | null>
    getAllCourse:(filters: CourseFilters)=>Promise<CourseEntity[] | null>
    getCourse:(id:string)=>Promise<CourseEntity | null>
    getEnrollmentByUserId:(id:string)=>Promise<EnrollmentEntity[] | null>
    getEnrollment:(id:string)=>Promise<EnrollmentEntity | null>
    getChechkEnrolled:(courseId:string,userId:string)=>Promise<EnrollmentEntity | null | boolean>
    createAssessment:(data:AssessmentEntity)=>Promise<AssessmentEntity | null>
    updateAssessment:(id: string, data: Partial<AssessmentEntity>)=>Promise<AssessmentEntity | null>;
    getAssessment:(id:string)=>Promise<AssessmentEntity | null>
}