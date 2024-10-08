import { Schema, model } from "mongoose";

const paymentSchema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      courseId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      instructorRef:{
        type: Schema.Types.ObjectId,
        required: true,
      },
      method: {
        type: String,
        default:'card'
      },
      status: {
        type: String,
        // enum: ["pending", "completed", "failed"],
        // required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  );
  
  export const Payment = model("payments", paymentSchema);