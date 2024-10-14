import { Types } from "mongoose";

export interface Lesson {
    lessonNumber:string;
    title:string;
    description:string;
    lessonVideo:string;
}

export interface Pricing {
    type:"free" | "paid";
    amount :number;
}

export interface EditCourseEntity {
    _id?:Types.ObjectId;
    title:string;
    description:string;
    instructorRef:Types.ObjectId;
    thumbnailImage:string;
    thumbnailVideo:string;
    category:string;
    language:string;
    lessons:Lesson[];
    pricing:Pricing;
    rejectReason?:string;
    isBlocked?:boolean;
    isPublished?:boolean;
    isRejected?:boolean;
    createdAt?: Date;
    updatedAt?: Date;
    courseId:Types.ObjectId
}