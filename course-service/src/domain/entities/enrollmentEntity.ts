import { Types } from "mongoose";

export interface EnrollmentEntity {
    _id?:Types.ObjectId;
    userId:Types.ObjectId;
    courseId:Types.ObjectId;
    instructorId?:Types.ObjectId;
    enrolledAt?: Date | string;
}