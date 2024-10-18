import { Types } from "mongoose";

interface ResultEntity {
  _id: string | Types.ObjectId;
  userId: Types.ObjectId;
  examId: Types.ObjectId; 
  correctAnswers: number;
  totalQuestions: number;
  resultStatus: "Passed" | "Failed";
  score: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default ResultEntity;
