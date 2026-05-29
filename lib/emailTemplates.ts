/**
 * Branded HTML email templates for the Live Connect contact form.
 *
 * Built with table-based layout and inline styles for cross-client
 * compatibility (Gmail, Outlook, Apple Mail, mobile). Colors come from the
 * official Live Connect brand palette.
 */

// ── Brand palette ───────────────────────────────────────────────────────────
const C = {
  navy: "#01173F",
  royal: "#0269BB",
  darkBlue: "#013079",
  lightGray: "#DFDFE1",
  nearWhite: "#F9FCFD",
  mutedGray: "#9F9B9D",
  white: "#FFFFFF",
};

const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const STUDIO_NAME = "Live Connect";
const STUDIO_TAGLINE = "Professional Live Streaming & Event Production";

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────--
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** A single label/value row inside the details card. */
function detailRow(label: string, value: string, isLink?: "email" | "tel"): string {
  const safe = escapeHtml(value);
  let rendered = safe;
  if (isLink === "email") {
    rendered = `<a href="mailto:${safe}" style="color:${C.royal};text-decoration:none;">${safe}</a>`;
  } else if (isLink === "tel") {
    rendered = `<a href="tel:${safe.replace(/\s+/g, "")}" style="color:${C.royal};text-decoration:none;">${safe}</a>`;
  }
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${C.lightGray};">
        <p style="margin:0 0 4px;font-family:${FONT};font-size:11px;line-height:1;letter-spacing:1.2px;text-transform:uppercase;color:${C.mutedGray};font-weight:700;">${escapeHtml(label)}</p>
        <p style="margin:0;font-family:${FONT};font-size:15px;line-height:1.5;color:${C.navy};font-weight:500;">${rendered}</p>
      </td>
    </tr>`;
}

/** Pill-style button. */
function button(label: string, href: string, bg: string, color: string): string {
  return `<a href="${href}" target="_blank" style="display:inline-block;font-family:${FONT};font-size:14px;font-weight:600;line-height:1;text-decoration:none;color:${color};background-color:${bg};padding:13px 26px;border-radius:30px;">${escapeHtml(label)}</a>`;
}

/**
 * Shared shell: branded header, body, and footer wrapped in an inbox-style
 * centered card on a soft near-white background.
 */
function layout(opts: {
  preheader: string;
  eyebrow: string;
  heading: string;
  bodyHtml: string;
  year: number;
}): string {
  const { preheader, eyebrow, heading, bodyHtml, year } = opts;
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="light" />
  <title>${escapeHtml(heading)}</title>
</head>
<body style="margin:0;padding:0;background-color:${C.nearWhite};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:${C.nearWhite};">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${C.nearWhite};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background-color:${C.white};border-radius:18px;overflow:hidden;box-shadow:0 10px 40px rgba(1,23,63,0.12);">

          <!-- Header -->
          <tr>
            <td style="background-color:${C.navy};background-image:linear-gradient(135deg,${C.navy} 0%,${C.darkBlue} 55%,${C.royal} 100%);padding:34px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="52" valign="middle">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" valign="middle" width="48" height="48" style="width:48px;height:48px;background-color:rgba(255,255,255,0.14);border-radius:50%;font-family:${FONT};font-size:18px;font-weight:700;letter-spacing:0.5px;color:${C.white};">LC</td>
                      </tr>
                    </table>
                  </td>
                  <td valign="middle" style="padding-left:14px;">
                    <p style="margin:0;font-family:${FONT};font-size:18px;line-height:1.2;font-weight:700;letter-spacing:0.5px;color:${C.white};">${STUDIO_NAME}</p>
                    <p style="margin:2px 0 0;font-family:${FONT};font-size:12px;line-height:1.3;color:rgba(255,255,255,0.75);">${STUDIO_TAGLINE}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Subject band -->
          <tr>
            <td style="padding:30px 36px 8px;">
              <p style="margin:0 0 6px;font-family:${FONT};font-size:11px;line-height:1;letter-spacing:1.5px;text-transform:uppercase;color:${C.royal};font-weight:700;">${escapeHtml(eyebrow)}</p>
              <h1 style="margin:0;font-family:${FONT};font-size:24px;line-height:1.3;color:${C.navy};font-weight:700;">${escapeHtml(heading)}</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:8px 36px 36px;">
              ${bodyHtml}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:${C.nearWhite};border-top:1px solid ${C.lightGray};padding:26px 36px;">
              <p style="margin:0 0 6px;font-family:${FONT};font-size:14px;line-height:1.5;color:${C.navy};font-weight:700;">${STUDIO_NAME}</p>
              <p style="margin:0 0 10px;font-family:${FONT};font-size:13px;line-height:1.6;color:${C.mutedGray};">Accra, Ghana &nbsp;•&nbsp; 0551 380 990 &nbsp;•&nbsp; 0551 807 047</p>
              <p style="margin:0;font-family:${FONT};font-size:12px;line-height:1.5;color:${C.mutedGray};">© ${year} ${STUDIO_NAME}. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Details card shared by both emails. */
function detailsCard(d: EnquiryData): string {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;background-color:${C.nearWhite};border:1px solid ${C.lightGray};border-radius:14px;">
      <tr>
        <td style="padding:6px 22px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow("Name", d.name)}
            ${detailRow("Email", d.email, "email")}
            ${detailRow("Phone", d.phone, "tel")}
            ${detailRow("Event type", d.eventType || "Not provided")}
            ${detailRow("Event date", d.eventDate || "Not provided")}
          </table>
          <p style="margin:18px 0 6px;font-family:${FONT};font-size:11px;line-height:1;letter-spacing:1.2px;text-transform:uppercase;color:${C.mutedGray};font-weight:700;">Message</p>
          <div style="border-left:3px solid ${C.royal};padding:4px 0 4px 14px;">
            <p style="margin:0;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.navy};white-space:pre-wrap;">${escapeHtml(d.message)}</p>
          </div>
        </td>
      </tr>
    </table>`;
}

