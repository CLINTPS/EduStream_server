import { IDependencies } from "../../application/interface/IDependencies";

import {
  approvedCourseController,
  createCourseController,
  editCourseController,
  getAllCoursesController,
  getCourseController,
  getPendingCourseController,
  instructorCourseController,
  rejectCourseController,
  getEnrolledCourseController,
  getEnrolledSingleCourseController,
} from "../../presentation/controllers/course";

import { 
  createAssessmentController,
  getAssessmentController,
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
    // getAllCourses:getAllCoursesController(),
    getCourse: getCourseController(dependencies),
    getEnrolledCourse: getEnrolledCourseController(dependencies),
    getEnrolledSingleCourse: getEnrolledSingleCourseController(dependencies),
    createAssessment: createAssessmentController(dependencies),
    updateAssessment:updateAssessmentController(dependencies),
    getAssessment:getAssessmentController(dependencies)
  };
};
