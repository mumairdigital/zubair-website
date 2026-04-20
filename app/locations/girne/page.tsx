import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing in Girne (Kyrenia), North Cyprus | Zubair Khan",
  description:
    "Local SEO, Google Ads & Web Design for businesses in Girne (Kyrenia), North Cyprus. Specialist in Kyrenia harbour restaurants, real estate, boutique hotels & UK expat market.",
  alternates: { canonical: "https://mzubairkhan.com/locations/girne" },
};

export default function GirnePage() {
  return (
    <LocationPage
      city="Girne"
      citySlug="girne"
      heroHeadline="Digital Marketing for Businesses in Girne (Kyrenia), North Cyprus"
      heroSub="Girne is North Cyprus's tourism capital — and the most competitive digital marketing market in TRNC. I help restaurants on Kyrenia harbour, real estate agencies, and boutique hotels dominate Google and attract UK expats, international tourists, and local customers."
      whyMatters="Girne (Kyrenia) is where North Cyprus digital marketing competition is fiercest — and where the rewards are greatest. The iconic harbour strip attracts thousands of international visitors who search for restaurants, accommodation, and experiences on Google before they even arrive. If your business isn't ranking, you're invisible to this massive opportunity."
      marketInsight="The Girne market has three distinct audiences: UK expats (the largest British community outside the UK per capita), summer tourists from the UK, Germany, and Scandinavia, and local Turkish Cypriot customers. Each group searches differently — which is exactly why bilingual English & Turkish SEO is so critical here. Girne American University also creates a young, digitally-active local demographic."
      uniqueOpportunities={[
        "Kyrenia harbour restaurants: Tourists search 'restaurants Kyrenia harbour' before every visit — ranking here is gold",
        "UK expat market: 5,000+ British residents in and around Girne, the most valuable local audience for services and dining",
        "Real estate boom: UK and international buyers actively searching for villas and apartments in the Kyrenia hills",
        "Boutique hotel market: High competition but high reward — ranking #1 for 'boutique hotel Kyrenia' drives premium bookings",
        "Girne American University proximity: Student market for restaurants, cafes, and accommodation",
        "Kyrenia Castle tourism: Thousands of daily visitors who search for nearby restaurants and experiences",
      ]}
      caseStudyRef="A restaurant I work with on Kyrenia harbour went from no Google Maps visibility to ranking #1 for 'restaurants Kyrenia harbour' within 4 months — resulting in a 280% increase in Google Maps calls and 84 new 5-star reviews. Another Girne boutique hotel saw a 65% increase in off-season bookings after implementing a year-round digital strategy targeting UK expat weekends and shoulder-season travellers."
      services={[
        {
          title: "Local SEO for Girne Businesses",
          desc: "Bilingual English & Turkish Local SEO that puts your business at the top of Google Maps for Kyrenia searches. Includes GBP optimisation and review strategy.",
        },
        {
          title: "Google Ads — Kyrenia Targeting",
          desc: "Google Ads campaigns reaching tourists planning visits to Kyrenia, UK expats searching locally, and property buyers investigating Girne real estate.",
        },
        {
          title: "UK Expat Meta Ads",
          desc: "Facebook & Instagram ads targeting the 5,000+ British residents in and around Girne. Proven effective for restaurants, services, and local businesses.",
        },
        {
          title: "Web Design for Girne",
          desc: "Professional websites built to convert Kyrenia visitors — mobile-first, fast, and SEO-optimised for English and Turkish search terms.",
        },
        {
          title: "Google Business Profile — Kyrenia",
          desc: "Full GBP optimisation for Girne businesses. Bilingual descriptions, strategic photos, review generation, and weekly Google Posts.",
        },
        {
          title: "SEO Audit for Girne Businesses",
          desc: "Comprehensive audit of why you're not ranking in Girne — with a clear 90-day action plan to fix it.",
        },
      ]}
      schema={generateLocalBusinessSchema("Girne", "girne")}
    />
  );
}
