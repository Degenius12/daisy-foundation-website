import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website } = validationResult.data;

    // Check honeypot field
    if (website) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    // TODO: Send email via Resend
    // const emailResult = await sendContactEmail({
    //   to: "hello@daisysfoundation.com",
    //   from: email,
    //   subject: subject || "Contact Form Submission",
    //   name,
    //   message,
    // });

    // TODO: Store in Supabase
    // await supabase.from("contact_submissions").insert({
    //   name,
    //   email,
    //   subject,
    //   message,
    //   status: "new",
    // });

    // For now, just return success
    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
