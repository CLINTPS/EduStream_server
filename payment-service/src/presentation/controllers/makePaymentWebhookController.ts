import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import Stripe from "stripe";
import { Payment } from "../../infrastructure/database/models/payment";
import { coursePaymentSuccessProducer } from "../../infrastructure/kafka/producer";

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
          console.log("Payment saved:", newPayment);
          
          const paymetRes=await newPayment.save();

          console.log("paid response ------------:", paymetRes);

          if(!paymetRes){
            throw new Error("Payment failed!")
          }

          const produceData = {
            userId: paymetRes.userId.toString(),
            courseId: paymetRes.courseId.toString(),
            instructorRef: paymetRes.instructorRef.toString(),
            amount: paymetRes.amount,
          };
          console.log(produceData,"produce data in the success payment");
          
          await coursePaymentSuccessProducer(produceData)

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
