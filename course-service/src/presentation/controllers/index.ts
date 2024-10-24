import { IDependencies } from "../../application/interface/IDependencies";

import {
  approvedCourseController,
  createCourseController,
  editCourseController,
  getCourseController,
  getPendingCourseController,
  instructorCourseController,
  rejectCourseController,
  getEnrolledCourseController,
  getEnrolledSingleCourseController,
  addReviewController,
  getAllCoursesController,
} from "../../presentation/controllers/course";

import { 
  createAssessmentController,
  getAssessmentController,
  getAssessmentResultController,
  getCheckAssessmetAttendOrNotController,
  submitAssessmentController,
  updateAssessmentController
} from "../../presentation/controllers/assessment";

export const controllers = (dependencies: IDependencies) => {
  return {
    createCourse: createCourseController(dependencies),
    myCourse: instructorCourseController(dependencies),
    getPendingCourse: getPendingCourseController(dependencies),
    approvedCourse: approvedCourseController(dependencies),
    rejectedCourse: rejectCourseController(dependencies),
    editCourse: editCourseController(dependencies),
    getAllCourse:getAllCoursesController(dependencies),
    getCourse: getCourseController(dependencies),
    getEnrolledCourse: getEnrolledCourseController(dependencies),
    getEnrolledSingleCourse: getEnrolledSingleCourseController(dependencies),
    createAssessment: createAssessmentController(dependencies),
    updateAssessment:updateAssessmentController(dependencies),
    getAssessment:getAssessmentController(dependencies),
    submitAssessment:submitAssessmentController(dependencies),
    getExamResults:getAssessmentResultController(dependencies),
    getCheckAssessmetAttendOrNot:getCheckAssessmetAttendOrNotController(dependencies),
    addReview:addReviewController(dependencies)
  };
};
