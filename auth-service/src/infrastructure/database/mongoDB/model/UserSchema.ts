import { Schema,model } from "mongoose";
import { UserEntity } from "../../../../domain/entites";

const UserSchema=new Schema({
    firstName : {
        type:String,
        require:true
    },
    lastName : {
        type:String,
        require:true
    },
    email : {
        type:String,
        require:true,
        unique: true,
        index: true
    },
    password: {
        type:String,
        require:true
    },
    role : {
        type:String,
        enum: [
            "student",
            "instructor",
            "admin"
        ],
        default:"student"
    },
    profile: {
        avatar: {
            type:String,
            default: "https://www.pngkey.com/png/detail/72-729716_user-avatar-png-graphic-free-download-icon.png",
        },
        dob:{
            type:String
        },
        gender:{
            enum:["male","female","other"]
        },
        phoneNumber :{
            type:String,
        },
        socialMedia: {
            instagram: String,
            linkedIn: String,
            facebook: String
        }
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    profit: {
        type: Number,
        default: 0
    },
    otp: {
        type: String
    }
},{ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

export const User=model<UserEntity>("users",UserSchema)