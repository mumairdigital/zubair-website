"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [whatsappLink, setWhatsappLink] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send");

      const waMessage = encodeURIComponent(
        `Hi Zubair! I just submitted a form on mzubairkhan.com.\n\nName: ${data.fullName}\nBusiness: ${data.businessType}\nCity: ${data.city}\nService: ${data.service}\nMessage: ${data.message}`
      );
      setWhatsappLink(`https://wa.me/905391113577?text=${waMessage}`);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-white/5 border ${
      hasError ? "border-red-500/60" : "border-white/10"
    } text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200 text-sm`;

  const selectClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border ${
      hasError ? "border-red-500/60" : "border-white/10"
    } text-white focus:outline-none focus:border-purple-500/60 transition-all duration-200 text-sm`;

  return (
    <section id="contact" className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-violet-600/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Grow Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              North Cyprus Business?
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Book your free consultation — no obligations, no hard sell. Just honest advice on what will work for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Contact Details</h3>
              <div className="space-y-5">
                <a href="mailto:info@mzubairkhan.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="text-white font-medium text-sm">info@mzubairkhan.com</p>
                  </div>
                </a>
                <a href="tel:+905391113577" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Phone / WhatsApp</p>
                    <p className="text-white font-medium text-sm">+90 539 111 35 77</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white font-medium text-sm">Girne, North Cyprus</p>
                  </div>
                </div>
                <a href="https://linkedin.com/in/mzubairkhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <LinkedinIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">LinkedIn</p>
                    <p className="text-white font-medium text-sm">linkedin.com/in/mzubairkhan</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20">
              <p className="text-green-400 font-semibold text-sm mb-2">Prefer WhatsApp?</p>
              <p className="text-gray-400 text-sm mb-4">Message me directly — fastest response guaranteed.</p>
              <a
                href="https://wa.me/905391113577?text=Hi%20Zubair!%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20North%20Cyprus%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors"
              >
                <WhatsAppIcon /> WhatsApp Me Now
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">Thank you! I&apos;ll get back to you within 24 hours. For faster response, continue on WhatsApp:</p>
                {whatsappLink && (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold transition-colors"
                  >
                    <WhatsAppIcon /> Continue on WhatsApp
                  </a>
                )}
                <button onClick={() => setStatus("idle")} className="block mx-auto mt-4 text-gray-500 text-sm hover:text-gray-300">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Full Name *</label>
                    <input {...register("fullName")} placeholder="Your full name" className={inputClass(!!errors.fullName)} />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Email Address *</label>
                    <input {...register("email")} type="email" placeholder="your@email.com" className={inputClass(!!errors.email)} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">WhatsApp Number (optional)</label>
                  <input {...register("whatsapp")} placeholder="+90 539 ..." className={inputClass(false)} />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Business Type *</label>
                    <select {...register("businessType")} className={selectClass(!!errors.businessType)}>
                      <option value="">Select business type</option>
                      <option value="restaurant">Restaurant / Cafe</option>
                      <option value="real-estate">Real Estate Agency</option>
                      <option value="hotel">Hotel / Tourism</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.businessType && <p className="text-red-400 text-xs mt-1">{errors.businessType.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Your City *</label>
                    <select {...register("city")} className={selectClass(!!errors.city)}>
                      <option value="">Select your city</option>
                      <option value="girne">Girne (Kyrenia)</option>
                      <option value="lefkosa">Lefkoşa (Nicosia)</option>
                      <option value="gazimagusa">Gazimağusa (Famagusta)</option>
                      <option value="iskele">İskele</option>
                      <option value="lapta">Lapta</option>
                      <option value="guzelyurt">Güzelyurt</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Service You&apos;re Interested In *</label>
                  <select {...register("service")} className={selectClass(!!errors.service)}>
                    <option value="">Select a service</option>
                    <option value="local-seo">Local SEO</option>
                    <option value="google-ads">Google Ads</option>
                    <option value="meta-ads">Meta Ads (Facebook/Instagram)</option>
                    <option value="web-design">Web Design</option>
                    <option value="seo-audit">SEO Audit</option>
                    <option value="full-package">Full Package</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Your Message *</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell me about your business and what you're looking to achieve..."
                    className={`${inputClass(!!errors.message)} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">Something went wrong. Please try WhatsApp instead.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed animate-pulse-glow"
                >
                  {status === "loading" ? "Sending..." : "Send Message & Get Free Consultation"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
