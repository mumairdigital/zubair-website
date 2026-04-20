import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing in Lapta, North Cyprus | Zubair Khan",
  description:
    "Digital marketing for Lapta businesses. Targeting the established British expat community, beachfront villas & retirement market with English-first SEO & Google Ads.",
  alternates: { canonical: "https://mzubairkhan.com/locations/lapta" },
};

export default function LaptaPage() {
  return (
    <LocationPage
      city="Lapta"
      citySlug="lapta"
      heroHeadline="Digital Marketing for Businesses in Lapta, North Cyprus"
      heroSub="Lapta (Lapithos) is home to one of North Cyprus's most established British expat communities — a concentrated, high-value, English-speaking audience for local businesses. I help Lapta restaurants, services, and real estate agencies reach British residents and the growing retirement/second-home market."
      whyMatters="Lapta is unique in North Cyprus because it has the highest concentration of British expat residents relative to population — creating a self-contained, English-speaking local market that prefers businesses which communicate in English, understand British culture, and are findable on Google. For businesses in Lapta, digital marketing that specifically targets this audience delivers exceptional ROI."
      marketInsight="The Lapta digital market is primarily English-first. British expats use Google just as they would in the UK — searching for 'restaurants near me', 'plumber Lapta', 'villa for sale Lapithos'. Turkish-language search is secondary here. The retirement and second-home market also brings in UK-based buyers researching Lapta property from Britain. The beachfront villa market commands premium prices and attracts sophisticated buyers who research thoroughly online."
      uniqueOpportunities={[
        "Established British expat community: The most concentrated UK resident population in North Cyprus — high-value, loyal local customers",
        "English-first market: Businesses that market in English see dramatically higher engagement with the Lapta audience",
        "Retirement and second-home market: UK buyers looking for beachfront villas and retirement properties in Lapithos",
        "Year-round residential demand: Unlike resort areas, Lapta has consistent year-round demand from residents rather than seasonal tourists",
        "Low digital competition: Lapta businesses are generally behind on digital marketing — first-mover advantage is significant",
        "UK visitor traffic: British expat residents bring family and friends who search for restaurants and services locally",
      ]}
      caseStudyRef="A restaurant in Lapta targeting the British expat community with Meta Ads specifically designed for UK-background audiences saw a 190% increase in UK expat diners and £8,200 additional monthly revenue within 3 months — demonstrating the exceptional ROI of targeting Lapta's concentrated British community."
      services={[
        {
          title: "English-First Local SEO for Lapta",
          desc: "Local SEO targeting English search terms used by British expats in Lapta — including 'near me' searches, English-language service terms, and UK-style business searches.",
        },
        {
          title: "UK Expat Meta Ads — Lapta",
          desc: "Facebook and Instagram campaigns targeting British expats in and around Lapta. Proven effective for restaurants, services, and lifestyle businesses.",
        },
        {
          title: "UK Property Buyer Google Ads",
          desc: "Google Ads reaching UK-based buyers searching for villas and properties in Lapta/Lapithos area. Target high-value search terms with clear investment intent.",
        },
        {
          title: "Web Design for Lapta Businesses",
          desc: "English-first website design for Lapta businesses. Mobile-optimised, fast, and built to appeal to the British expat and UK visitor audience.",
        },
        {
          title: "Google Business Profile — Lapta",
          desc: "Full GBP optimisation targeting English-speaking searches in Lapta and the western North Cyprus coast.",
        },
        {
          title: "Retirement Market Digital Strategy",
          desc: "Targeted digital strategy for businesses serving Lapta's retirement and second-home market — including UK-facing content and search presence.",
        },
      ]}
      schema={generateLocalBusinessSchema("Lapta", "lapta")}
    />
  );
}
