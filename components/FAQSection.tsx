"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Do you do SEO in both English and Turkish for North Cyprus businesses?",
    answer:
      "Yes — this is one of my core specialisms. The North Cyprus market is unique because you need to rank in both English (for UK expats, British tourists, international property buyers) and Turkish (for local TRNC residents and Turkish visitors). Most agencies only do one. I create bilingual keyword strategies that capture both audiences, doubling your search visibility without doubling your budget.",
  },
  {
    question: "Can you help my business reach UK expats living in North Cyprus?",
    answer:
      "Absolutely. With 10,000+ British expats living in North Cyprus, this is one of the most valuable local audiences for restaurants, real estate agencies, and service businesses. I use Facebook and Instagram geo-targeting for UK-background users in TRNC, English-language Google Search Ads, and SEO that appears when British residents search locally. I also understand the content and messaging that resonates with the UK expat community specifically.",
  },
  {
    question: "How do you handle the seasonal nature of North Cyprus tourism?",
    answer:
      "Seasonal strategy is something I build into every hotel and restaurant campaign from day one. For summer peak season (May–September), I run high-volume campaigns to capture international tourist searches. For the shoulder season (April, October), I target UK visitors looking for 'off-peak' breaks. For winter, I focus on UK expat weekends, retirement visitors, and long-stay travellers. This approach can significantly increase your year-round revenue — one hotel client saw a 65% increase in off-season occupancy.",
  },
  {
    question: "Do you work with real estate agencies targeting UK and international property buyers?",
    answer:
      "Yes, the North Cyprus real estate sector is one of my three specialist industries. I create Google Ads campaigns targeting UK users searching for 'property for sale North Cyprus', 'TRNC apartments', 'invest in Northern Cyprus' etc. I also run Meta Ads targeting UK Facebook users with interests in overseas property investment. I understand the specific buyer journey for TRNC property — the due diligence concerns, the legal questions, the payment structures — and I build marketing that addresses those questions and converts browsers into enquiries.",
  },
  {
    question: "What makes the North Cyprus (TRNC) digital marketing market different?",
    answer:
      "The TRNC market has several unique characteristics: the political situation means North Cyprus is less indexed by large directories, so Local SEO here requires different citation strategies. The audience is highly international — you're marketing to British, Russian, Scandinavian, and Turkish audiences simultaneously. The university market (EMU in Famagusta, GAU in Girne) creates a young digital-native population. And the seasonal tourism pattern is extreme — you need completely different strategies for July vs January. I've spent 2+ years understanding these nuances, which means faster, smarter results for my clients.",
  },
  {
    question: "Do you offer a free consultation before I commit to anything?",
    answer:
      "Yes, always. I offer a free 30-minute strategy consultation — via WhatsApp, Zoom, or in person if you're in Girne. In that call, I'll review your current online presence, identify the biggest opportunities for your specific business, and give you honest, actionable advice — even if you decide not to work with me. To book your free consultation, just fill in the contact form on this page or message me directly on WhatsApp at +90 539 111 35 77.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Questions About Digital Marketing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              in North Cyprus?
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Honest answers to the questions North Cyprus business owners ask most often.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white border border-gray-200 hover:border-purple-200 rounded-2xl overflow-hidden transition-colors duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-gray-900 font-semibold text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
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
            Have a question not answered here?{" "}
            <Link href="/contact" className="text-purple-600 font-semibold hover:underline">
              Ask me directly
            </Link>{" "}
            or WhatsApp me at{" "}
            <a href="https://wa.me/905391113577" className="text-purple-600 font-semibold hover:underline">
              +90 539 111 35 77
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
