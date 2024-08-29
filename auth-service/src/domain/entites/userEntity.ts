import { ObjectId } from "mongoose";

enum Role {
    student = 'student',
    instracture = 'instracture',
    admin = 'admin'
}

enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
}

interface SocialMedia {
    facebook? : string;
    instagram? : string;
    linkedin? : string;
}

interface Profile {
    avatar?:string;
    dob?:Date;
    gender?:Gender;
}

interface Contact {
    phone?:number;
    socialmedia?:SocialMedia;
}

export interface UserEntity {
    _id?:ObjectId;
    firstName:string;
    lastName:string;
    email: string;
    password?: string;
    role?: Role;
    profile?: Profile;
    contact?: Contact;
    isBlocked?: boolean;
    isVerified?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    profession?: string;
}