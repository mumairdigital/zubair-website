import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing in İskele, North Cyprus | Zubair Khan",
  description:
    "Digital marketing for İskele's booming real estate & hospitality market. Long Beach development, luxury residential projects & investment-focused marketing campaigns.",
  alternates: { canonical: "https://mzubairkhan.com/locations/iskele" },
};

export default function IskelePage() {
  return (
    <LocationPage
      city="İskele"
      citySlug="iskele"
      heroHeadline="Digital Marketing for Businesses in İskele, North Cyprus"
      heroSub="İskele is North Cyprus's fastest-growing investment hotspot — driven by the Long Beach development and a wave of luxury residential projects. I help real estate agencies, hotels, and new businesses in İskele reach UK, Russian, and Scandinavian investors and residents with precision-targeted digital marketing."
      whyMatters="İskele has transformed from a quiet fishing town into North Cyprus's most dynamic investment destination. The Long Beach area is now home to major residential developments attracting property buyers from the UK, Russia, Kazakhstan, and Scandinavia. This has created an entirely new digital marketing opportunity — but most businesses in the area are still operating with zero online presence."
      marketInsight="The İskele digital marketing opportunity is dominated by real estate and new hospitality businesses serving the luxury residential community. UK buyers are the most active segment, followed by Russian and Scandinavian investors. The key difference from Girne is that İskele's audience is primarily investment-motivated — they want data, ROI projections, and professional presentation. Digital marketing here needs to be sophisticated, conversion-focused, and targeted at international audiences browsing from the UK and Northern Europe."
      uniqueOpportunities={[
        "Long Beach development: One of the most significant real estate developments in North Cyprus, driving massive search volume for İskele property",
        "UK investor market: British buyers actively searching 'İskele property for sale', 'Long Beach apartments North Cyprus'",
        "Russian & Scandinavian buyers: Significant international investment from Russia, Kazakhstan, Sweden, and Norway",
        "New hotel & resort market: Luxury hotels and resorts serving the growing İskele residential community",
        "Low digital competition: Most İskele businesses have minimal online presence — huge first-mover advantage",
        "Investment-motivated audience: High-value leads who are ready to spend significantly",
      ]}
      caseStudyRef="A real estate agency I worked with in İskele generated 85+ qualified UK buyer leads per month within 6 months of launching targeted Google Ads campaigns — at a cost per lead of just £12. The agency had previously relied entirely on property portals at £40+ per lead. The ROI on the digital marketing investment was over 680%."
      services={[
        {
          title: "Real Estate SEO for İskele",
          desc: "Local SEO targeting UK and international property buyer search terms for İskele and Long Beach — fast rankings in a low-competition market.",
        },
        {
          title: "UK Investor Google Ads",
          desc: "Google Ads campaigns targeting UK-based searches for İskele real estate, Long Beach apartments, and North Cyprus investment property.",
        },
        {
          title: "International Property Buyer Meta Ads",
          desc: "Facebook and Instagram campaigns targeting property investors in the UK, Russia, and Scandinavia with İskele property content.",
        },
        {
          title: "Property Developer Web Design",
          desc: "Sophisticated, conversion-optimised websites for İskele real estate agencies and property developers targeting international buyers.",
        },
        {
          title: "Google Business Profile — İskele",
          desc: "GBP optimisation for İskele real estate and hospitality businesses — capturing searches from buyers already in the area.",
        },
        {
          title: "Investment Property Lead Generation",
          desc: "Full lead generation system: landing pages, ad campaigns, and CRM integration for consistent İskele property buyer pipeline.",
        },
      ]}
      schema={generateLocalBusinessSchema("İskele", "iskele")}
    />
  );
}
