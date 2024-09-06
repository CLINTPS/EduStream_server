import { ObjectId } from "mongoose";

enum Role {
    student = 'student',
    instracture = 'instracture',
    admin = 'admin',
    pending = 'pending',
}

enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
}

interface SocialMedia {
    facebook? : string;
    instagram? : string;
    linkedIn? : string;
}

interface Profile {
    avatar?:string;
    dob?:Date;
    gender?:Gender;
    bio?:string;
    qualification?:string;
    experience?:number;
}

interface Contact {
    phoneNumber?:number;
    socialMedia?:SocialMedia;
}

interface InstructoreProof {
    idProof?:string;
    certificate?:string
}

interface Address {
    houseName?:string;
    post?:string;
    street?:string;
    country?:string;
    state?:string;
    district?:string;
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
    address?:Address;
    instructoreProof?:InstructoreProof;
    isBlocked?: boolean;
    isVerified?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    profit?:number;
    profession?: string;
    rejectReson?:string;
}