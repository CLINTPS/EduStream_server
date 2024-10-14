import { Router } from "express";
import { IDependencies } from "../../application/interface/IDependencies";
import { getAllCoursesController } from "../../presentation/controllers/course";
import { controllers } from "../../presentation/controllers";
import { jwtMiddleware } from "../../_lib/common";
import { verifyAdmin, verifyInstructor } from "../../_lib/common/middlewares";

export const routes = (dependencies:IDependencies)=>{
    const {
        createCourse,
        myCourse,
        getPendingCourse,
        approvedCourse,
        rejectedCourse,
        editCourse,
        getCourse,
        getEnrolledCourse,
        getEnrolledSingleCourse,
        // getAllCourses,
        createAssessment,
        updateAssessment,
        getAssessment
    }=controllers(dependencies);
    const router = Router();

    //Instructore Route
    router.route("/create-course").post(jwtMiddleware,verifyInstructor,createCourse)
    router.route("/edit-course").post(jwtMiddleware,editCourse)
    router.route("/fetchMyCourses/:id").get(myCourse)
    router.route("/create-assessment").post(jwtMiddleware,createAssessment)
    router.route("/update-assessment/:id").put(jwtMiddleware,updateAssessment)
    router.route("/check-Assessment/:id").get(jwtMiddleware,getAssessment)


    //Admin Route
    router.route("/getPendingCourses").get(jwtMiddleware,verifyAdmin,getPendingCourse)
    router.route("/approveCourse").post(jwtMiddleware,verifyAdmin,approvedCourse)
    router.route("/rejectCourse").post(jwtMiddleware,verifyAdmin,rejectedCourse)

    //Student Routes
    router.route("/getAllCourses").get(jwtMiddleware,getAllCoursesController)
    router.route("/getCourse/:id").get(jwtMiddleware,getCourse)
    router.route("/enrollment/:id").get(jwtMiddleware,getEnrolledCourse)
    router.route("/enrollment/singleView/:id").get(jwtMiddleware,getEnrolledSingleCourse)

    return router;
}