import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ServicePageLayoutProps {
  icon: ReactNode;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  features: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: { label: string; href: string }[];
}

export default function ServicePageLayout({
  icon,
  badge,
  title,
  titleHighlight,
  description,
  features,
  process,
  faqs,
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-600/15 blur-3xl animate-orb-1" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl animate-orb-2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                {badge}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                {title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
                  {titleHighlight}
                </span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  Get Free Consultation
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
            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-3xl bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <div className="w-24 h-24 lg:w-32 lg:h-32">{icon}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#FAF9F7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What&apos;s Included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-purple-200 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0a0a0a] py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-80 h-80 rounded-full bg-purple-600/8 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="text-4xl font-black text-purple-500/30 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-white font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#FAF9F7] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-white rounded-2xl border border-gray-100">
                <h3 className="text-gray-900 font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-200 text-purple-700 font-medium text-sm hover:bg-purple-50 hover:border-purple-400 transition-all"
              >
                {s.label} <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0a0a0a] to-[#1a0a2e] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8">
            Book a free 30-minute consultation. No obligations. Just honest advice about what will work for your North Cyprus business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/40 transition-all"
          >
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
