import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO Services North Cyprus | Rank #1 on Google Maps | Zubair Khan",
  description:
    "Dominate Google Maps and local search results in North Cyprus. Bilingual English & Turkish Local SEO for restaurants, real estate agencies, and hotels in Girne and across TRNC.",
  alternates: { canonical: "https://mzubairkhan.com/services/local-seo" },
};

export default function LocalSEOPage() {
  return (
    <ServicePageLayout
      icon={<Search className="w-full h-full" />}
      badge="Local SEO"
      title="Local SEO for"
      titleHighlight="North Cyprus Businesses"
      description="Bilingual English & Turkish Local SEO that puts your restaurant, real estate agency, or hotel at the top of Google Maps — reaching UK expats, international tourists, and local customers across TRNC."
      features={[
        "Full bilingual keyword research (English & Turkish)",
        "Google Business Profile setup & optimisation",
        "North Cyprus local citation building (80+ directories)",
        "Review generation & management strategy",
        "On-page SEO for your website",
        "Local schema markup implementation",
        "Competitor gap analysis",
        "Monthly ranking reports",
        "UK expat search behaviour analysis",
        "Seasonal keyword strategy (peak/off-season)",
        "Google Maps photo & post optimisation",
        "NAP consistency audit across all platforms",
      ]}
      process={[
        {
          step: "01",
          title: "Keyword Research",
          desc: "Bilingual keyword research covering English and Turkish search terms in your North Cyprus city and industry.",
        },
        {
          step: "02",
          title: "On-Page & GBP Optimisation",
          desc: "Optimise your website pages and Google Business Profile with the right keywords, categories, and content.",
        },
        {
          step: "03",
          title: "Citation Building",
          desc: "Build consistent local citations across 80+ North Cyprus and TRNC-relevant directories — English and Turkish.",
        },
        {
          step: "04",
          title: "Monitor & Improve",
          desc: "Monthly tracking of keyword rankings, Google Maps position, and calls. Continuous improvement based on data.",
        },
      ]}
      faqs={[
        {
          q: "How long does Local SEO take to show results in North Cyprus?",
          a: "Most clients see measurable Google Maps movement within 4–8 weeks. Full first-page dominance typically takes 3–6 months depending on competition in your city and industry.",
        },
        {
          q: "Do you do Local SEO in both English and Turkish?",
          a: "Yes — this is one of my core specialisms. I target English keywords (for UK expats and tourists) and Turkish keywords (for local TRNC customers) simultaneously, doubling your search reach.",
        },
        {
          q: "Can you help my Kyrenia harbour restaurant rank on Google?",
          a: "Absolutely. Kyrenia harbour is one of the most competitive local SEO markets in North Cyprus. I've successfully ranked restaurants in this area by combining Google Business Profile optimisation, review strategy, and targeted local content.",
        },
        {
          q: "Do you cover all North Cyprus cities?",
          a: "Yes — I work with businesses in Girne, Lefkoşa, Gazimağusa, İskele, Lapta, Güzelyurt, and surrounding areas across TRNC.",
        },
      ]}
      relatedServices={[
        { label: "Google Business Profile", href: "/services/google-business-profile" },
        { label: "SEO Audit", href: "/services/seo-audit" },
        { label: "Web Design", href: "/services/web-design" },
        { label: "Google Ads", href: "/services/google-ads" },
      ]}
    />
  );
}
