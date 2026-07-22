import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schema";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    const businessTypeMap: Record<string, string> = {
      restaurant: "Restaurant / Cafe",
      "real-estate": "Real Estate Agency",
      hotel: "Hotel / Tourism",
      other: "Other",
    };

    const cityMap: Record<string, string> = {
      girne: "Girne (Kyrenia)",
      lefkosa: "Lefkoşa (Nicosia)",
      gazimagusa: "Gazimağusa (Famagusta)",
      iskele: "İskele",
      lapta: "Lapta",
      guzelyurt: "Güzelyurt",
      other: "Other",
    };

    const serviceMap: Record<string, string> = {
      "local-seo": "Local SEO",
      "google-ads": "Google Ads",
      "meta-ads": "Meta Ads",
      "web-design": "Web Design",
      "seo-audit": "SEO Audit",
      "full-package": "Full Package",
    };

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #A855F7, #7C3AED); padding: 24px; border-radius: 8px; text-align: center; margin-bottom: 24px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">🚀 New Lead from mzubairkhan.com</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">North Cyprus Digital Marketing</p>
        </div>

        <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
          <h2 style="color: #1a1a1a; font-size: 16px; margin-bottom: 16px;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; font-size: 14px; width: 40%;">Name:</td><td style="padding: 8px 0; font-weight: bold; color: #1a1a1a; font-size: 14px;">${data.fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Email:</td><td style="padding: 8px 0; font-weight: bold; color: #A855F7; font-size: 14px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">WhatsApp:</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${data.whatsapp || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Business Type:</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${businessTypeMap[data.businessType]}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">City:</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${cityMap[data.city]}</td></tr>
            <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Service Interest:</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${serviceMap[data.service]}</td></tr>
          </table>
        </div>

        <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
          <h2 style="color: #1a1a1a; font-size: 16px; margin-bottom: 12px;">Message</h2>
          <p style="color: #444; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>

        <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #22c55e;">
          <p style="margin: 0; font-size: 14px; color: #166534;">
            <strong>Quick reply:</strong>
            <a href="https://wa.me/${data.whatsapp?.replace(/[^0-9]/g, "") || "905391113577"}" style="color: #16a34a;">WhatsApp ${data.fullName}</a> or
            <a href="mailto:${data.email}" style="color: #16a34a;">Reply by email</a>
          </p>
        </div>

        <p style="text-align: center; font-size: 12px; color: #999; margin-top: 16px;">
          Submitted from mzubairkhan.com · ${new Date().toLocaleString("en-GB", { timeZone: "Europe/Nicosia" })} (Cyprus Time)
        </p>
      </div>
    `;

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: process.env.RESEND_FROM || "mzubairkhan.com <onboarding@resend.dev>",
        to: (process.env.CONTACT_EMAIL || "umairlanday@gmail.com")
          .split(",")
          .map((e) => e.trim())
          .filter(Boolean),
        subject: `New Lead: ${data.fullName} — ${businessTypeMap[data.businessType]} in ${cityMap[data.city]}`,
        html: emailHtml,
        replyTo: data.email,
      });
    }

    // Backup to leads.json (best-effort — Vercel's filesystem is read-only in production)
    try {
      const leadsPath = path.join(process.cwd(), "leads.json");
      let leads: object[] = [];
      try {
        const existing = fs.readFileSync(leadsPath, "utf8");
        leads = JSON.parse(existing);
      } catch {
        leads = [];
      }
      leads.push({
        ...data,
        submittedAt: new Date().toISOString(),
        ip: req.headers.get("x-forwarded-for") || "unknown",
      });
      fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2));
    } catch (err) {
      console.error("leads.json backup skipped:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
