import Link from "next/link";

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.2 8.2 0 004.79 1.52V6.82a4.85 4.85 0 01-1.02-.13z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-purple-500/40">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zubair Khan</span>
            </Link>
            <p className="text-purple-400 font-semibold text-sm mb-3">
              Digital Marketing Consultant · Girne, North Cyprus
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Helping North Cyprus restaurants, real estate agencies & hotels dominate Google and grow their client base — in English & Turkish.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://instagram.com/mzubairkhan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com/mzubairkhan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com/in/mzubairkhan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://tiktok.com/@mzubairkhan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Local SEO", href: "/services/local-seo" },
                { label: "Google Ads", href: "/services/google-ads" },
                { label: "Meta Ads", href: "/services/meta-ads" },
                { label: "Web Design", href: "/services/web-design" },
                { label: "SEO Audit", href: "/services/seo-audit" },
                { label: "Google Business Profile", href: "/services/google-business-profile" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-purple-300 transition-colors inline-block">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Locations</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Girne", href: "/locations/girne" },
                { label: "Lefkoşa", href: "/locations/lefkosa" },
                { label: "Gazimağusa", href: "/locations/gazimagusa" },
                { label: "İskele", href: "/locations/iskele" },
                { label: "Lapta", href: "/locations/lapta" },
                { label: "Güzelyurt", href: "/locations/guzelyurt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-purple-300 transition-colors inline-block">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-purple-300 transition-colors inline-block">{item.label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:info@mzubairkhan.com" className="text-gray-400 text-xs hover:text-purple-300 transition-colors inline-block">
                  info@mzubairkhan.com
                </a>
              </li>
              <li>
                <a href="tel:+905391113577" className="text-gray-400 text-xs hover:text-purple-300 transition-colors inline-block">
                  +90 539 111 35 77
                </a>
              </li>
              <li>
                <span className="text-gray-500 text-xs">Girne, North Cyprus</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Zubair Khan. All rights reserved. |{" "}
            <span className="text-purple-400">mzubairkhan.com</span>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
