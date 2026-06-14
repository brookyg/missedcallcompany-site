import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, clinic, phone, email, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "website@missedcallcompany.com",
      to: "harrison@missedcallcompany.com",
      replyTo: email,
      subject: `New enquiry from ${name} — ${clinic || "Unknown clinic"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#FAF6EE;padding:32px;border-radius:8px;">
          <div style="background:#141C2B;padding:20px 24px;border-radius:6px;margin-bottom:24px;">
            <p style="font-family:Georgia,serif;font-size:20px;color:#FAF6EE;margin:0;">
              The <span style="color:#C8993A;">Missed Call</span> Company
            </p>
            <p style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#C8993A;margin:4px 0 0;">New website enquiry</p>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #E2DAC8;color:#5E6573;width:120px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #E2DAC8;color:#141C2B;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #E2DAC8;color:#5E6573;">Clinic</td><td style="padding:10px 0;border-bottom:1px solid #E2DAC8;color:#141C2B;">${clinic || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #E2DAC8;color:#5E6573;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #E2DAC8;color:#141C2B;">${phone}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #E2DAC8;color:#5E6573;">Email</td><td style="padding:10px 0;border-bottom:1px solid #E2DAC8;color:#141C2B;"><a href="mailto:${email}" style="color:#C8993A;">${email}</a></td></tr>
          </table>

          ${
            message
              ? `<div style="margin-top:20px;padding:16px;background:#fff;border-left:3px solid #C8993A;border-radius:0 4px 4px 0;">
              <p style="font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:#5E6573;margin:0 0 8px;">Message</p>
              <p style="font-size:14px;color:#141C2B;margin:0;line-height:1.6;">${message}</p>
            </div>`
              : ""
          }

          <div style="margin-top:24px;padding:16px;background:#141C2B;border-radius:6px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:#C8993A;color:#141C2B;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;padding:10px 24px;border-radius:4px;text-decoration:none;">Reply to ${name}</a>
          </div>

          <p style="font-size:11px;color:#5E6573;text-align:center;margin-top:16px;">Sent from missedcallcompany.com contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please email us directly." },
      { status: 500 }
    );
  }
}
