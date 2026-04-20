import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Award, Users, Target, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Zubair Khan | Digital Marketing Expert in North Cyprus",
  description:
    "Meet Zubair Khan — Girne-based digital marketing consultant with 2+ years helping North Cyprus restaurants, real estate agencies, and hotels grow online. English & Turkish SEO specialist.",
  alternates: { canonical: "https://mzubairkhan.com/about" },
};

const milestones = [
  { year: "2022", event: "Moved to Girne (Kyrenia), North Cyprus", detail: "Recognised the massive digital gap in the TRNC market" },
  { year: "2023", event: "First restaurant clients in Kyrenia harbour", detail: "Delivered 280%+ increase in Google Maps calls" },
  { year: "2024", event: "Expanded into real estate & hotel sectors", detail: "Generated £12 cost-per-lead for UK property buyers" },
  { year: "2025", event: "20+ active clients across North Cyprus", detail: "Covering all 6 major TRNC cities" },
  { year: "2026", event: "Launched mzubairkhan.com", detail: "Full-service digital marketing for North Cyprus businesses" },
];

const values = [
  { title: "Transparency First", desc: "You always know what I'm doing, why, and what results it's driving. No black box strategies." },
  { title: "Local Market Depth", desc: "I live in Girne. I know North Cyprus. That local knowledge makes my strategies smarter." },
  { title: "Bilingual Expertise", desc: "English AND Turkish SEO. Reaching both expat and local audiences from one specialist." },
  { title: "Industry Focus", desc: "Restaurants, real estate, hotels. Deep expertise beats generic knowledge every time." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                About Me
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                North Cyprus&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
                  Digital Marketing
                </span>{" "}
                Specialist
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;m Zubair Khan — a digital marketing consultant living and working in Girne (Kyrenia), North Cyprus. I help restaurants, real estate agencies, and hotels across TRNC grow their client base through strategic, measurable digital marketing.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                What makes me different: I understand the unique dynamics of the North Cyprus market — the UK expat community, the seasonal tourism patterns, the property investment market, and the need for bilingual English/Turkish strategies. This local depth translates into better results for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  Work With Me
                </Link>
                <Link href="/portfolio" className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-purple-500/50 hover:bg-white/5 transition-all">
                  See My Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 to-violet-600/10 rounded-3xl blur-2xl scale-110" />
              <div className="relative h-[480px] rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl">
                <Image src="/zubair.png" alt="Zubair Khan, Digital Marketing Consultant in Girne, North Cyprus" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111111] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-6 h-6 text-purple-400" />, value: "2+", label: "Years in North Cyprus" },
              { icon: <Users className="w-6 h-6 text-blue-400" />, value: "20+", label: "Clients Served" },
              { icon: <Target className="w-6 h-6 text-green-400" />, value: "30+", label: "Projects Completed" },
              { icon: <MapPin className="w-6 h-6 text-orange-400" />, value: "98%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex justify-center mb-3">{s.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story / Journey */}
      <section className="bg-[#FAF9F7] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                My Journey
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How I Became North Cyprus&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
                  Go-To Digital Marketer
                </span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  When I arrived in Girne, I immediately noticed a massive gap: beautiful restaurants on Kyrenia harbour with no Google presence, real estate agencies with no strategy for reaching UK buyers online, and boutique hotels invisible to international tourists booking on their phones.
                </p>
                <p>
                  The North Cyprus market is genuinely unique. You&apos;re dealing with multiple distinct audiences — British expats who&apos;ve retired here, UK and Scandinavian property investors, summer tourists, university students, and local Turkish Cypriot customers. Most agencies treat these audiences the same way. I don&apos;t.
                </p>
                <p>
                  Over 2+ years, I&apos;ve refined bilingual SEO strategies that work in both Google.co.uk and Google.com.tr, built ad funnels specifically designed for the TRNC property buying journey, and developed seasonal content strategies for hotels that keep occupancy up year-round.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Milestones</h3>
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A855F7] to-[#7C3AED] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {m.year.slice(2)}
                      </div>
                      {i < milestones.length - 1 && <div className="w-px flex-1 bg-purple-200 mt-2" />}
                    </div>
                    <div className="pb-6">
                      <span className="text-purple-600 text-xs font-semibold">{m.year}</span>
                      <p className="text-gray-900 font-semibold mt-0.5">{m.event}</p>
                      <p className="text-gray-500 text-sm">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
                Believe In
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                <CheckCircle className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="text-gray-900 font-bold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0a0a0a] to-[#1a0a2e] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to work with a North Cyprus specialist?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free consultation and let&apos;s discuss what digital marketing can do for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/40 transition-all"
          >
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
