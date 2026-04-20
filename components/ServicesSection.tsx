"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Megaphone, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Search className="w-7 h-7" />,
    title: "Local SEO",
    subtitle: "Rank #1 on Google Maps in North Cyprus",
    description:
      "Bilingual English & Turkish SEO that puts your business at the top of Google Maps and local search. Perfect for restaurants on Kyrenia harbour, real estate agencies targeting UK buyers, and hotels reaching international tourists.",
    features: [
      "English & Turkish keyword targeting",
      "Google Business Profile optimisation",
      "North Cyprus local citations",
      "UK expat market targeting",
    ],
    href: "/services/local-seo",
    color: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/60",
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: "Google & Meta Ads",
    subtitle: "Paid Ads That Actually Convert",
    description:
      "Laser-targeted ad campaigns reaching UK buyers, international tourists, and local customers exactly when they're searching. Whether it's property enquiries, restaurant reservations, or hotel bookings — we deliver leads, not just clicks.",
    features: [
      "Google Ads for property buyers",
      "Meta Ads targeting UK expats",
      "Seasonal tourism campaigns",
      "Retargeting & lookalike audiences",
    ],
    href: "/services/google-ads",
    color: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/60",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Web Design",
    subtitle: "High-Converting Business Websites",
    description:
      "Professional, fast, and SEO-ready websites built to convert North Cyprus visitors into paying customers. Optimised for the UK expat market, mobile-first for tourists, and bilingual-ready for the TRNC audience.",
    features: [
      "Mobile-first responsive design",
      "SEO-optimised from day one",
      "English & Turkish content",
      "Conversion-focused landing pages",
    ],
    href: "/services/web-design",
    color: "from-green-500/20 to-teal-500/20",
    border: "border-green-500/20",
    hoverBorder: "hover:border-green-500/60",
  },
];

export default function ServicesSection() {
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
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Digital Marketing Services for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              North Cyprus Businesses
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tailored strategies for the unique North Cyprus market — where English-speaking expats, international tourists, and local customers all need different approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`group relative p-7 rounded-2xl bg-white border ${s.border} ${s.hoverBorder} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-purple-600 mb-5`}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">{s.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.description}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={s.href}
                className="flex items-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors group"
              >
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
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
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
