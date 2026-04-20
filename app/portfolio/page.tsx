import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | Digital Marketing Results in North Cyprus | Zubair Khan",
  description:
    "Real results for real North Cyprus businesses. See how Zubair Khan has helped restaurants in Girne, real estate agencies, and hotels achieve measurable digital marketing growth.",
  alternates: { canonical: "https://mzubairkhan.com/portfolio" },
};

const projects = [
  {
    category: "Restaurant — Local SEO",
    title: "Kyrenia Harbour Kitchen",
    location: "Girne, North Cyprus",
    period: "4 months",
    results: [
      { label: "Google Maps Calls", value: "+280%" },
      { label: "New 5-Star Reviews", value: "84" },
      { label: "Table Reservations", value: "+175%" },
      { label: "Google Maps Rank", value: "#1" },
    ],
    services: ["Local SEO", "Google Business Profile", "Review Strategy", "Meta Ads"],
    challenge: "Zero Google Maps visibility despite prime harbour location. Losing tourists and UK expat diners to competitors.",
    solution: "Bilingual GBP optimisation, English & Turkish keyword targeting, systematic review generation, UK expat Facebook ads.",
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    tag: "bg-orange-100 text-orange-700",
  },
  {
    category: "Real Estate — Google Ads",
    title: "North Cyprus Properties Ltd",
    location: "Girne & İskele",
    period: "6 months",
    results: [
      { label: "Monthly UK Leads", value: "85+" },
      { label: "Cost Per Lead", value: "£12" },
      { label: "Lead to Viewing Rate", value: "34%" },
      { label: "Ad Spend ROI", value: "680%" },
    ],
    services: ["Google Ads", "Meta Ads", "Landing Page", "Lead Generation"],
    challenge: "Relying on expensive property portals. No consistent pipeline of qualified UK buyers for TRNC investment properties.",
    solution: "UK-targeted Google Ads for TRNC property search terms, Meta retargeting to overseas property investors, conversion-optimised landing page.",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    tag: "bg-blue-100 text-blue-700",
  },
  {
    category: "Hotel — SEO + Google Ads",
    title: "Kyrenia Castle View Hotel",
    location: "Girne (Kyrenia)",
    period: "5 months",
    results: [
      { label: "Off-Season Occupancy", value: "+65%" },
      { label: "Direct Bookings", value: "+210%" },
      { label: "Additional Revenue", value: "£38K" },
      { label: "Google Maps Rank", value: "#1" },
    ],
    services: ["Local SEO", "Google Ads", "Content Strategy", "Off-Season Campaigns"],
    challenge: "Near-empty hotel from October to March. Fully OTA-dependent. No off-season digital strategy.",
    solution: "Off-season content strategy, UK expat weekend targeting, Google Ads for winter sun breaks, GBP photo refresh showcasing off-peak experiences.",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    tag: "bg-purple-100 text-purple-700",
  },
  {
    category: "Restaurant — Meta Ads",
    title: "Mediterranean Meze — Lapta",
    location: "Lapta, North Cyprus",
    period: "3 months",
    results: [
      { label: "UK Expat Diners", value: "+190%" },
      { label: "Cost Per Booking", value: "£3.20" },
      { label: "Instagram Followers", value: "+2,400" },
      { label: "Avg. Monthly Revenue", value: "+£8,200" },
    ],
    services: ["Meta Ads", "Instagram Marketing", "UK Expat Targeting", "Content Creation"],
    challenge: "Great restaurant in Lapta's British expat heartland but no digital presence to reach the local community.",
    solution: "Facebook & Instagram campaigns specifically targeting UK expats in Lapta and western North Cyprus. Organic Instagram growth strategy.",
    color: "from-green-50 to-emerald-50",
    border: "border-green-200",
    tag: "bg-green-100 text-green-700",
  },
  {
    category: "Real Estate — SEO",
    title: "İskele Luxury Properties",
    location: "İskele, North Cyprus",
    period: "6 months",
    results: [
      { label: "Google Page 1 Keywords", value: "18" },
      { label: "Organic Traffic Growth", value: "+320%" },
      { label: "Property Enquiry Rate", value: "+145%" },
      { label: "Domain Authority", value: "DA 28" },
    ],
    services: ["Local SEO", "Content Marketing", "Web Design", "SEO Audit"],
    challenge: "New real estate agency in the booming İskele market. No online presence in a highly competitive investment area.",
    solution: "Complete website built with SEO architecture, local content targeting Long Beach development keywords, authority building through press and citations.",
    color: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
    tag: "bg-teal-100 text-teal-700",
  },
  {
    category: "Hotel — Google Business Profile",
    title: "Lefkoşa Boutique Hotel",
    location: "Lefkoşa (Nicosia)",
    period: "2 months",
    results: [
      { label: "GBP Views", value: "+340%" },
      { label: "Google Maps Calls", value: "+185%" },
      { label: "New Reviews", value: "52" },
      { label: "Direction Requests", value: "+220%" },
    ],
    services: ["Google Business Profile", "Review Strategy", "Local Citations", "EN/TR Optimisation"],
    challenge: "Hotel on Google Maps with 12 reviews and a sparse, English-only profile. Missing Turkish Cypriot and regional traveller searches.",
    solution: "Complete bilingual profile optimisation, systematic review generation system, local citation clean-up, weekly Google Posts.",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-200",
    tag: "bg-rose-100 text-rose-700",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Real Results for Real{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              North Cyprus Businesses
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            No fluff. No vanity metrics. Just measurable results from restaurants, real estate agencies, and hotels across TRNC.
          </p>
        </div>
      </section>

      <section className="bg-[#FAF9F7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {projects.map((p) => (
              <div key={p.title} className={`p-8 rounded-2xl bg-gradient-to-br ${p.color} border ${p.border}`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${p.tag}`}>{p.category}</span>
                      <span className="flex items-center gap-1 text-gray-500 text-xs"><MapPin className="w-3 h-3" /> {p.location}</span>
                      <span className="text-gray-400 text-xs">· {p.period}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.services.map((s) => (
                        <span key={s} className="px-2.5 py-1 bg-white/70 rounded-lg text-xs text-gray-600 font-medium">{s}</span>
                      ))}
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Challenge: </span>
                        <span className="text-gray-600">{p.challenge}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Solution: </span>
                        <span className="text-gray-600">{p.solution}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" /> Key Results
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {p.results.map((r) => (
                        <div key={r.label} className="bg-white/80 rounded-xl p-3">
                          <div className="text-xl font-bold text-gray-900">{r.value}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-600 mb-6">Want results like these for your North Cyprus business?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all"
            >
              Get Your Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
