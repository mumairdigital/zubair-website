import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing in Lefkoşa (Nicosia), North Cyprus | Zubair Khan",
  description:
    "Digital marketing services for businesses in Lefkoşa (North Nicosia), North Cyprus. Local SEO, Google Ads & Web Design for the capital city's corporate & retail sector.",
  alternates: { canonical: "https://mzubairkhan.com/locations/lefkosa" },
};

export default function LefkosaPage() {
  return (
    <LocationPage
      city="Lefkoşa"
      citySlug="lefkosa"
      heroHeadline="Digital Marketing for Businesses in Lefkoşa (North Nicosia), North Cyprus"
      heroSub="Lefkoşa is North Cyprus's capital city — the business, government, and commercial hub of TRNC. I help Lefkoşa businesses compete online, reach professional clients, and grow their digital presence across the capital's diverse market."
      whyMatters="Lefkoşa has the largest local population in North Cyprus and the most diverse business community — from government contractors and professional services to restaurants, retail, and hospitality. Digital marketing here means competing for a large, sophisticated local audience that uses Google for everything from finding a good accountant to booking a restaurant for a business dinner."
      marketInsight="The Lefkoşa market is less tourist-dependent than Girne, which means digital marketing here focuses more on the local Turkish Cypriot population, cross-border trade relationships, and the growing expat professional community. B2B marketing, professional service directories, and local reputation management are particularly effective in the capital. The proximity to the buffer zone also creates unique opportunities for businesses serving both North and South Nicosia customers."
      uniqueOpportunities={[
        "Largest local population in North Cyprus — significant domestic search market for local services",
        "Business district concentration — B2B marketing and professional services have high search volume",
        "Cross-border trade: Nicosia is a hub for businesses with connections to both sides of the island",
        "Government and NGO sector — high-value professional services market",
        "Restaurant and hospitality sector serving business lunches and corporate events",
        "Less tourist-dependent — year-round consistent demand, unlike coastal resort areas",
      ]}
      caseStudyRef="A Lefkoşa boutique hotel I worked with saw a 340% increase in Google Business Profile views and a 185% increase in direct calls within 2 months of a complete bilingual profile optimisation — proving that even in a less tourist-focused market, GBP optimisation delivers rapid, measurable results."
      services={[
        {
          title: "Local SEO for Lefkoşa",
          desc: "Bilingual EN & TR Local SEO targeting Lefkoşa-specific search terms for restaurants, professional services, and retail businesses in the capital.",
        },
        {
          title: "B2B Google Ads — Capital City",
          desc: "Google Ads campaigns reaching business owners, professionals, and corporate clients in Lefkoşa and surrounding areas.",
        },
        {
          title: "Meta Ads for Lefkoşa Businesses",
          desc: "Facebook & Instagram campaigns targeting the large, diverse Lefkoşa population — particularly effective for restaurants, cafes, and retail.",
        },
        {
          title: "Professional Service Web Design",
          desc: "Clean, authoritative websites for Lefkoşa professional services firms, restaurants, and retail businesses. Bilingual English & Turkish.",
        },
        {
          title: "Google Business Profile — Lefkoşa",
          desc: "GBP optimisation for Lefkoşa businesses targeting both the local Turkish Cypriot market and English-speaking professionals.",
        },
        {
          title: "SEO Audit for Capital Businesses",
          desc: "Full SEO audit identifying why Lefkoşa businesses aren't ranking for local searches — with a prioritised fix plan.",
        },
      ]}
      schema={generateLocalBusinessSchema("Lefkoşa", "lefkosa")}
    />
  );
}