/** Notification sent to the studio inbox. */
export function renderEnquiryEmail(d: EnquiryData, year: number) {
  const subject = d.eventType
    ? `New booking enquiry: ${d.eventType} — ${d.name}`
    : `New booking enquiry from ${d.name}`;

  const waNumber = d.phone.replace(/[^\d]/g, "");
  const actions = `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
      <tr>
        <td style="padding-right:10px;">${button("Reply by email", `mailto:${escapeHtml(d.email)}`, C.royal, C.white)}</td>
        <td style="padding-right:10px;">${button("Call", `tel:${escapeHtml(d.phone).replace(/\s+/g, "")}`, C.white, C.navy)}</td>
        ${waNumber ? `<td>${button("WhatsApp", `https://wa.me/${waNumber}`, C.white, C.navy)}</td>` : ""}
      </tr>
    </table>`;

  const bodyHtml = `
    <p style="margin:0;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.mutedGray};">A new enquiry just came in through the website contact form. The details are below — reply directly to reach ${escapeHtml(d.name)}.</p>
    ${detailsCard(d)}
    ${actions}`;

  const html = layout({
    preheader: `${d.name} sent a new enquiry${d.eventType ? ` about a ${d.eventType}` : ""}.`,
    eyebrow: "New enquiry",
    heading: subject,
    bodyHtml,
    year,
  });

  const text =
    `New booking enquiry\n\n` +
    `Name: ${d.name}\n` +
    `Email: ${d.email}\n` +
    `Phone: ${d.phone}\n` +
    `Event type: ${d.eventType || "(not provided)"}\n` +
    `Event date: ${d.eventDate || "(not provided)"}\n\n` +
    `Message:\n${d.message}\n`;

  return { subject, html, text };
}

/** Confirmation copy sent to the person who submitted the form. */
export function renderConfirmationEmail(d: EnquiryData, year: number) {
  const subject = "We received your enquiry — Live Connect";

  const actions = `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
      <tr>
        <td style="padding-right:10px;">${button("Call us", "tel:+233551380990", C.royal, C.white)}</td>
        <td>${button("Chat on WhatsApp", "https://wa.me/233551380990", C.white, C.navy)}</td>
      </tr>
    </table>`;

  const bodyHtml = `
    <p style="margin:0 0 14px;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.navy};">Hi ${escapeHtml(d.name)},</p>
    <p style="margin:0;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.mutedGray};">Thanks for reaching out to ${STUDIO_NAME} — we&rsquo;ve received your enquiry and a member of our team will get back to you shortly. Here&rsquo;s a copy of what you sent us for your records.</p>
    ${detailsCard(d)}
    <p style="margin:22px 0 0;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.mutedGray};">Need to reach us sooner? We&rsquo;re a call or message away.</p>
    ${actions}`;

  const html = layout({
    preheader: "Thanks for your enquiry — we've received it and will be in touch soon.",
    eyebrow: "Enquiry received",
    heading: "Thanks — we've got your enquiry",
    bodyHtml,
    year,
  });

  const text =
    `Hi ${d.name},\n\n` +
    `Thanks for reaching out to ${STUDIO_NAME} — we've received your enquiry ` +
    `and will get back to you shortly. Here's a copy of what you sent:\n\n` +
    `Phone: ${d.phone}\n` +
    `Event type: ${d.eventType || "(not provided)"}\n` +
    `Event date: ${d.eventDate || "(not provided)"}\n\n` +
    `Message:\n${d.message}\n\n` +
    `— The ${STUDIO_NAME} team`;

  return { subject, html, text };
}
