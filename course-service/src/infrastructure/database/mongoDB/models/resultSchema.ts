import { model, Schema, Types } from "mongoose";

const ResultSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "users", 
      required: true,
    },
    examId: {
      type: Types.ObjectId,
      ref: "assessments",
      required: true,
    },
    courseId: {
      type: Types.ObjectId,
      ref: "courses",
      required: true,
    },
    correctAnswers: {
      type: Number,
      required: true,
    },
    totalQuestions: {
      type: Number, 
      required: true,
    },
    resultStatus: {
      type: String,
      enum: ["Passed", "Failed"],
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

export const Result = model("results", ResultSchema);
