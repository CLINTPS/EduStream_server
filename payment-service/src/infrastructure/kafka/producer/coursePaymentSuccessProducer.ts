import { producer } from "..";

export default async (data: {
  userId: string;
  courseId: string;
  instructorRef: string;
  amount: number;
}) => {
  try {
    const { userId, courseId, amount, instructorRef } = data;
    await producer.connect();
    console.log(data,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa in the producer");
    
    const message:any = [
      {
        topic: "course-service-topic",
        messages: [
          {
            key: "coursePaymentSuccess",
            value: JSON.stringify({
              userId: userId,
              courseId: courseId,
              amount: amount,
              instructorId: instructorRef,
            }),
          },
        ],
      },
      {
        topic: "auth-service-topic",
        messages: [
          {
            key: "coursePaymentSuccess",
            value: JSON.stringify({
              userId: userId,
              courseId: courseId,
              amount: amount,
              instructorId: instructorRef,
            }),
          },
        ],
      },
      {
        topic: "chat-service-topic",
        messages: [
          {
            key: "coursePaymentSuccess",
            value: JSON.stringify({
              userId: userId,
              courseId: courseId,
              amount: amount,
              instructorId: instructorRef,
            }),
          },
        ],
      }
    ]
    
    // await producer.sendBatch(message)
    await producer.sendBatch({topicMessages:message})

    console.log("message in producer",message);
    
  } catch (error: any) {
    console.error("kafka coursePaymentSuccess producer error:", error?.message);
  } finally {
    await producer.disconnect();
  }
};
