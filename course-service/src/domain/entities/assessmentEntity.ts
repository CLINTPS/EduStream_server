import { Types } from "mongoose";

interface questionEntity {
  question: string;
  options: string[];
  answer: string;
}

export interface AssessmentEntity {
  _id: string | Types.ObjectId;
  instructorId: Types.ObjectId;
  courseId: Types.ObjectId;
  title: string;
  questions: questionEntity[];
  questionScore: number;
  totalScore: number;
  passingScore: number;
  createdAt?: Date; 
  updatedAt?: Date;
}