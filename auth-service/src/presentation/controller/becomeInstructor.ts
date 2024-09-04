import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
// import { User } from "../../infrastructure/database/mongoDB/model";

export const becomeInstructorController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {
      useCases: { instractureRequestUseCase },
    } = dependencies;

    try {      
      const becomeInstructorData = req.body;
      console.log("----------------", becomeInstructorData);

      const lastUserData = await instractureRequestUseCase(dependencies).execute(becomeInstructorData);

      console.log(">>>>>>>>>>>>>>",lastUserData);

      // const instructorData = {
      //   email: becomeInstructorData.email || "",
      //   role: becomeInstructorData.role || "pending",
      //   profile: {
      //     dob: becomeInstructorData.dob || undefined,
      //     gender: becomeInstructorData.gender || "",
      //     bio: becomeInstructorData.bio || "",
      //     teachingExperience: becomeInstructorData.experience || 0,
      //   },
      //   contact: {
      //     phoneNumber: becomeInstructorData.phoneNumber || "",
      //     socialMedia: {
      //       linkedIn: becomeInstructorData.linkedIn || "",
      //       instagram: becomeInstructorData.instagram || "",
      //       facebook: becomeInstructorData.facebook || "",
      //     },
      //   },
      //   address: {
      //     houseName: becomeInstructorData.houseName || "",
      //     post: becomeInstructorData.post || "",
      //     street: becomeInstructorData.street || "",
      //     country: becomeInstructorData.country || "",
      //     state: becomeInstructorData.state || "",
      //     district: becomeInstructorData.district || "",
      //   },
      //   instructoreProof: {
      //     idProof: becomeInstructorData.idProof || "",
      //     certificate: becomeInstructorData.certificate || "",
      //   },
      // };

      // console.log("Instructor Data:", instructorData);

      // const existingInstructor = await User.findOne({
      //   email: becomeInstructorData.email,
      // });

      // console.log("User Found:", existingInstructor);

      // if (existingInstructor) {
      //   existingInstructor.role =
      //     instructorData.role || existingInstructor.role;

      //   existingInstructor.profile = {
      //     ...existingInstructor.profile,
      //     ...instructorData.profile,
      //   };

      //   existingInstructor.contact = {
      //     ...existingInstructor.contact,
      //     ...instructorData.contact,
      //   };

      //   existingInstructor.address = {
      //     ...existingInstructor.address,
      //     ...instructorData.address,
      //   };

      //   existingInstructor.instructoreProof = {
      //     ...existingInstructor.instructoreProof,
      //     ...instructorData.instructoreProof,
      //   };

      //   await existingInstructor.save();

      //   console.log(
      //     "User updated successfully with pending instructor request"
      //   );
      //   res.status(200).json({
      //     success: true,
      //     message: "Instructor request submitted successfully...",
      //   });
      // } else {
      //   res.status(404).json({
      //     success: false,
      //     message: "Instructor request submitted faild...",
      //   });
      // }

      res.status(200).json({
        success: true,
        message: "Become instracture successfully..",
        data: lastUserData,
      })

    } catch (error: any) {
      console.log("BecomeInstructor controller error:", error);
      next(error);
    }
  };
};
