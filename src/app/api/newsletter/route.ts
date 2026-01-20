import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation/schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = newsletterSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid email address", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // TODO: Add to Mailchimp
    // const mailchimpResult = await addSubscriber(email);

    // TODO: Store in Supabase
    // await supabase.from("newsletter_subscribers").insert({
    //   email,
    //   source: "website",
    // });

    // For now, just return success
    console.log("Newsletter subscription:", { email });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    // Check if already subscribed (simulate this for now)
    if (error instanceof Error && error.message.includes("already")) {
      return NextResponse.json(
        { error: "This email is already subscribed" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
