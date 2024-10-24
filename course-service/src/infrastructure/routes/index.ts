import { Router } from "express";
import { IDependencies } from "../../application/interface/IDependencies";
import { controllers } from "../../presentation/controllers";
import { jwtMiddleware } from "../../_lib/common";

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
        getAllCourse,
        createAssessment,
        updateAssessment,
        getAssessment,
        submitAssessment,
        getExamResults,
        getCheckAssessmetAttendOrNot,
        addReview
    }=controllers(dependencies);
    const router = Router();

    //Instructore Route
    router.route("/create-course").post(jwtMiddleware,createCourse)
    router.route("/edit-course").post(jwtMiddleware,editCourse)
    router.route("/fetchMyCourses/:id").get(myCourse)
    router.route("/create-assessment").post(jwtMiddleware,createAssessment)
    router.route("/update-assessment/:id").put(jwtMiddleware,updateAssessment)
    router.route("/check-Assessment/:id").get(jwtMiddleware,getAssessment)
    router.route("/check-assessment-attendance").post(jwtMiddleware,getCheckAssessmetAttendOrNot)


    //Admin Route
    router.route("/getPendingCourses").get(jwtMiddleware,getPendingCourse)
    router.route("/approveCourse").post(jwtMiddleware,approvedCourse)
    router.route("/rejectCourse").post(jwtMiddleware,rejectedCourse)

    //Student Routes
    router.route("/getAllCourses").get(jwtMiddleware,getAllCourse)
    router.route("/getCourse/:id").get(jwtMiddleware,getCourse)
    router.route("/enrollment/:id").get(jwtMiddleware,getEnrolledCourse)
    router.route("/enrollment/singleView/:id").get(jwtMiddleware,getEnrolledSingleCourse)
    router.route("/submit-assessment").post(jwtMiddleware,submitAssessment)
    router.route("/exam-results").get(jwtMiddleware,getExamResults)
    router.route("/add-review").post(jwtMiddleware,addReview)

    return router;
}