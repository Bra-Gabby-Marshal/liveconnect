import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function stripTags(input: string): string {
  return input.replace(/<\/?[^>]+>/g, "");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let name = "";
  let email = "";
  let phone = "";
  let message = "";
  let eventType = "";
  let eventDate = "";

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const body = await request.text();
    const params = new URLSearchParams(body);
    name = params.get("name") ?? "";
    email = params.get("email") ?? "";
    phone = params.get("phone") ?? "";
    message = params.get("message") ?? "";
    eventType = params.get("event_type") ?? "";
    eventDate = params.get("event_date") ?? "";
  } else if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    name = String(form.get("name") ?? "");
    email = String(form.get("email") ?? "");
    phone = String(form.get("phone") ?? "");
    message = String(form.get("message") ?? "");
    eventType = String(form.get("event_type") ?? "");
    eventDate = String(form.get("event_date") ?? "");
  } else if (contentType.includes("application/json")) {
    const data = (await request.json()) as Record<string, unknown>;
    name = String(data.name ?? "");
    email = String(data.email ?? "");
    phone = String(data.phone ?? "");
    message = String(data.message ?? "");
    eventType = String(data.event_type ?? "");
    eventDate = String(data.event_date ?? "");
  } else {
    return new NextResponse(
      "There was a problem with your submission, please try again.",
      { status: 415 },
    );
  }

  name = stripTags(name).replace(/[\r\n]+/g, " ").trim();
  email = email.trim();
  phone = stripTags(phone).replace(/[\r\n]+/g, " ").trim();
  message = message.trim();
  eventType = stripTags(eventType).replace(/[\r\n]+/g, " ").trim();
  eventDate = stripTags(eventDate).replace(/[\r\n]+/g, " ").trim();

  if (!name || !phone || !message || !isValidEmail(email)) {
    return new NextResponse(
      "Oops! There was a problem with your submission. Please complete the form and try again.",
      { status: 400 },
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    MAIL_FROM,
    MAIL_TO,
  } = process.env;

  if (!SMTP_HOST || !MAIL_TO) {
    return new NextResponse(
      "Oops! Something went wrong and we couldn't send your message.",
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT ? Number(SMTP_PORT) : 587,
    secure: SMTP_SECURE === "true",
    auth:
      SMTP_USER && SMTP_PASS
        ? { user: SMTP_USER, pass: SMTP_PASS }
        : undefined,
  });

  const subject = eventType
    ? `New booking enquiry: ${eventType} — ${name}`
    : `New booking enquiry from ${name}`;
  const text =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Event type: ${eventType || "(not provided)"}\n` +
    `Event date: ${eventDate || "(not provided)"}\n\n` +
    `Message:\n${message}\n`;

  try {
    await transporter.sendMail({
      from: MAIL_FROM ?? `${name} <${email}>`,
      to: MAIL_TO,
      replyTo: email,
      subject,
      text,
    });
  } catch {
    return new NextResponse(
      "Oops! Something went wrong and we couldn't send your message.",
      { status: 500 },
    );
  }

  return new NextResponse("Thank You! Your message has been sent.", {
    status: 200,
  });
}

export function GET() {
  return new NextResponse(
    "There was a problem with your submission, please try again.",
    { status: 403 },
  );
}
