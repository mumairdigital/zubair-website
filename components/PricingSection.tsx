"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for local businesses just starting out",
    priceGBP: "£349",
    priceEUR: "€410",
    period: "/ month",
    features: [
      "Google Business Profile Setup & Optimisation",
      "Basic Local SEO (English)",
      "5 Target Keywords",
      "Monthly Performance Report",
      "Review Response Strategy",
      "WhatsApp Support",
    ],
    notIncluded: ["Turkish SEO", "Paid Ads Management", "Web Design"],
    cta: "Get Started",
    popular: false,
    color: "border-gray-200",
    ctaStyle: "border border-purple-600 text-purple-600 hover:bg-purple-50",
  },
  {
    name: "Professional",
    tagline: "For growing businesses serious about results",
    priceGBP: "£749",
    priceEUR: "€875",
    period: "/ month",
    features: [
      "Everything in Starter",
      "Bilingual SEO (English + Turkish)",
      "15 Target Keywords",
      "Google Ads Management (up to £500 budget)",
      "Meta Ads Management (up to £300 budget)",
      "Competitor Analysis",
      "UK Expat Targeting Strategy",
      "Bi-weekly Progress Calls",
      "Priority WhatsApp Support",
    ],
    notIncluded: ["Custom Web Design"],
    cta: "Most Popular — Start Now",
    popular: true,
    color: "border-purple-500",
    ctaStyle: "bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white hover:shadow-xl hover:shadow-purple-500/30",
  },
  {
    name: "Enterprise",
    tagline: "For established hospitality & real estate businesses",
    priceGBP: "£1,499",
    priceEUR: "€1,750",
    period: "/ month",
    features: [
      "Everything in Professional",
      "Full Web Design or Redesign",
      "Unlimited Keywords",
      "Google Ads (up to £2,000 budget)",
      "Meta Ads (up to £1,000 budget)",
      "Content Marketing (4 articles/month)",
      "Seasonal Campaign Strategy",
      "Weekly Calls & Reporting",
      "Dedicated Account Management",
      "SEO Audit & Technical Fixes",
    ],
    notIncluded: [],
    cta: "Contact for Enterprise",
    popular: false,
    color: "border-gray-200",
    ctaStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  },
];

export default function PricingSection() {
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
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Honest Pricing for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              North Cyprus Businesses
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-2">
            No long-term contracts. No hidden fees. Cancel anytime.
          </p>
          <p className="text-gray-400 text-sm">
            Prices shown in GBP. EUR equivalent available on request.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`relative p-7 rounded-2xl bg-white border-2 ${plan.color} ${plan.popular ? "shadow-xl shadow-purple-100" : "shadow-sm"} transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white text-xs font-bold shadow-lg shadow-purple-500/30">
                    <Zap className="w-3.5 h-3.5" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gray-900">{plan.priceGBP}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">≈ {plan.priceEUR} / month</p>
              </div>

              <Link
                href="/contact"
                className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 mb-7 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm">
            Not sure which plan is right for you?{" "}
            <Link href="/contact" className="text-purple-600 font-semibold hover:underline">
              Book a free consultation
            </Link>{" "}
            and I&apos;ll recommend the best fit for your North Cyprus business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
