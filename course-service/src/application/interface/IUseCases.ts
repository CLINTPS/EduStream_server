import { 
    IApprovedCourseUseCase,
    ICreateCourseUseCase, 
    IEditCourseUseCase, 
    IGetAllCourseUseCase, 
    IGetCourse, 
    IGetInstructorCourseUseCase, 
    IRejectedCourseUseCase,
    IGetEnrollmentByUserId,
    IGetEnrollment,
    IGetChechkEnrolled,
    ICreateAssessmentUseCase,
    IGetAssessment,
    IUpdateAssessmentUseCase
} from "../../domain/useCases";

import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createCourseUseCase:(dependencies:IDependencies)=>ICreateCourseUseCase
    getInstructorCourseUseCase:(dependencies:IDependencies)=>IGetInstructorCourseUseCase
    approvedCourseUseCase:(dependencies:IDependencies)=>IApprovedCourseUseCase
    rejectedCourseUseCase:(dependencies:IDependencies)=>IRejectedCourseUseCase
    editCourseUseCase:(dependencies:IDependencies)=>IEditCourseUseCase
    getAllCourseUseCase:(dependencies:IDependencies)=>IGetAllCourseUseCase
    getCourseUseCase:(dependencies:IDependencies)=>IGetCourse
    getEnrollmentByUserIdUseCase:(dependencies:IDependencies)=>IGetEnrollmentByUserId
    getEnrollmentUseCase:(dependencies:IDependencies)=>IGetEnrollment
    getChechkEnrolledUseCase:(dependencies:IDependencies)=>IGetChechkEnrolled
    createAssessmentUseCase:(dependencies:IDependencies)=>ICreateAssessmentUseCase
    updateAssessmentUseCase:(dependencies:IDependencies)=>IUpdateAssessmentUseCase
    getAssessmentUseCase:(dependencies:IDependencies)=>IGetAssessment
}