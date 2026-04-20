import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ResultsDashboard from "@/components/ResultsDashboard";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseMe from "@/components/WhyChooseMe";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import ToolsSection from "@/components/ToolsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { generatePersonSchema, generateProfessionalServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Zubair Khan | Digital Marketing Consultant Girne, North Cyprus",
  description:
    "North Cyprus's leading digital marketing consultant. Local SEO, Google Ads & Web Design for restaurants, real estate & hotels in Girne, Lefkoşa & across TRNC. UK expat market specialist.",
  alternates: { canonical: "https://mzubairkhan.com" },
};

export default function HomePage() {
  const personSchema = generatePersonSchema();
  const serviceSchema = generateProfessionalServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeroSection />
      <ResultsDashboard />
      <ServicesSection />
      <AboutSection />
      <CaseStudies />
      <WhyChooseMe />
      <HowItWorks />
      <Industries />
      <PricingSection />
      <Testimonials />
      <ToolsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
