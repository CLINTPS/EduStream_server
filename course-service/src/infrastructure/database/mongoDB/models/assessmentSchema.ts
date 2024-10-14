import { model, Schema, Types } from "mongoose";
import { AssessmentEntity } from "../../../../domain/entities";

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const AssessmentSchema = new Schema(
  {
    instructorId: {
      type: Types.ObjectId,
      ref: "users",
      required: true,
    },
    courseId: {
      type: Types.ObjectId,
      ref: "courses",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    questions: [questionSchema],
    questionScore: {
      type: Number,
      required: true,
    },
    totalScore: {
      type: Number,
      required: true,
    },
    passingScore: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Assessment = model<AssessmentEntity>(
  "assessments",
  AssessmentSchema
);
