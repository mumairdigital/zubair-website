"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Award, Users, Target } from "lucide-react";

const statBadges = [
  { icon: <Award className="w-5 h-5 text-purple-500" />, value: "2+", label: "Years in TRNC" },
  { icon: <Users className="w-5 h-5 text-blue-500" />, value: "20+", label: "Happy Clients" },
  { icon: <Target className="w-5 h-5 text-green-500" />, value: "98%", label: "Success Rate" },
  { icon: <MapPin className="w-5 h-5 text-orange-500" />, value: "6", label: "Cities Covered" },
];

export default function AboutSection() {
  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-200/60 to-violet-200/40 rounded-3xl transform rotate-3" />
              <div className="relative h-[480px] rounded-3xl overflow-hidden border border-purple-200 shadow-2xl">
                <Image
                  src="/zubair.png"
                  alt="Zubair Khan — Digital Marketing Expert based in Girne, North Cyprus"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stat badges floating */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">Z</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Zubair Khan</p>
                    <p className="text-gray-500 text-xs">Girne, North Cyprus</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Your North Cyprus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
                Digital Growth
              </span>{" "}
              Partner
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                I&apos;m Zubair Khan, a digital marketing consultant based in Girne (Kyrenia), North Cyprus. With over 2 years of hands-on experience in the TRNC market, I specialise in helping{" "}
                <strong className="text-gray-900">restaurants, real estate agencies, and hotels</strong> grow their online presence and attract more clients.
              </p>
              <p>
                What sets me apart? I understand the unique dynamics of North Cyprus — a market where you need to reach{" "}
                <strong className="text-gray-900">English-speaking UK expats</strong> (10,000+ British residents), international property buyers, summer tourists, and local Turkish Cypriot customers all at the same time.
              </p>
              <p>
                I deliver{" "}
                <strong className="text-gray-900">bilingual SEO strategies in English and Turkish</strong>, run targeted Google and Meta ad campaigns that reach the right audience, and build websites that convert visitors into paying customers — whether they&apos;re browsing in London or sitting at Kyrenia harbour.
              </p>
            </div>

            {/* Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {statBadges.map((s) => (
                <div key={s.label} className="text-center p-4 bg-white rounded-2xl border border-purple-100 shadow-sm">
                  <div className="flex justify-center mb-2">{s.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                My Full Story
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full border border-purple-300 text-purple-700 font-semibold hover:bg-purple-50 transition-all duration-300"
              >
                Work With Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
