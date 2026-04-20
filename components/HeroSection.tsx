"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { MapPin, Star, TrendingUp, Users, Globe } from "lucide-react";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 30, suffix: "+", label: "Projects Done" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

const badges = [
  { icon: <Star className="w-4 h-4 text-yellow-400" />, text: "5★ Google Rating" },
  { icon: <Globe className="w-4 h-4 text-blue-400" />, text: "EN & TR SEO" },
  { icon: <MapPin className="w-4 h-4 text-green-400" />, text: "North Cyprus" },
  { icon: <TrendingUp className="w-4 h-4 text-purple-400" />, text: "Proven Results" },
];

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl animate-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-600/15 blur-3xl animate-orb-2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-fuchsia-600/10 blur-3xl animate-orb-3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-purple-300 text-sm font-medium">
                #1 Digital Marketing Consultant in North Cyprus
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Grow Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
                North Cyprus
              </span>{" "}
              Business Online
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              I help restaurants, real estate agencies & hotels in Girne and across TRNC dominate Google — in{" "}
              <span className="text-purple-400 font-semibold">English & Turkish</span>. Specialist in the{" "}
              <span className="text-purple-400 font-semibold">UK expat market</span> with 10,000+ British residents in North Cyprus.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 animate-pulse-glow"
              >
                Get Free Consultation
              </Link>
              <a
                href="https://wa.me/905391113577?text=Hi%20Zubair!%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20North%20Cyprus%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300"
              >
                WhatsApp Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {inView ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Photo + Badges */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Purple glow blob behind photo */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-purple-600/30 to-violet-600/20 blur-2xl scale-110" />

              {/* Photo */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/30">
                <Image
                  src="/zubair.png"
                  alt="Zubair Khan — Digital Marketing Consultant in Girne, North Cyprus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badge: Location */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-1/4 bg-[#111111] border border-purple-500/30 rounded-2xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <div>
                    <p className="text-white text-xs font-semibold">Girne, TRNC</p>
                    <p className="text-gray-400 text-xs">North Cyprus</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge: UK Expat */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 top-1/3 bg-[#111111] border border-purple-500/30 rounded-2xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="text-white text-xs font-semibold">UK Expat</p>
                    <p className="text-gray-400 text-xs">Specialist</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge: Google Results */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-1/4 bg-[#111111] border border-purple-500/30 rounded-2xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <div>
                    <p className="text-white text-xs font-semibold">+320%</p>
                    <p className="text-gray-400 text-xs">Traffic Growth</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge: Bilingual */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -right-4 bottom-1/5 bg-[#111111] border border-purple-500/30 rounded-2xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-yellow-400" />
                  <div>
                    <p className="text-white text-xs font-semibold">EN & TR</p>
                    <p className="text-gray-400 text-xs">SEO Expert</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-gray-500 text-sm text-center mb-6">Trusted by North Cyprus businesses in</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Kyrenia Harbour Restaurants", "Real Estate Agencies", "Boutique Hotels", "UK Expat Businesses"].map(
              (item) => (
                <span key={item} className="text-gray-400 text-sm font-medium">
                  ✓ {item}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
