import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = process.env.CONTACT_TO_EMAIL || "akashagrahari460@gmail.com";

function createHtmlEmailTemplate({
  name,
  email,
  phone,
  projectType,
  budget,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  message: string;
}) {
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry - Akash Agrahari</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050507; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e4e4e7;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #050507; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #0d0d12; border: 1px solid #1f1f28; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
          
          <!-- Header Banner -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; background: linear-gradient(180deg, #16161e 0%, #0d0d12 100%); border-bottom: 1px solid #1f1f28;">
              <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <!-- Badge -->
                    <div style="display: inline-block; background-color: rgba(52, 211, 153, 0.12); border: 1px solid rgba(52, 211, 153, 0.3); border-radius: 20px; padding: 4px 12px; margin-bottom: 12px;">
                      <span style="color: #34d399; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">
                        ⚡ New Project Inquiry
                      </span>
                    </div>
                    <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">
                      Inquiry from <span style="color: #34d399;">${name}</span>
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #a1a1aa;">
                      Received on ${timestamp} (IST)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Client Details Grid -->
          <tr>
            <td style="padding: 28px 32px 12px 32px;">
              <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #121218; border: 1px solid #22222d; border-radius: 12px; padding: 18px 20px;">
                <tr>
                  <td width="50%" style="padding: 6px 10px; vertical-align: top;">
                    <div style="font-size: 11px; text-transform: uppercase; color: #71717a; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px;">Client Name</div>
                    <div style="font-size: 14px; font-weight: 600; color: #ffffff;">${name}</div>
                  </td>
                  <td width="50%" style="padding: 6px 10px; vertical-align: top;">
                    <div style="font-size: 11px; text-transform: uppercase; color: #71717a; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px;">Client Email</div>
                    <div>
                      <a href="mailto:${email}" style="font-size: 14px; font-weight: 600; color: #34d399; text-decoration: none;">${email}</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 12px 10px 6px 10px; vertical-align: top; border-top: 1px solid #1a1a24;">
                    <div style="font-size: 11px; text-transform: uppercase; color: #71717a; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px;">Phone Number</div>
                    <div style="font-size: 14px; font-weight: 600; color: #ffffff;">
                      ${phone ? `<a href="tel:${phone}" style="color: #34d399; text-decoration: none;">${phone}</a>` : '<span style="color: #71717a;">Not provided</span>'}
                    </div>
                  </td>
                  <td width="50%" style="padding: 12px 10px 6px 10px; vertical-align: top; border-top: 1px solid #1a1a24;">
                    <div style="font-size: 11px; text-transform: uppercase; color: #71717a; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px;">Budget Range</div>
                    <div style="font-size: 14px; font-weight: 600; color: #34d399;">${budget || "Not Specified"}</div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 12px 10px 6px 10px; vertical-align: top; border-top: 1px solid #1a1a24;">
                    <div style="font-size: 11px; text-transform: uppercase; color: #71717a; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px;">Project Scope</div>
                    <div style="font-size: 14px; font-weight: 600; color: #ffffff;">${projectType || "General Web Development"}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 12px 32px 28px 32px;">
              <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #a1a1aa; margin-bottom: 8px;">
                Message Content
              </div>
              <div style="background-color: #121218; border: 1px solid #22222d; border-radius: 12px; padding: 20px; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-wrap;">
${message}
              </div>
            </td>
          </tr>

          <!-- Action Buttons -->
          <tr>
            <td align="center" style="padding: 0 32px 32px 32px;">
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="border-radius: 9999px; background-color: #34d399; box-shadow: 0 4px 14px rgba(52, 211, 153, 0.4); margin-right: 10px;">
                    <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(projectType || 'Project Inquiry')}%20-%20Akash%20Agrahari" target="_blank" style="display: inline-block; padding: 14px 28px; font-size: 14px; font-weight: 700; color: #050507; text-decoration: none; border-radius: 9999px;">
                      ✉️ Reply to ${name} (${email})
                    </a>
                  </td>
                  ${phone ? `
                  <td style="padding-left: 12px;">
                    <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" target="_blank" style="display: inline-block; padding: 14px 20px; font-size: 14px; font-weight: 600; color: #ffffff; background-color: #1f1f28; border: 1px solid #2e2e3a; text-decoration: none; border-radius: 9999px;">
                      💬 WhatsApp
                    </a>
                  </td>
                  ` : ''}
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #08080c; border-top: 1px solid #1a1a24; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #71717a;">
                Delivered automatically from your portfolio at <a href="https://akashagrahari.vercel.app" style="color: #a1a1aa; text-decoration: underline;">akashagrahari.vercel.app</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, budget, message, honeypot } = body;

    // Honeypot spam trap
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message sent" });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const htmlContent = createHtmlEmailTemplate({
      name,
      email,
      phone: phone || "",
      projectType: projectType || "Not specified",
      budget: budget || "Not specified",
      message,
    });

    const subject = `🚀 New Project Inquiry from ${name} (${projectType || "General"})`;

    // 1. Resend SDK Strategy
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio Inquiries <onboarding@resend.dev>",
          to: [RECIPIENT_EMAIL],
          replyTo: email,
          subject,
          html: htmlContent,
        });

        if (error) {
          console.error("Resend delivery error:", error);
        } else if (data?.id) {
          console.log(`✅ Resend email delivered successfully with ID: ${data.id}`);
          return NextResponse.json({
            success: true,
            message: "Thank you! Your message has been sent to akashagrahari460@gmail.com.",
          });
        }
      } catch (err) {
        console.error("Resend SDK exception:", err);
      }
    }

    // 2. Nodemailer (SMTP) Strategy
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${process.env.SMTP_USER}>`,
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject,
          html: htmlContent,
        });

        return NextResponse.json({
          success: true,
          message: "Thank you! Your message has been sent to akashagrahari460@gmail.com.",
        });
      } catch (err) {
        console.error("SMTP error:", err);
      }
    }

    // 3. Fallback Logging
    console.log("==================================================");
    console.log("📬 NEW INQUIRY RECEIVED FOR:", RECIPIENT_EMAIL);
    console.log("Client Name:", name);
    console.log("Client Email:", email);
    console.log("Client Phone:", phone || "N/A");
    console.log("Project Type:", projectType);
    console.log("Budget:", budget);
    console.log("Message:", message);
    console.log("==================================================");

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please reach out directly at akashagrahari460@gmail.com" },
      { status: 500 }
    );
  }
}
