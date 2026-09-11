import nodemailer from "nodemailer";
import path from "node:path";
import fs from "node:fs";

export interface EmailField {
  label: string;
  value: string | number | boolean | string[] | undefined | null;
}

export interface SendFormEmailOptions {
  subject: string;
  title: string;
  replyTo?: string;
  fields: EmailField[];
}

/**
 * Creates and returns a Nodemailer transporter configured for Hostinger SMTP
 * with serverless-friendly connection settings and timeouts.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER || "info@shopifymanagers.com";
  const pass = process.env.SMTP_PASSWORD || process.env.EMAIL_PASS;
  const isSecure = port === 465;

  if (!pass) {
    console.warn(
      "[mailer] Warning: SMTP_PASSWORD is not set in environment variables. Please configure SMTP_PASSWORD in your environment dashboard."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: isSecure, // true for 465, false for 587
    auth: {
      user,
      pass,
    },
    // Serverless resilience and timeout safeguards
    connectionTimeout: 10000, // 10s connection timeout
    greetingTimeout: 10000,   // 10s greeting timeout
    socketTimeout: 15000,     // 15s socket timeout
  });
}

/**
 * Formats a field value for display in plain text and HTML.
 */
function formatFieldValue(value: EmailField["value"]): string {
  if (value === undefined || value === null || value === "") {
    return "—";
  }
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(", ") : "—";
  }
  return String(value);
}

/**
 * Reusable function to send form submission emails via Hostinger SMTP.
 */
export async function sendFormEmail(options: SendFormEmailOptions) {
  const { subject, title, replyTo, fields } = options;

  const toEmail = process.env.EMAIL_TO || process.env.SMTP_USER || "info@shopifymanagers.com";
  const fromEmail = process.env.SMTP_USER || "info@shopifymanagers.com";

  const transporter = createTransporter();

  // Check for the official white logo in public folder
  const logoPath = path.join(process.cwd(), "public", "shopify-logo", "shopifylogowhite.webp");
  const hasLogo = fs.existsSync(logoPath);

  // Plain-text representation
  const plainTextLines = [
    `=== ${title} ===`,
    `Received on: ${new Date().toLocaleString("en-US", { timeZone: "UTC" })} UTC`,
    "",
    ...fields.map((f) => `${f.label}: ${formatFieldValue(f.value)}`),
    "",
    "---",
    "Sent via Shopify Managers website",
  ];
  const textContent = plainTextLines.join("\n");

  // HTML representation
  const tableRowsHtml = fields
    .map(
      (f, idx) => `
      <tr style="background-color: ${idx % 2 === 0 ? "#ffffff" : "#f9fafb"};">
        <td style="padding: 12px 16px; font-weight: 600; color: #1f2937; border-bottom: 1px solid #e5e7eb; width: 35%; vertical-align: top; font-size: 14px;">
          ${escapeHtml(f.label)}
        </td>
        <td style="padding: 12px 16px; color: #374151; border-bottom: 1px solid #e5e7eb; font-size: 14px; line-height: 1.5; vertical-align: top;">
          ${escapeHtml(formatFieldValue(f.value)).replace(/\n/g, "<br/>")}
        </td>
      </tr>
    `
    )
    .join("");

  const logoHeaderHtml = hasLogo
    ? `
      <div style="margin-bottom: 8px;">
        <img src="cid:official-site-logo" alt="Shopify Managers" style="height: 52px; width: auto; max-width: 220px; display: inline-block; border: 0;" />
      </div>
    `
    : `
      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
        Shopify Managers
      </h1>
    `;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 24px; color: #1f2937;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border: 1px solid #e5e7eb;">
          <!-- Header with Official Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #0A2515 0%, #134228 100%); padding: 28px 24px; text-align: center;">
              ${logoHeaderHtml}
              <p style="color: #59DFAB; margin: 6px 0 0 0; font-size: 14px; font-weight: 600;">
                ${escapeHtml(title)}
              </p>
            </td>
          </tr>

          <!-- Content Info -->
          <tr>
            <td style="padding: 24px 24px 12px 24px;">
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #4b5563;">
                You received a new submission from the Shopify Managers website:
              </p>
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                ${tableRowsHtml}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 24px; background-color: #fafafa; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
              <p style="margin: 0 0 4px 0;">
                Received on ${new Date().toUTCString()}
              </p>
              <p style="margin: 0;">
                Shopify Managers · Premier Commerce Agency
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const attachments = [];
  if (hasLogo) {
    attachments.push({
      filename: "shopifylogowhite.webp",
      path: logoPath,
      cid: "official-site-logo",
    });
  }

  const mailOptions = {
    from: `"Shopify Managers" <${fromEmail}>`,
    to: toEmail,
    replyTo: replyTo || fromEmail,
    subject: `[Shopify Managers] ${subject}`,
    text: textContent,
    html: htmlContent,
    attachments: attachments.length > 0 ? attachments : undefined,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
