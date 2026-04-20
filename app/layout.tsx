import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  metadataBase: new URL("https://mzubairkhan.com"),
  title: {
    default: "Zubair Khan | Digital Marketing Consultant in Girne, North Cyprus",
    template: "%s | Zubair Khan — North Cyprus Digital Marketing",
  },
  description:
    "Expert digital marketing consultant in Girne (Kyrenia), North Cyprus. Local SEO, Google Ads, Meta Ads & Web Design for restaurants, real estate agencies & hotels. English & Turkish SEO specialist.",
  keywords: [
    "digital marketing North Cyprus",
    "SEO Girne",
    "local SEO TRNC",
    "Google Ads North Cyprus",
    "web design Kyrenia",
    "digital marketing consultant Girne",
    "UK expat marketing North Cyprus",
  ],
  authors: [{ name: "Zubair Khan", url: "https://mzubairkhan.com" }],
  creator: "Zubair Khan",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mzubairkhan.com",
    siteName: "Zubair Khan — Digital Marketing",
    title: "Zubair Khan | Digital Marketing Consultant in Girne, North Cyprus",
    description:
      "Expert digital marketing consultant in Girne (Kyrenia), North Cyprus. Local SEO, Google Ads, Meta Ads & Web Design for restaurants, real estate agencies & hotels.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zubair Khan | Digital Marketing Consultant North Cyprus",
    description: "Local SEO, Google Ads & Web Design for North Cyprus businesses",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
