"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { TrendingUp, Users, Star, Award, CheckCircle } from "lucide-react";

const results = [
  {
    industry: "Restaurant",
    business: "Kyrenia Harbour Restaurant",
    location: "Girne, North Cyprus",
    metric1: { label: "Google Maps Calls", value: 280, suffix: "%↑", prefix: "" },
    metric2: { label: "Monthly Website Visits", value: 4200, suffix: "+", prefix: "" },
    metric3: { label: "Review Score", value: 4.9, suffix: "★", prefix: "" },
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-orange-500/20 to-yellow-500/20",
    border: "border-orange-500/20",
  },
  {
    industry: "Real Estate",
    business: "North Cyprus Properties Ltd",
    location: "Girne & İskele",
    metric1: { label: "UK Buyer Enquiries", value: 340, suffix: "%↑", prefix: "" },
    metric2: { label: "Monthly Leads", value: 85, suffix: "+", prefix: "" },
    metric3: { label: "Cost Per Lead", value: 12, suffix: "", prefix: "£" },
    icon: <Users className="w-6 h-6" />,
    color: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/20",
  },
  {
    industry: "Hotel & Tourism",
    business: "Boutique Hotel — Kyrenia",
    location: "Girne, North Cyprus",
    metric1: { label: "Direct Bookings", value: 210, suffix: "%↑", prefix: "" },
    metric2: { label: "Off-Season Revenue", value: 65, suffix: "%↑", prefix: "" },
    metric3: { label: "Booking.com Ranking", value: 1, suffix: "", prefix: "#" },
    icon: <Star className="w-6 h-6" />,
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
  },
];

const credentials = [
  "Google Ads Certified",
  "Meta Blueprint Trained",
  "Local SEO Specialist",
  "North Cyprus Market Expert",
];

export default function ResultsDashboard() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-violet-600/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Numbers That Prove{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              The Difference
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real results from real North Cyprus businesses — restaurants, real estate agencies & hotels
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 mb-14">
          {results.map((r, i) => (
            <motion.div
              key={r.industry}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${r.color} border ${r.border} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
                  {r.industry}
                </span>
                <div className="text-purple-400">{r.icon}</div>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{r.business}</h3>
              <p className="text-gray-400 text-sm mb-6">{r.location}</p>

              <div className="space-y-4">
                {[r.metric1, r.metric2, r.metric3].map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{m.label}</span>
                    <span className="text-white font-bold text-lg">
                      {m.prefix}
                      {inView ? (
                        <CountUp
                          end={m.value}
                          duration={2.5}
                          decimals={m.value % 1 !== 0 ? 1 : 0}
                          suffix={m.suffix}
                        />
                      ) : (
                        `0${m.suffix}`
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credential Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 pt-8 border-t border-white/5"
        >
          <div className="flex items-center gap-2 mr-4">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-gray-400 text-sm">Certifications & Expertise:</span>
          </div>
          {credentials.map((c) => (
            <div key={c} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300 text-sm">{c}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
