import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

interface LocationPageProps {
  city: string;
  citySlug: string;
  heroHeadline: string;
  heroSub: string;
  whyMatters: string;
  marketInsight: string;
  uniqueOpportunities: string[];
  caseStudyRef: string;
  services: { title: string; desc: string }[];
  schema: object;
}

export default function LocationPage({
  city,
  citySlug,
  heroHeadline,
  heroSub,
  whyMatters,
  marketInsight,
  uniqueOpportunities,
  caseStudyRef,
  services,
  schema,
}: LocationPageProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-purple-400 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations/girne" className="hover:text-white transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-white">{city}</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">{city}, North Cyprus</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">{heroHeadline}</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{heroSub}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Get Free Consultation in {city}
              </Link>
              <a
                href="https://wa.me/905391113577"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-purple-500/50 hover:bg-white/5 transition-all"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Marketing Matters Here */}
      <section className="bg-[#FAF9F7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                Why It Matters
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Why Digital Marketing is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
                  Essential in {city}
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{whyMatters}</p>
              <p className="text-gray-600 leading-relaxed">{marketInsight}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-5">Unique Opportunities in {city}</h3>
              <ul className="space-y-4">
                {uniqueOpportunities.map((opp) => (
                  <li key={opp} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{opp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services in This City */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Digital Marketing Services in {city}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Reference */}
      <section className="bg-[#FAF9F7] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Success Story</h3>
            <p className="text-gray-700 leading-relaxed mb-5">{caseStudyRef}</p>
            <Link href="/portfolio" className="flex items-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-800 group w-fit">
              View Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-gray-900 text-center mb-6">Related Services & Locations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Local SEO", href: "/services/local-seo" },
              { label: "Google Ads", href: "/services/google-ads" },
              { label: "Meta Ads", href: "/services/meta-ads" },
              { label: "Web Design", href: "/services/web-design" },
              { label: "View All Locations", href: "/locations/girne" },
              { label: "Contact Me", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-200 text-purple-700 font-medium text-sm hover:bg-purple-50 hover:border-purple-400 transition-all">
                {l.label} <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0a0a0a] to-[#1a0a2e] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to grow your {city} business online?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free consultation. I&apos;ll review your current online presence and show you exactly how to dominate Google in {city}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-xl hover:shadow-purple-500/40 transition-all"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20">
              <Phone className="w-4 h-4 text-purple-400" />
              <a href="tel:+905391113577" className="text-white font-medium text-sm">+90 539 111 35 77</a>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20">
              <Mail className="w-4 h-4 text-purple-400" />
              <a href="mailto:info@mzubairkhan.com" className="text-white font-medium text-sm">info@mzubairkhan.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
