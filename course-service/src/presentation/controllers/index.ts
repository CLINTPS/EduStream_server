import { IDependencies } from '../../application/interface/IDependencies'

import {
    approvedCourseController,
    createCourseController,
    editCourseController,
    getAllCoursesController,
    getCourseController,
    getPendingCourseController,
    instructorCourseController,
    rejectCourseController,
} from '../../presentation/controllers/course'

export const controllers = (dependencies:IDependencies) => {
    return {
        createCourse:createCourseController(dependencies),
        myCourse:instructorCourseController(dependencies),
        getPendingCourse:getPendingCourseController(dependencies),
        approvedCourse:approvedCourseController(dependencies),
        rejectedCourse:rejectCourseController(dependencies),
        editCourse:editCourseController(dependencies),
        getAllCourses:getAllCoursesController(dependencies),
        getCourse:getCourseController(dependencies)
    }
}