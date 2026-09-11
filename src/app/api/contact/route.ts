import { NextResponse } from "next/server";
import { sendFormEmail, EmailField } from "@/lib/mailer";

interface GenericFormPayload {
  formType?: "consultation" | "contact" | "pricing" | string;
  // Contact page fields
  firstName?: string;
  lastName?: string;
  websiteUrl?: string;
  companyName?: string;
  help?: string[];
  // Consultation & Pricing modal fields
  fullName?: string;
  planName?: string;
  planPrice?: string;
  // Common fields
  name?: string;
  email?: string;
  phone?: string;
  budget?: string;
  message?: string;
  smsConsent?: boolean;
  termsConsent?: boolean;
  consent?: boolean;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request): Promise<NextResponse> {
  let body: GenericFormPayload;

  try {
    body = (await request.json()) as GenericFormPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body. JSON payload expected." },
      { status: 400 }
    );
  }

  // Determine submitter's name
  const name =
    body.fullName?.trim() ||
    body.name?.trim() ||
    [body.firstName?.trim(), body.lastName?.trim()].filter(Boolean).join(" ");

  const email = body.email?.trim();

  // Basic validation
  if (!name) {
    return NextResponse.json(
      { error: "Please provide your name." },
      { status: 422 }
    );
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 422 }
    );
  }

  // Determine terms agreement
  const agreedToTerms =
    body.termsConsent !== undefined ? body.termsConsent : body.consent;

  if (agreedToTerms === false) {
    return NextResponse.json(
      { error: "You must agree to the Terms & Privacy Policy to proceed." },
      { status: 422 }
    );
  }

  // Build labeled fields
  const fields: EmailField[] = [];

  // Determine form type and subject
  let formTypeTitle = "Website Inquiry";
  let emailSubject = `New Inquiry from ${name}`;

  if (body.formType === "consultation" || (!body.formType && body.fullName && !body.message && !body.planName)) {
    formTypeTitle = "Free Consultation Request";
    emailSubject = `Free Consultation Request: ${name}`;
    fields.push(
      { label: "Form Type", value: "Get a Free Consultation (Popup)" },
      { label: "Full Name", value: name },
      { label: "Email Address", value: email },
      { label: "Phone Number", value: body.phone },
      { label: "SMS Consent", value: body.smsConsent ? "Agreed (Opted in)" : "Not checked" },
      { label: "Terms & Privacy Agreement", value: agreedToTerms ? "Agreed" : "No" }
    );
  } else if (body.formType === "pricing" || body.planName) {
    formTypeTitle = `Pricing Inquiry - ${body.planName || "Custom Plan"}`;
    emailSubject = `Plan Inquiry (${body.planName ?? "Package"}): ${name}`;
    fields.push(
      { label: "Form Type", value: "Pricing Package Inquiry (Modal)" },
      { label: "Selected Plan", value: body.planName },
      { label: "Plan Price", value: body.planPrice },
      { label: "Full Name", value: name },
      { label: "Email Address", value: email },
      { label: "Phone Number", value: body.phone },
      { label: "SMS Consent", value: body.smsConsent ? "Agreed (Opted in)" : "Not checked" },
      { label: "Terms & Privacy Agreement", value: agreedToTerms ? "Agreed" : "No" }
    );
  } else if (body.formType === "contact" || body.firstName || body.lastName || body.help) {
    formTypeTitle = "Contact Us Page Inquiry";
    emailSubject = `Contact Form Submission: ${name}`;
    fields.push(
      { label: "Form Type", value: "Contact Us Page Form" },
      { label: "First Name", value: body.firstName || "—" },
      { label: "Last Name", value: body.lastName || "—" },
      { label: "Full Name", value: name },
      { label: "Email Address", value: email },
      { label: "Phone Number", value: body.phone },
      { label: "Company Name", value: body.companyName },
      { label: "Website URL", value: body.websiteUrl },
      { label: "Services Requested", value: body.help && body.help.length > 0 ? body.help : "None specified" },
      { label: "Message / Project Scope", value: body.message },
      { label: "SMS Consent", value: body.smsConsent ? "Agreed (Opted in)" : "Not checked" },
      { label: "Terms & Privacy Agreement", value: agreedToTerms ? "Agreed" : "No" }
    );
  } else {
    // Generic / ContactForm component
    fields.push(
      { label: "Form Type", value: "Contact Form" },
      { label: "Name", value: name },
      { label: "Email Address", value: email },
      { label: "Phone Number", value: body.phone },
      { label: "Estimated Budget", value: body.budget },
      { label: "Message / Project Scope", value: body.message },
      { label: "Terms & Privacy Agreement", value: agreedToTerms ? "Agreed" : "No" }
    );
  }

  try {
    await sendFormEmail({
      subject: emailSubject,
      title: formTypeTitle,
      replyTo: email,
      fields,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your submission has been received. Our team will get back to you shortly!",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[api/contact] Email sending error:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Failed to send email. Please check your mail configuration.";

    return NextResponse.json(
      {
        error: "Unable to send your message right now. Please try again or contact us directly.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
