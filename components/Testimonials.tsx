"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Worthington",
    role: "Owner, The Harbour Kitchen",
    location: "Kyrenia Harbour, Girne",
    type: "Restaurant",
    quote:
      "Before working with Zubair, we were invisible on Google Maps despite being right on Kyrenia harbour. Within 3 months he had us ranking #1 for 'restaurants Kyrenia harbour' and our phone was ringing off the hook with reservations. Best investment I've made for the business. The bilingual approach — targeting both English and Turkish searches — was a game changer we hadn't even thought of.",
    stars: 5,
    flag: "🇬🇧",
  },
  {
    name: "Mehmet Özgür",
    role: "Director, Cyprus Sun Properties",
    location: "Girne & İskele",
    type: "Real Estate",
    quote:
      "We were spending £3,000 a month on property portals with inconsistent results. Zubair set up targeted Google Ads campaigns specifically reaching UK buyers searching for North Cyprus investment properties. Within 6 months, our cost per lead dropped from £45 to £12 and we were getting 80+ qualified UK buyer enquiries per month. The ROI speaks for itself.",
    stars: 5,
    flag: "🇨🇾",
  },
  {
    name: "Sarah Mitchell",
    role: "Manager, Kyrenia Castle View Hotel",
    location: "Girne (Kyrenia)",
    type: "Hotel",
    quote:
      "Our hotel was struggling through the winter months — nearly empty from November to March. Zubair built an off-season strategy targeting UK expat weekends and shoulder-season travellers. This past winter was our best ever for off-season occupancy. He genuinely understands the North Cyprus tourism market and what makes British visitors choose direct booking over Booking.com.",
    stars: 5,
    flag: "🇬🇧",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl animate-orb-1" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-violet-600/8 blur-3xl animate-orb-2" />
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
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What North Cyprus Businesses{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              Say About Me
            </span>
          </h2>
          <div className="flex justify-center items-center gap-1 mt-2">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-gray-400 text-sm ml-2">5.0 across all clients</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative p-7 rounded-2xl bg-[#111111] border border-white/5 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-purple-500/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Industry tag */}
              <span className="self-start px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-4">
                {t.type}
              </span>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A855F7] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm">
                  {t.flag}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                  <p className="text-gray-600 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
