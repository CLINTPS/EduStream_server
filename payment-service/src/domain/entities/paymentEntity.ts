import { Date, Schema } from "mongoose";

 export interface PaymentEntity {
  _id?: Schema.Types.ObjectId;
  userId?: Schema.Types.ObjectId;
  courseId?: Schema.Types.ObjectId;
  instructorRef?:Schema.Types.ObjectId;
  method: string;
  status: string;
  amount: number;
  createdAt?:Date;
  updatedAt?:Date;
 }