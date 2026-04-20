"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const UtensilsIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const HotelIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const industries = [
  {
    icon: <UtensilsIcon />,
    title: "Restaurants & Cafes",
    insight: "Kyrenia Harbour Opportunity",
    description:
      "Girne's harbour strip is one of the most competitive and lucrative dining spots in North Cyprus. Tourists from the UK, Germany, and Scandinavia search for 'restaurants Kyrenia harbour' before they even land. I put your restaurant in front of them — in their language.",
    services: ["Local SEO & Google Maps", "Google Business Profile", "Instagram & Facebook Ads", "Review Strategy"],
    stat: "+280% Google Map Calls",
    href: "/services/local-seo",
  },
  {
    icon: <BuildingIcon />,
    title: "Real Estate Agencies",
    insight: "UK & International Buyer Market",
    description:
      "North Cyprus real estate is booming — UK, Russian, and Scandinavian buyers are actively searching for property in TRNC. I connect your listings to those buyers via Google Ads, Meta campaigns, and SEO that ranks in UK search results.",
    services: ["Google Ads for Property Buyers", "UK-targeted Meta Ads", "Property Landing Pages", "Lead Generation"],
    stat: "£12 Cost Per UK Lead",
    href: "/services/google-ads",
  },
  {
    icon: <HotelIcon />,
    title: "Hotels & Tourism",
    insight: "Seasonal Strategy for Year-Round Revenue",
    description:
      "North Cyprus hotels live and die by the summer season — unless they plan smarter. I build year-round digital strategies that maximise peak-season bookings and keep off-season occupancy healthy with UK expat weekends and shoulder-season campaigns.",
    services: ["Seasonal Google Ads", "Local SEO & TripAdvisor", "Direct Booking Campaigns", "Off-Season Strategies"],
    stat: "+65% Off-Season Bookings",
    href: "/services/meta-ads",
  },
];

export default function Industries() {
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
            Industries I Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Deep Expertise in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              3 North Cyprus Industries
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I don&apos;t do everything for everyone. Focused expertise means better results for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-7">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group flex flex-col p-7 rounded-2xl bg-white border border-gray-100 hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                {ind.icon}
              </div>
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-3 self-start">
                {ind.insight}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{ind.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{ind.description}</p>
              <ul className="space-y-2 mb-5">
                {ind.services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-green-600 font-bold text-sm">{ind.stat}</span>
                <Link
                  href={ind.href}
                  className="flex items-center gap-1 text-purple-600 text-sm font-semibold hover:text-purple-800"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
