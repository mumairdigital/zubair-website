import type { Metadata } from "next";
import Link from "next/link";
import { Search, Megaphone, Globe, FileSearch, MapPin, BarChart3, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services in North Cyprus | Zubair Khan",
  description:
    "Full-service digital marketing in North Cyprus: Local SEO, Google Ads, Meta Ads, Web Design, SEO Audit & Google Business Profile optimisation. Serving Girne, Lefkoşa & all TRNC cities.",
  alternates: { canonical: "https://mzubairkhan.com/services" },
};

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Local SEO",
    subtitle: "Rank #1 on Google Maps in North Cyprus",
    description: "Bilingual English & Turkish Local SEO that dominates Google Maps and local search results across TRNC. Perfect for restaurants, real estate agencies and hotels wanting to be found by UK expats, tourists and local customers.",
    href: "/services/local-seo",
    features: ["Bilingual EN & TR keyword research", "Google Business Profile optimisation", "Local citation building", "Review strategy & management", "Competitor analysis & gap mapping"],
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Google Ads",
    subtitle: "Targeted PPC Campaigns That Deliver Leads",
    description: "Google Ads campaigns built for the North Cyprus market — reaching UK buyers, international tourists, and local customers at exactly the right moment. No wasted budget, only qualified leads.",
    href: "/services/google-ads",
    features: ["UK-targeted search campaigns", "Property buyer intent keywords", "Seasonal campaign management", "Remarketing & RLSA", "Full conversion tracking"],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Meta Ads",
    subtitle: "Facebook & Instagram Ads for North Cyprus",
    description: "High-ROI Facebook and Instagram campaigns targeting UK expats, property investors, tourists and locals. From restaurant promotions to real estate lead generation.",
    href: "/services/meta-ads",
    features: ["UK expat geo-targeting", "Lookalike audiences", "Property investor campaigns", "Restaurant & hotel promotions", "Full funnel retargeting"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Design",
    subtitle: "Conversion-Optimised Business Websites",
    description: "Professional, fast, SEO-ready websites for North Cyprus businesses. Built to convert UK expats, international tourists, and local customers into paying clients.",
    href: "/services/web-design",
    features: ["Mobile-first responsive design", "SEO-optimised from day one", "English & Turkish content", "Fast load speeds", "Lead capture & forms"],
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "SEO Audit",
    subtitle: "Find Out Why You're Not Ranking on Google",
    description: "A comprehensive audit of your website's SEO performance — technical issues, content gaps, local citation problems, and competitor analysis. Clear, prioritised action plan included.",
    href: "/services/seo-audit",
    features: ["Technical SEO analysis", "Content gap identification", "Bilingual keyword audit", "Backlink profile review", "Prioritised action plan"],
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Google Business Profile",
    subtitle: "Dominate Google Maps in Your City",
    description: "Complete Google Business Profile setup and optimisation for maximum visibility in North Cyprus local search. More calls, more visits, more customers — directly from Google Maps.",
    href: "/services/google-business-profile",
    features: ["Complete profile optimisation", "Bilingual business description", "Photo & video strategy", "Review generation system", "Q&A and post management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Digital Marketing Services for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              North Cyprus Businesses
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to dominate Google in TRNC — from Local SEO and Google Ads to Web Design and social media. Tailored for the North Cyprus market.
          </p>
        </div>
      </section>

      <section className="bg-[#FAF9F7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => (
              <div key={s.title} className="group flex flex-col p-7 rounded-2xl bg-white border border-gray-100 hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{s.title}</h2>
                <p className="text-purple-600 font-medium text-sm mb-3">{s.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="flex items-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors group">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 p-10 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Not sure which service you need?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Book a free 30-minute consultation. I&apos;ll review your current online presence and recommend exactly what will drive the best results for your North Cyprus business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
