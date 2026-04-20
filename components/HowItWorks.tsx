"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Free Strategy Call",
    description:
      "We start with a no-obligation 30-minute consultation — on WhatsApp, Zoom, or in-person in Girne. I learn about your business, your target customers (UK expats? tourists? locals?), and what's not working right now.",
    detail: "No sales pitch. Just honest advice about what your North Cyprus business actually needs.",
  },
  {
    number: "02",
    title: "Custom TRNC Audit & Plan",
    description:
      "I conduct a deep audit of your current online presence — Google Business Profile, website, local citations, competitor rankings in North Cyprus — and deliver a clear, prioritised action plan.",
    detail: "You'll know exactly what needs to change and why, in plain English (or Turkish).",
  },
  {
    number: "03",
    title: "Implementation & Launch",
    description:
      "I execute the strategy — bilingual SEO, ad campaigns, website improvements, Google Business Profile — with full transparency. You get regular updates and can see progress in real time.",
    detail: "Most clients see measurable movement on Google within the first 4–8 weeks.",
  },
  {
    number: "04",
    title: "Grow & Optimise",
    description:
      "Digital marketing isn't set-and-forget. I monitor results monthly, adapt to North Cyprus seasonal patterns (peak tourist season, off-season, student intake), and continuously optimise for better ROI.",
    detail: "Monthly reports show exactly what's working and what I'm doing to make it work better.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-violet-600/8 blur-3xl animate-orb-2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How We Grow Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              North Cyprus Business
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A clear, transparent process built for the TRNC market — from first call to measurable Google rankings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-500/40 to-transparent z-0 -translate-y-px" style={{ width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }} />
              )}

              <div className="relative z-10 p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 h-full">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#A855F7] to-[#7C3AED] mb-4 opacity-60">
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
                <p className="text-purple-400 text-xs italic">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 animate-pulse-glow"
          >
            Start With a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
