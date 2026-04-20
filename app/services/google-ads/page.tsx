import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Ads Management North Cyprus | PPC Campaigns | Zubair Khan",
  description:
    "Expert Google Ads management for North Cyprus businesses. Targeted PPC campaigns reaching UK buyers, international tourists & local customers. No wasted budget.",
  alternates: { canonical: "https://mzubairkhan.com/services/google-ads" },
};

export default function GoogleAdsPage() {
  return (
    <ServicePageLayout
      icon={<Megaphone className="w-full h-full" />}
      badge="Google Ads"
      title="Google Ads That Deliver"
      titleHighlight="Qualified Leads in North Cyprus"
      description="Strategic Google Ads campaigns reaching UK property buyers, international tourists, and local customers at exactly the right moment. Built specifically for the North Cyprus market — no wasted budget on the wrong audience."
      features={[
        "Full campaign setup & structure",
        "UK-targeted search campaigns",
        "North Cyprus location targeting",
        "Property buyer intent keywords",
        "Seasonal campaign management",
        "Ad copy writing & A/B testing",
        "Landing page recommendations",
        "Conversion tracking setup",
        "Google Analytics 4 integration",
        "Remarketing campaigns (RLSA)",
        "Monthly performance reports",
        "Budget optimisation & bid management",
      ]}
      process={[
        {
          step: "01",
          title: "Market & Keyword Research",
          desc: "Research the exact search terms UK buyers and local customers use when looking for your business in North Cyprus.",
        },
        {
          step: "02",
          title: "Campaign Build",
          desc: "Build tightly structured campaigns with the right keywords, match types, negative keywords, and ad copy.",
        },
        {
          step: "03",
          title: "Launch & Monitor",
          desc: "Launch campaigns with careful bid management. Daily monitoring in the first 2 weeks to catch any issues early.",
        },
        {
          step: "04",
          title: "Optimise & Report",
          desc: "Monthly optimisation cycle — pausing poor performers, scaling winners, and delivering clear monthly reports.",
        },
      ]}
      faqs={[
        {
          q: "What budget do I need for Google Ads in North Cyprus?",
          a: "A minimum of £200–£300/month in ad spend is recommended to get meaningful data. Most clients see best results from £500–£1,000/month. My management fee is separate.",
        },
        {
          q: "Can Google Ads reach UK buyers interested in North Cyprus property?",
          a: "Yes — this is one of my specialist campaigns. I target UK users searching for 'property for sale North Cyprus', 'apartments TRNC', 'invest North Cyprus' etc. from UK locations.",
        },
        {
          q: "How quickly will I see results from Google Ads?",
          a: "Google Ads can generate leads within the first few days of going live. However, the first 2–4 weeks are a learning phase where I optimise bidding and keywords for maximum efficiency.",
        },
        {
          q: "Do you manage seasonal campaigns for hotels and restaurants?",
          a: "Yes — seasonal campaign management is a key part of my service for hospitality businesses. I ramp up budgets before peak season and adjust targeting for off-season campaigns.",
        },
      ]}
      relatedServices={[
        { label: "Meta Ads", href: "/services/meta-ads" },
        { label: "Local SEO", href: "/services/local-seo" },
        { label: "Web Design", href: "/services/web-design" },
        { label: "SEO Audit", href: "/services/seo-audit" },
      ]}
    />
  );
}
