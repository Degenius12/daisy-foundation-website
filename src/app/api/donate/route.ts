import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { donationSchema } from "@/lib/validation/schemas";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = donationSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid donation data", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { amount, frequency, donorName, donorEmail } = validationResult.data;
    const origin = request.headers.get("origin") ?? "https://daisysnonprofit.com";

    const session = await stripe.checkout.sessions.create({
      mode: frequency === "monthly" ? "subscription" : "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: amount * 100,
            product_data: {
              name: `Daisy's Nonprofit ${frequency === "monthly" ? "Monthly " : ""}Donation`,
              description: "Support families through quality early childhood education and community programs.",
            },
            ...(frequency === "monthly" && {
              recurring: { interval: "month" as const },
            }),
          },
          quantity: 1,
        },
      ],
      ...(donorEmail && { customer_email: donorEmail }),
      success_url: `${origin}/?donation=success`,
      cancel_url: `${origin}/?donation=cancelled`,
      metadata: donorName ? { donor_name: donorName } : {},
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error("Donation error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
