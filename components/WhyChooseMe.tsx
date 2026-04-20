"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Users, TrendingUp, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Bilingual EN & TR SEO",
    description:
      "I create SEO strategies in both English and Turkish — capturing searches from UK expats, international buyers, AND local Turkish Cypriot customers. Most agencies only do one language.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "UK Expat Market Specialist",
    description:
      "With 10,000+ British residents in North Cyprus, the UK expat market is the most valuable audience for most businesses. I know exactly how to reach them — on Google, Facebook, and Instagram.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Local North Cyprus Knowledge",
    description:
      "I live and work in Girne. I know the Kyrenia harbour restaurant scene, the İskele real estate boom, the seasonal tourism patterns, and the university market in Gazimağusa. That local knowledge = better strategies.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Seasonal Tourism Expertise",
    description:
      "North Cyprus tourism peaks in summer but dies in winter — unless you plan for it. I build year-round strategies that maximize summer revenue while keeping off-season occupancy and bookings healthy.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Results, No Contracts",
    description:
      "You'll see measurable improvements within the first month — not in 6 months. I work month-to-month with full transparency. No lock-in contracts. No hidden fees. Just results.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "3 Industries, Deep Focus",
    description:
      "I don't try to serve everyone. My deep focus on restaurants, real estate, and hotels in North Cyprus means I've refined strategies that actually work for these specific businesses — not generic tactics.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
];

export default function WhyChooseMe() {
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
            Why Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why North Cyprus Businesses{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              Choose Zubair Khan
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not another generic digital marketing agency. A specialist who understands TRNC, speaks your market, and delivers measurable ROI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${r.bg} flex items-center justify-center ${r.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
