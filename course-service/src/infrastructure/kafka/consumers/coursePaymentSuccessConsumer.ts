import { createEnrollment, getEnrollmentByUserId, updateUserProfit } from "../../database/mongoDB/repositories";

export default async (data:any)=>{
    try {
        console.log("coursePaymentSuccessConsumer data....",data);

        const existingEnrollments = await getEnrollmentByUserId(data.userId)

        console.log("existingEnrollments..",existingEnrollments);

        const match = existingEnrollments?.find((item)=>item.courseId.toString() == data.courseId.toString())

        if (match) return;

        await createEnrollment({
            userId:data.userId,
            courseId:data.courseId,
            instructorId:data.instructorId,
            enrolledAt: Date.now().toString()
        })

        await updateUserProfit(data.instructorId,data.amount)
        
        console.log("updateUserProfit-consumed--->course-services");
        
    }  catch (error:any) {
        console.log("coursePaymentSuccessConsumer error: ", error?.message);
    }
}