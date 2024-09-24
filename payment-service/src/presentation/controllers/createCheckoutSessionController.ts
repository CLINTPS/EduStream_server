import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import Stripe from "stripe";

export const createCheckoutSessionController = (
  dependencies: IDependencies
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stripeInstance = new Stripe(process.env.STRIPE_SECRET as string,{
        apiVersion:"2024-06-20"
      });

    //   console.log("createCheckoutSessionController body data...", req.body);

      const {
        courseName,
        courseThumbnail,
        userId,
        courseId,
        instructorRef,
        amount,
      } = req.body;

      const lineItems = [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: courseName,
              images: [courseThumbnail],
            },
            unit_amount: Math.floor(amount * 100),
          },
          quantity: 1,
        },
      ];

      const frontendUrl = process.env.FRONTEND_URL as string;
      const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${frontendUrl}/course/paymentsuccess`,
        cancel_url: `${frontendUrl}/courses/paymentfailed`,
        metadata: {
          userId,
          courseId,
          instructorRef,
        },
      });

      console.log("Checkout Session created:", session.id);
      res.status(200).json({
        success: true,
        sessionId: session.id,
        message: "payment response",
      });

    } catch (error) {
      console.log("createCheckoutSessionController error.....", error);
      next(error);
    }
  };
};
