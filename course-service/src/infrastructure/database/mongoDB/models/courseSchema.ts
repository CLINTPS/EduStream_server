import { Schema,model,Types } from "mongoose";
import { CourseEntity } from "../../../../domain/entities";

const lessonSchema = new Schema({
    lessonNumber:{
        type: String,
        required:true
    },
    title : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    lessonVideo : {
        type:String,
        required:true
    }
})

const reviewSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const courseSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    instructorRef:{
        type: Types.ObjectId,
        ref:"users",
        required: true,
    },
    thumbnailImage:{
        type: String,
        required: true,
    },
    thumbnailVideo:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    language:{
        type: String,
        required: true,
    },
    lessons :[lessonSchema],
    pricing :{
        type :{
            type:String,
            enum:["free","paid"],
            default:"free",
        },
        amount:{
            type:Number,
            default:0,
        }
    },
    reviews: [reviewSchema],
    isBlocked:{
        type: Boolean,
        default: false,
    },
    isPublished:{
        type: Boolean,
        default: false,
    },
    isRejected:{
        type: Boolean,
        default: false,
    },
    rejectReason:{
        type:String
    }
})

export const Course = model<CourseEntity>("courses",courseSchema)