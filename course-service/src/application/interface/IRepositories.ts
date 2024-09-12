import { CourseEntity } from "../../domain/entities";

export interface IRepositories {
    createCourse:(data:CourseEntity)=>Promise<CourseEntity | null>
    getInstructorCourse:(id:string)=>Promise<CourseEntity[] | null>
    approvedCourse:(id:string)=>Promise<CourseEntity | null>
    rejectedCourse:(id:string,reason:string)=>Promise<CourseEntity | null>
    editCourse:(data:CourseEntity)=>Promise<CourseEntity | null>
    getAllCourse:()=>Promise<CourseEntity | null>
    getCourse:(id:string)=>Promise<CourseEntity | null>
}