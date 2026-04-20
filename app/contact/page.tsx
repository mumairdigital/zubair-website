import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Zubair Khan | Free Digital Marketing Consultation North Cyprus",
  description:
    "Book your free digital marketing consultation. Serving restaurants, real estate agencies & hotels across North Cyprus. WhatsApp: +90 539 111 35 77 | info@mzubairkhan.com",
  alternates: { canonical: "https://mzubairkhan.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
