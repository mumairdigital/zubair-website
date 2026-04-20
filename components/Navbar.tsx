"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Web Design", href: "/services/web-design" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "SEO Audit", href: "/services/seo-audit" },
  { label: "Google Business Profile", href: "/services/google-business-profile" },
];

const locations = [
  { label: "Girne", href: "/locations/girne" },
  { label: "Lefkoşa", href: "/locations/lefkosa" },
  { label: "Gazimağusa", href: "/locations/gazimagusa" },
  { label: "İskele", href: "/locations/iskele" },
  { label: "Lapta", href: "/locations/lapta" },
  { label: "Güzelyurt", href: "/locations/guzelyurt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileLocations, setMobileLocations] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl shadow-lg shadow-purple-900/10 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-purple-500/40 group-hover:shadow-purple-500/70 transition-all duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Zubair Khan
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white px-3.5 py-2 rounded-xl text-[0.9rem] font-medium transition-all duration-200 hover:bg-white/5">Home</Link>
              <Link href="/about" className="inline-flex items-center text-gray-300 hover:text-white px-3.5 py-2 rounded-xl text-[0.9rem] font-medium transition-all duration-200 hover:bg-white/5">About</Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="inline-flex items-center gap-1 text-gray-300 hover:text-white px-3.5 py-2 rounded-xl text-[0.9rem] font-medium transition-all duration-200 hover:bg-white/5 border-none bg-transparent cursor-pointer">
                  Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-60 bg-[#111111] border border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-900/30 overflow-hidden"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200 text-sm font-medium"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/portfolio" className="inline-flex items-center text-gray-300 hover:text-white px-3.5 py-2 rounded-xl text-[0.9rem] font-medium transition-all duration-200 hover:bg-white/5">Portfolio</Link>
              <Link href="/blog" className="inline-flex items-center text-gray-300 hover:text-white px-3.5 py-2 rounded-xl text-[0.9rem] font-medium transition-all duration-200 hover:bg-white/5">Blog</Link>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <button className="inline-flex items-center gap-1 text-gray-300 hover:text-white px-3.5 py-2 rounded-xl text-[0.9rem] font-medium transition-all duration-200 hover:bg-white/5 border-none bg-transparent cursor-pointer">
                  Locations <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {locationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-[#111111] border border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-900/30 overflow-hidden"
                    >
                      {locations.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200 text-sm font-medium"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" className="inline-flex items-center text-gray-300 hover:text-white px-3.5 py-2 rounded-xl text-[0.9rem] font-medium transition-all duration-200 hover:bg-white/5">Contact</Link>
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 animate-pulse-glow"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] z-50 lg:hidden border-l border-purple-500/20 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#7C3AED] flex items-center justify-center">
                    <span className="text-white font-bold">Z</span>
                  </div>
                  <span className="text-white font-bold">Zubair Khan</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServices(!mobileServices)}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors font-medium"
                  >
                    Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServices && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 pb-2">
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2.5 text-gray-400 hover:text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors text-sm"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Locations Accordion */}
                <div>
                  <button
                    onClick={() => setMobileLocations(!mobileLocations)}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors font-medium"
                  >
                    Locations <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocations ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileLocations && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 pb-2">
                          {locations.map((l) => (
                            <Link
                              key={l.href}
                              href={l.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2.5 text-gray-400 hover:text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors text-sm"
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile CTAs */}
              <div className="p-6 space-y-3 border-t border-white/5">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition-all"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="https://wa.me/905391113577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
