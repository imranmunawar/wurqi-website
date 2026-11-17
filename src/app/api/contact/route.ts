import { NextResponse } from "next/server";
import { submitLead } from "@/lib/crm";
import { contactFormSchema } from "@/lib/validation/forms";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limited = checkRateLimit(`contact:${ip}`, { limit: 8, windowMs: 60_000 });
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 },
    );
  }

  const result = await submitLead({
    type: "contact",
    email: parsed.data.email,
    name: parsed.data.name,
    company: parsed.data.company || undefined,
    phone: parsed.data.phone || undefined,
    message: parsed.data.message,
    source: parsed.data.source,
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error ?? "Unable to submit." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, id: result.id });
}
