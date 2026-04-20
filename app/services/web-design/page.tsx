import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design North Cyprus | High-Converting Business Websites | Zubair Khan",
  description:
    "Professional, fast, SEO-optimised websites for North Cyprus businesses. Built to convert UK expats, tourists, and local customers. Restaurants, real estate & hotels.",
  alternates: { canonical: "https://mzubairkhan.com/services/web-design" },
};

export default function WebDesignPage() {
  return (
    <ServicePageLayout
      icon={<Globe className="w-full h-full" />}
      badge="Web Design"
      title="Professional Websites for"
      titleHighlight="North Cyprus Businesses"
      description="Fast, mobile-first, SEO-optimised websites built to convert UK expats, international tourists, and local customers into paying clients. No generic templates — every site is designed for the North Cyprus market."
      features={[
        "Custom design (no generic templates)",
        "Mobile-first responsive development",
        "SEO-optimised architecture from day one",
        "English & Turkish content support",
        "Fast load speeds (Core Web Vitals optimised)",
        "Lead capture forms & WhatsApp integration",
        "Google Analytics 4 & Tag Manager setup",
        "SSL certificate & security setup",
        "Online booking/reservation integration",
        "Property listing pages (real estate)",
        "Restaurant menu & reservation system",
        "Hotel room & availability display",
      ]}
      process={[
        {
          step: "01",
          title: "Strategy & Wireframe",
          desc: "Understand your business goals, target audience (UK expats? tourists? local?), and map the ideal user journey.",
        },
        {
          step: "02",
          title: "Design & Review",
          desc: "Design mobile-first mockups in Figma. You review and approve before a single line of code is written.",
        },
        {
          step: "03",
          title: "Build & Test",
          desc: "Development with SEO baked in from the start. Full testing across all devices — desktop, mobile, tablet.",
        },
        {
          step: "04",
          title: "Launch & Handover",
          desc: "Go live, submit to Google Search Console, set up analytics, and hand you full control with training.",
        },
      ]}
      faqs={[
        {
          q: "How long does it take to build a website for a North Cyprus business?",
          a: "A typical business website takes 2–4 weeks from first call to launch. More complex sites with booking systems or property listings may take 4–6 weeks.",
        },
        {
          q: "Will my website rank on Google?",
          a: "Yes — SEO is built into the website from the ground up, not added as an afterthought. Every page has optimised meta tags, proper heading structure, schema markup, and fast load speeds.",
        },
        {
          q: "Can you build a bilingual English and Turkish website?",
          a: "Absolutely. Many North Cyprus businesses need both languages. I build properly structured bilingual websites that can rank for both English and Turkish search terms.",
        },
        {
          q: "Do you offer ongoing support after launch?",
          a: "Yes — I offer optional ongoing maintenance and hosting support. I also provide training so you can update your own content independently.",
        },
      ]}
      relatedServices={[
        { label: "Local SEO", href: "/services/local-seo" },
        { label: "SEO Audit", href: "/services/seo-audit" },
        { label: "Google Ads", href: "/services/google-ads" },
        { label: "Google Business Profile", href: "/services/google-business-profile" },
      ]}
    />
  );
}
