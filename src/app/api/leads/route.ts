import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    // Honeypot: silently accept automated spam without forwarding it.
    if (typeof payload.website === "string" && payload.website.trim()) {
      return NextResponse.json({ success: true });
    }

    const required = ["fullName", "businessEmail", "companyName", "service"];
    for (const key of required) {
      if (typeof payload[key] !== "string" || !payload[key].trim()) {
        return NextResponse.json({ success: false, error: "Please complete all required fields." }, { status: 400 });
      }
    }
    const email = String(payload.businessEmail).trim();
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!endpoint) {
      return NextResponse.json({ success: false, error: "Lead storage is not configured yet." }, { status: 503 });
    }

    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
      cache: "no-store",
      redirect: "follow",
    });
    if (!upstream.ok) {
      return NextResponse.json({ success: false, error: "Lead storage service is unavailable." }, { status: 502 });
    }
    const result = await upstream.json().catch(() => null);
    if (!result || result.success !== true) {
      return NextResponse.json({ success: false, error: "Lead storage did not confirm receipt." }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid enquiry submission." }, { status: 400 });
  }
}
