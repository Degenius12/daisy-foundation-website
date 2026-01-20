import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await request.text(); // body validation happens in webhook handler
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "No signature provided" },
        { status: 400 }
      );
    }

    // TODO: Verify webhook signature
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    // const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    //
    // let event;
    // try {
    //   event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    // } catch (err) {
    //   return NextResponse.json(
    //     { error: "Invalid signature" },
    //     { status: 400 }
    //   );
    // }

    // TODO: Handle checkout.session.completed event
    // if (event.type === "checkout.session.completed") {
    //   const session = event.data.object;
    //
    //   // Store donation in Supabase
    //   await supabase.from("donations").insert({
    //     stripe_session_id: session.id,
    //     amount: session.amount_total / 100, // Convert from cents
    //     donor_email: session.customer_details?.email,
    //     donor_name: session.customer_details?.name,
    //     frequency: session.mode === "subscription" ? "monthly" : "one-time",
    //     status: "completed",
    //   });
    //
    //   // Send thank you email
    //   // await sendThankYouEmail(session.customer_details?.email);
    // }

    console.log("Stripe webhook received:", { signature: signature.substring(0, 20) });

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
