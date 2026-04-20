import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Business Profile Optimisation North Cyprus | Zubair Khan",
  description:
    "Optimise your Google Business Profile to dominate local search in North Cyprus. More calls, more visits, more customers from Google Maps. Bilingual (EN/TR) optimisation.",
  alternates: { canonical: "https://mzubairkhan.com/services/google-business-profile" },
};

export default function GBPPage() {
  return (
    <ServicePageLayout
      icon={<MapPin className="w-full h-full" />}
      badge="Google Business Profile"
      title="Dominate Google Maps"
      titleHighlight="Across North Cyprus"
      description="Your Google Business Profile is the single most important piece of your local digital presence in North Cyprus. I optimise it to maximum effectiveness — so you appear first on Google Maps when UK expats, tourists, and local customers search for your business."
      features={[
        "Complete profile setup (if not done)",
        "Business category optimisation",
        "Bilingual business description (EN & TR)",
        "Service areas & hours configuration",
        "Photo & video strategy (20+ images)",
        "Q&A section optimisation",
        "Google Posts (weekly updates)",
        "Review response strategy",
        "Review generation system",
        "Attributes & amenities setup",
        "Product/service listings",
        "Monthly GBP performance report",
      ]}
      process={[
        {
          step: "01",
          title: "Profile Audit",
          desc: "Full audit of your existing Google Business Profile — identifying every gap, missing element, and optimisation opportunity.",
        },
        {
          step: "02",
          title: "Optimisation Sprint",
          desc: "Complete the profile with bilingual content, optimised categories, photos, services, and all attributes.",
        },
        {
          step: "03",
          title: "Review System",
          desc: "Set up a review generation system to consistently earn 5-star reviews — the #1 Google Maps ranking factor.",
        },
        {
          step: "04",
          title: "Ongoing Management",
          desc: "Weekly Google Posts, review responses, Q&A monitoring, and monthly performance tracking.",
        },
      ]}
      faqs={[
        {
          q: "How much difference does Google Business Profile make to local search rankings?",
          a: "It's the single most important factor for Google Maps rankings. A fully optimised GBP can move you from page 2 to the top 3 results within weeks — especially when combined with a strong review strategy.",
        },
        {
          q: "Do you set up the profile in English and Turkish?",
          a: "Yes — your business description, services, and posts are written in both English and Turkish to capture both expat/tourist searches and local Turkish Cypriot customers.",
        },
        {
          q: "How do you generate more Google reviews?",
          a: "I create a systematic review generation process — from QR codes at your premises to follow-up WhatsApp messages to satisfied customers. This consistently grows your review count and star rating.",
        },
        {
          q: "My business is already on Google Maps but not ranking well — can you help?",
          a: "Absolutely — most businesses in North Cyprus are on Google Maps but badly optimised. The GBP optimisation service transforms an incomplete listing into a powerful lead-generation tool.",
        },
      ]}
      relatedServices={[
        { label: "Local SEO", href: "/services/local-seo" },
        { label: "SEO Audit", href: "/services/seo-audit" },
        { label: "Web Design", href: "/services/web-design" },
        { label: "Meta Ads", href: "/services/meta-ads" },
      ]}
    />
  );
}
