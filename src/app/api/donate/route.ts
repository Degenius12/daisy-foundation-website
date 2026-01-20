import { NextRequest, NextResponse } from "next/server";
import { donationSchema } from "@/lib/validation/schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = donationSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid donation data", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { amount, frequency } = validationResult.data;

    // TODO: Create Stripe Checkout Session
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    //
    // const session = await stripe.checkout.sessions.create({
    //   mode: frequency === "monthly" ? "subscription" : "payment",
    //   line_items: [
    //     {
    //       price_data: {
    //         currency: "usd",
    //         unit_amount: amount * 100, // Convert to cents
    //         product_data: {
    //           name: `Daisy Foundation ${frequency === "monthly" ? "Monthly" : ""} Donation`,
    //           description: `Support families through quality early childhood education`,
    //         },
    //         ...(frequency === "monthly" && {
    //           recurring: {
    //             interval: "month",
    //           },
    //         }),
    //       },
    //       quantity: 1,
    //     },
    //   ],
    //   success_url: `${request.headers.get("origin")}/?donation=success`,
    //   cancel_url: `${request.headers.get("origin")}/?donation=cancelled`,
    // });
    //
    // return NextResponse.json({ url: session.url });

    // For now, return a mock URL for testing
    console.log("Donation request:", { amount, frequency });

    // Simulate Stripe checkout URL
    const mockCheckoutUrl = `https://checkout.stripe.com/test/session?amount=${amount}&frequency=${frequency}`;

    return NextResponse.json({
      url: mockCheckoutUrl,
      sessionId: "mock_session_id",
    });
  } catch (error) {
    console.error("Donation error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
