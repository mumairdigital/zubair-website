import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing in Gazimağusa (Famagusta), North Cyprus | Zubair Khan",
  description:
    "Digital marketing for businesses in Gazimağusa, North Cyprus. Targeting EMU's 30,000+ students, beach tourists & historic city visitors. Local SEO & social media ads.",
  alternates: { canonical: "https://mzubairkhan.com/locations/gazimagusa" },
};

export default function GazimagusaPage() {
  return (
    <LocationPage
      city="Gazimağusa"
      citySlug="gazimagusa"
      heroHeadline="Digital Marketing for Businesses in Gazimağusa (Famagusta), North Cyprus"
      heroSub="Gazimağusa is home to Eastern Mediterranean University — 30,000+ students — plus some of North Cyprus's most beautiful beaches and the stunning historic walled city. I help Gazimağusa businesses reach students, beach tourists, and history visitors with targeted digital marketing."
      whyMatters="Gazimağusa's digital marketing opportunity is unique in North Cyprus. You have a built-in audience of 30,000+ university students who are highly active on Instagram, TikTok, and Google — plus summer beach tourists, history-seeking travellers drawn to the old walled city, and a growing young professional population who've stayed after graduating from EMU."
      marketInsight="The university market creates year-round demand with distinct seasonal peaks: student intake in September/October and February/March drives massive searches for accommodation, cafes, and services. Summer beach season attracts international tourists. The walled city and Othello Tower draw cultural tourists year-round. Digital marketing here needs to be highly segmented — the messaging for students is very different from the messaging for beach resort visitors."
      uniqueOpportunities={[
        "Eastern Mediterranean University: 30,000+ students creating consistent year-round demand for cafes, restaurants, accommodation, and services",
        "Student intake season (Sep & Feb): Peak marketing moment for accommodation, food delivery, and campus-area services",
        "Beach tourism: Salamis Bay and surrounding beaches attract summer visitors searching for activities and dining",
        "Historic walled city: Cultural tourism market that searches for 'things to do Famagusta', 'restaurants old city'",
        "Young demographic: Highest social media engagement rate in North Cyprus — ideal for Instagram and TikTok marketing",
        "Student accommodation market: Significant digital marketing opportunity for property managers targeting incoming students",
      ]}
      caseStudyRef="A cafe near EMU campus that I helped implement a Local SEO and Instagram strategy saw a 190% increase in foot traffic from students within one semester — by targeting 'cafe near EMU' and 'study cafe Gazimağusa' search terms while building an engaging Instagram presence aimed at university students."
      services={[
        {
          title: "Student Market SEO",
          desc: "Local SEO targeting student-specific search terms around EMU and Gazimağusa city centre — high search volume, low competition.",
        },
        {
          title: "Social Media Ads for Young Audience",
          desc: "Instagram and Facebook campaigns targeting the 18–25 student demographic in Gazimağusa. High engagement, affordable ad costs.",
        },
        {
          title: "Beach Tourism Google Ads",
          desc: "Summer campaigns targeting international tourists searching for restaurants, activities, and accommodation near Salamis Bay and Famagusta beaches.",
        },
        {
          title: "Web Design for Gazimağusa",
          desc: "Modern, mobile-first websites for cafes, restaurants, accommodation, and student services in Gazimağusa.",
        },
        {
          title: "Google Business Profile — Gazimağusa",
          desc: "Full GBP optimisation targeting both student searches and tourist searches in Gazimağusa's two distinct market segments.",
        },
        {
          title: "SEO Audit for Famagusta Businesses",
          desc: "Identify and fix the SEO issues preventing your Gazimağusa business from ranking for student and tourist searches.",
        },
      ]}
      schema={generateLocalBusinessSchema("Gazimağusa", "gazimagusa")}
    />
  );
}
