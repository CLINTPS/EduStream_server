import { Schema, model } from "mongoose";
import { UserEntity } from "../../../../domain/entites";

const UserSchema = new Schema<UserEntity>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "instructor", "admin", "pending"],
        default: "student",
    },
    profile: {
        avatar: {
            type: String,
            default: "https://www.pngkey.com/png/detail/72-729716_user-avatar-png-graphic-free-download-icon.png",
        },
        dob: {
            type: Date,
        },
        gender: {
            type: String,
            enum: ["male", "female", "other"],
        },
        qualification: {
            type:String,
        },
        bio: {
            type: String,
        },
        experience: {
            type: Number,
        },
    },
    contact: {
        phoneNumber: {
            type: String,
        },
        socialMedia: {
            instagram: { type: String },
            linkedIn: { type: String },
            facebook: { type: String },
        },
    },
    address :{
        houseName :{
            type:String,
        },
        post :{
            type:String,
        },
        street :{
            type:String,
        },
        country :{
            type:String,
        },
        state :{
            type:String,
        },
        district :{
            type:String,
        },
    },
    instructoreProof :{
        idProof :{
            type:String,
        },
        certificate :{
            type:String,
        },
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    profit: {
        type: Number,
        default: 0,
    },
    rejectReson : {
        type:[String]
    },
    profession: {
        type: String,
    },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

export const User = model<UserEntity>("users", UserSchema);
