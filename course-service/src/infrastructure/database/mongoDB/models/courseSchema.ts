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