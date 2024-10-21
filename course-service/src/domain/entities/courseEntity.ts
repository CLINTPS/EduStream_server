import { Types } from "mongoose";

export interface Lesson {
    _id:string;
    lessonNumber:string;
    title:string;
    description:string;
    lessonVideo:string;
}

export interface Pricing {
    type:"free" | "paid";
    amount :number;
}

export interface Review {
    userId: Types.ObjectId;
    userName: string;   
    rating: number;   
    review: string;
    createdAt?: Date;
}

export interface CourseEntity {
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
    reviews?: Review[];
    rejectReason?:string;
    isBlocked?:boolean;
    isPublished?:boolean;
    isRejected?:boolean;
    createdAt?: Date;
    updatedAt?: Date;
    courseId?:string;
    totalCourses?: number,
    totalPages?: number,
    currentPage?: number
}