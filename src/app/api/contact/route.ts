import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  budget?: string;
  message?: string;
  consent: boolean;
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, consent } = body;

  if (!name || !email || !consent) {
    return NextResponse.json(
      { error: "Name, email, and consent are required." },
      { status: 422 }
    );
  }

  // TODO: Replace this with your preferred email transport (Resend, SendGrid, etc.)
  console.log("[contact] New inquiry received:", {
    to: siteConfig.contactEmail,
    from: email,
    name,
    phone: body.phone ?? "—",
    budget: body.budget ?? "—",
    message: body.message ?? "—",
  });

  return NextResponse.json(
    { success: true, message: "Your enquiry has been received. We'll be in touch within 2 business hours." },
    { status: 200 }
  );
}
