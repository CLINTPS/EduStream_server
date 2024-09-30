import { Schema,model } from "mongoose";
import { EnrollmentEntity } from "../../../../domain/entities";

const enrollmentSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        require:true,
    },
    courseId:{
        type:Schema.Types.ObjectId,
        ref:"courses",
        require:true,
    },
    instructorId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        require:true,
    },
    enrolledAt: {
        type: Schema.Types.Date,
        default: function () {
          return Date.now();
        },
    },
})

export const Enrollment = model<EnrollmentEntity>("enrollments",enrollmentSchema)