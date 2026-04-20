"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, ArrowRight, MapPin } from "lucide-react";

const caseStudies = [
  {
    industry: "Restaurant",
    tag: "Local SEO + GBP",
    title: "Kyrenia Harbour Restaurant Triples Google Enquiries in 4 Months",
    location: "Girne Harbour, North Cyprus",
    challenge:
      "A beloved waterfront restaurant on Kyrenia harbour was invisible on Google Maps, losing walk-in tourists and UK expat diners to competitors who ranked higher in local search results.",
    solution:
      "Full local SEO overhaul with bilingual English & Turkish keyword targeting, Google Business Profile optimisation, review strategy, and targeted Meta Ads campaign for UK expats in North Cyprus.",
    results: [
      { metric: "Google Maps Calls", value: "+280%", period: "in 4 months" },
      { metric: "New Google Reviews", value: "84", period: "5-star average" },
      { metric: "Table Reservations", value: "+175%", period: "peak season" },
      { metric: "Google Maps Rank", value: "#1", period: "Kyrenia harbour restaurants" },
    ],
    color: "from-orange-500/10 to-amber-500/10",
    border: "border-orange-400/20",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    industry: "Real Estate",
    tag: "Google Ads + Meta Ads",
    title: "Real Estate Agency Generates 85 UK Buyer Leads Per Month",
    location: "Girne & İskele, North Cyprus",
    challenge:
      "A North Cyprus property agency was relying entirely on word-of-mouth and old portal listings. They had no consistent pipeline of UK and international buyers looking for investment properties in TRNC.",
    solution:
      "Google Ads targeting UK property search terms, Meta Ads retargeting campaigns to UK Facebook audiences interested in overseas property, plus a conversion-optimised landing page built specifically for the UK buyer journey.",
    results: [
      { metric: "Monthly UK Buyer Leads", value: "85+", period: "consistent" },
      { metric: "Cost Per Lead", value: "£12", period: "Google Ads" },
      { metric: "Lead to Viewing Rate", value: "34%", period: "qualified leads" },
      { metric: "ROI on Ad Spend", value: "680%", period: "in 6 months" },
    ],
    color: "from-blue-500/10 to-purple-500/10",
    border: "border-blue-400/20",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    industry: "Hotel & Tourism",
    tag: "Local SEO + Google Ads",
    title: "Boutique Hotel Increases Off-Season Bookings by 65%",
    location: "Girne (Kyrenia), North Cyprus",
    challenge:
      "A charming boutique hotel near Kyrenia Castle was fully booked in summer but nearly empty between October and March — a costly gap that threatened the business's viability year-round.",
    solution:
      "Off-season targeting strategy with SEO content around autumn breaks, UK expat 'local escape' campaigns, Google Ads to UK audiences planning winter sun breaks, and a Google Business Profile strategy showcasing off-peak experiences.",
    results: [
      { metric: "Off-Season Occupancy", value: "+65%", period: "Oct–Mar" },
      { metric: "Direct Bookings", value: "+210%", period: "vs OTA dependency" },
      { metric: "Revenue Uplift", value: "£38K", period: "additional annual" },
      { metric: "Google Maps Rank", value: "#1", period: "boutique hotel Kyrenia" },
    ],
    color: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-400/20",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Businesses.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              Real Results.
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three industries, three challenges, three transformations — all in North Cyprus
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`p-7 lg:p-8 rounded-2xl bg-gradient-to-br ${cs.color} border ${cs.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cs.tagColor}`}>
                      {cs.tag}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                      <MapPin className="w-3 h-3" /> {cs.location}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{cs.title}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">Challenge:</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Solution:</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" /> Results
                  </p>
                  <div className="space-y-4">
                    {cs.results.map((r) => (
                      <div key={r.metric} className="bg-white/70 rounded-xl p-3">
                        <div className="text-2xl font-bold text-gray-900">{r.value}</div>
                        <div className="text-xs text-gray-500">{r.metric}</div>
                        <div className="text-xs text-purple-600 font-medium">{r.period}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
