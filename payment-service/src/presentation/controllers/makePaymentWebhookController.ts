import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import Stripe from "stripe";
import { Payment } from "../../infrastructure/database/models/payment";
import { coursePaymentSuccessProducer } from "../../infrastructure/kafka/producer";
import { createChatProducer } from "../../infrastructure/kafka/producer"

const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
  apiVersion: "2024-06-20",
});

export const makePaymentWebhookController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stripeSignature = req.headers['stripe-signature'];
      if (!stripeSignature) {
        throw new Error("No stripe signature found!");
      }

      console.log("stripeSignature..",stripeSignature);
      

      let event: Stripe.Event;

      try {
          console.log("STRIPE_ENDPOINT_SECRET",process.env.STRIPE_ENDPOINT_SECRET);
          console.log("request.body",req.body);
          event = stripe.webhooks.constructEvent(
              req.body,
              stripeSignature,
              process.env.STRIPE_ENDPOINT_SECRET as string
              
        );
      } catch (err) {
        return res.status(400).send(`Webhook Error: ${(err as Error).message}`);
      }

      console.log("Event received:", event);
      console.log("Event type:", event.type);

      
      switch (event.type) {
        case "checkout.session.completed":
          try {
          const checkoutSession = event.data.object as Stripe.Checkout.Session;
          console.log("Checkout session completed:", checkoutSession);

          const userId = checkoutSession.metadata?.userId as string;
          const instructorRef = checkoutSession.metadata?.instructorRef as string;
          const courseId = checkoutSession.metadata?.courseId as string;
          const amountPaise = checkoutSession.amount_total ?? 0;
          const amountRupees = amountPaise / 100; 
          const status = checkoutSession.payment_status;

          const newPayment = new Payment({
            userId,
            instructorRef,
            courseId,
            status,
            amount: amountRupees
          });
          console.log("Payment data to be saved:", newPayment);

            let paymetRes;
            try {
              paymetRes = await newPayment.save();
              console.log("Payment saved successfully:", paymetRes);
              await createChatProducer({
                type: "individual",
                participants: [userId,instructorRef]
              })
            } catch (error) {
              console.error("Error saving payment:", error);
              throw new Error("Payment saving failed!");
            }

            if (!paymetRes) {
              throw new Error("Payment response is empty, payment might have failed!");
            }

          const produceData = {
            userId: paymetRes.userId.toString(),
            courseId: paymetRes.courseId.toString(),
            instructorRef: paymetRes.instructorRef.toString(),
            amount: paymetRes.amount,
          };
          console.log(produceData,"produce data in the success payment");

          try {
            await coursePaymentSuccessProducer(produceData);
            console.log("Data produced successfully to Kafka.");
          } catch (error) {
            console.error("Error producing data to Kafka:", error);
            throw new Error("Failed to send payment success message to Kafka!");
          }
        } catch (error) {
          console.error("Error handling 'checkout.session.completed' event:", error);
          throw error;
        }
          break;

        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      res.status(200).send({ received: true });
    } catch (error) {
      next(error);
    }
  };
};
