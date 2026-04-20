import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Meta Ads (Facebook & Instagram) North Cyprus | Zubair Khan",
  description:
    "High-ROI Facebook and Instagram advertising for North Cyprus businesses. Reach UK expats, property investors, tourists & locals with laser-targeted Meta campaigns.",
  alternates: { canonical: "https://mzubairkhan.com/services/meta-ads" },
};

export default function MetaAdsPage() {
  return (
    <ServicePageLayout
      icon={<BarChart3 className="w-full h-full" />}
      badge="Meta Ads"
      title="Facebook & Instagram Ads for"
      titleHighlight="North Cyprus Businesses"
      description="Laser-targeted Meta campaigns reaching UK expats, property investors, international tourists, and local customers. Whether you're filling restaurant tables, generating property enquiries, or selling hotel rooms — Meta Ads delivers."
      features={[
        "Full Meta Business Suite setup",
        "Facebook & Instagram campaign creation",
        "UK expat geo-targeting (TRNC residents)",
        "UK-based property investor targeting",
        "Custom & lookalike audience building",
        "Retargeting campaigns (website visitors)",
        "Carousel, video & story ad formats",
        "Ad creative direction & copywriting",
        "Pixel setup & event tracking",
        "A/B testing of audiences & creatives",
        "Monthly performance reporting",
        "Lead generation form campaigns",
      ]}
      process={[
        {
          step: "01",
          title: "Audience Research",
          desc: "Build detailed audience profiles: UK expats in TRNC, overseas property investors, tourists, and local customers — each with different messaging.",
        },
        {
          step: "02",
          title: "Creative & Campaign Setup",
          desc: "Design ad creatives and write compelling copy tailored to each audience. Set up campaigns with proper targeting and budget allocation.",
        },
        {
          step: "03",
          title: "Launch & Test",
          desc: "Launch multiple ad sets and A/B test audiences, creatives, and placements. Rapid iteration in the first 2 weeks.",
        },
        {
          step: "04",
          title: "Scale Winners",
          desc: "Double down on what's working, cut what isn't. Monthly reports showing cost per lead, reach, and ROI.",
        },
      ]}
      faqs={[
        {
          q: "Can Meta Ads really reach British expats living in North Cyprus?",
          a: "Yes — Meta's location and behaviour targeting lets me reach people currently living in TRNC with UK-background profiles. This is extremely effective for restaurants, services, and lifestyle businesses targeting the expat community.",
        },
        {
          q: "Can you target UK Facebook users interested in North Cyprus property?",
          a: "Absolutely. I build audiences of UK users with interests in overseas property investment, Cyprus real estate, and related topics — then serve them ads for your North Cyprus listings.",
        },
        {
          q: "What ad budget is recommended for Meta Ads in North Cyprus?",
          a: "I recommend a minimum of £150–£300/month in ad spend to get meaningful data. Property campaigns often benefit from £500+/month for maximum reach to UK buyers.",
        },
        {
          q: "Do you create the ad images and videos?",
          a: "I provide creative direction and copywriting. For basic graphics, I use Canva Pro. For photography or video production, I work with local North Cyprus photographers — or use your existing media.",
        },
      ]}
      relatedServices={[
        { label: "Google Ads", href: "/services/google-ads" },
        { label: "Local SEO", href: "/services/local-seo" },
        { label: "Web Design", href: "/services/web-design" },
        { label: "Google Business Profile", href: "/services/google-business-profile" },
      ]}
    />
  );
}
