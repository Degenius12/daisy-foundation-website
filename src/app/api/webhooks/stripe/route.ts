import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature provided" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log("Donation completed:", {
      sessionId: session.id,
      amount: session.amount_total ? session.amount_total / 100 : 0,
      email: session.customer_details?.email,
      mode: session.mode,
    });
    // TODO: persist to Supabase donations table once env vars are configured in Vercel
    // (See docs/supabase-production-setup-2026-05-11.md)
  }

  return NextResponse.json({ received: true });
}
