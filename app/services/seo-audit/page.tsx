import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { FileSearch } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Audit North Cyprus | Find & Fix What's Hurting Your Rankings | Zubair Khan",
  description:
    "Comprehensive SEO audit for North Cyprus businesses. Discover why you're not ranking on Google and get a clear action plan. English & Turkish keyword analysis included.",
  alternates: { canonical: "https://mzubairkhan.com/services/seo-audit" },
};

export default function SEOAuditPage() {
  return (
    <ServicePageLayout
      icon={<FileSearch className="w-full h-full" />}
      badge="SEO Audit"
      title="SEO Audit for"
      titleHighlight="North Cyprus Businesses"
      description="A comprehensive audit of everything affecting your Google rankings in North Cyprus. Technical issues, content gaps, local citation problems, bilingual keyword opportunities — all delivered in a clear, prioritised action plan."
      features={[
        "Full technical SEO analysis",
        "Page speed & Core Web Vitals review",
        "Mobile usability audit",
        "Bilingual keyword gap analysis (EN & TR)",
        "Google Business Profile audit",
        "Local citation consistency check",
        "Backlink profile review",
        "On-page SEO scoring (all pages)",
        "Competitor ranking analysis",
        "UK expat search opportunity audit",
        "Schema markup review",
        "Prioritised 90-day action plan",
      ]}
      process={[
        {
          step: "01",
          title: "Data Collection",
          desc: "Crawl your website, pull Google Search Console data, check your GBP, and analyse competitor rankings in your North Cyprus market.",
        },
        {
          step: "02",
          title: "Issue Identification",
          desc: "Systematically identify all technical, on-page, and local SEO issues affecting your Google visibility.",
        },
        {
          step: "03",
          title: "Opportunity Analysis",
          desc: "Find the highest-value keyword and content opportunities your competitors aren't capturing — especially bilingual ones.",
        },
        {
          step: "04",
          title: "Report & Roadmap",
          desc: "Deliver a comprehensive written report with every issue prioritised by impact — and a 90-day action plan to fix them.",
        },
      ]}
      faqs={[
        {
          q: "What's included in the SEO audit report?",
          a: "A full written report covering: technical issues, content gaps, local SEO problems, bilingual keyword opportunities, competitor analysis, Google Business Profile issues, and a prioritised 90-day action plan. Typically 40–60 pages.",
        },
        {
          q: "How long does the audit take?",
          a: "Most audits are completed within 5–7 business days. You'll receive the full report via email with a video walkthrough call included.",
        },
        {
          q: "Do I need to implement the recommendations myself?",
          a: "Not at all. After the audit, you can choose to implement the recommendations yourself (with my guidance), or hire me to implement them on an ongoing basis.",
        },
        {
          q: "Is the audit a one-time cost?",
          a: "Yes — the SEO audit is a fixed one-time fee. There's no obligation to continue working together, though many clients do.",
        },
      ]}
      relatedServices={[
        { label: "Local SEO", href: "/services/local-seo" },
        { label: "Google Business Profile", href: "/services/google-business-profile" },
        { label: "Web Design", href: "/services/web-design" },
        { label: "Google Ads", href: "/services/google-ads" },
      ]}
    />
  );
}
