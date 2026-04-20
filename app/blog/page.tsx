import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | North Cyprus Market Insights | Zubair Khan",
  description:
    "Expert digital marketing insights for North Cyprus businesses. Local SEO tips, Google Ads guides, and market analysis for restaurants, real estate & hotels in TRNC.",
  alternates: { canonical: "https://mzubairkhan.com/blog" },
};

const posts = [
  {
    title: "Local SEO for Restaurants in North Cyprus: The 2026 Kyrenia Harbour Guide",
    excerpt: "A complete guide to ranking your restaurant #1 on Google Maps in North Cyprus — with specific strategies for Kyrenia harbour, UK tourist targeting, and English/Turkish keyword optimisation.",
    date: "15 April 2026",
    category: "Local SEO",
    href: "/blog/local-seo-for-restaurants-in-north-cyprus",
    readTime: "8 min",
  },
  {
    title: "How to Reach UK Property Buyers in North Cyprus with Google Ads",
    excerpt: "Discover the exact Google Ads strategies that generate qualified UK buyer leads for North Cyprus real estate agencies — at under £15 per lead.",
    date: "10 April 2026",
    category: "Real Estate Marketing",
    href: "/blog",
    readTime: "6 min",
  },
  {
    title: "Google Business Profile Optimisation for North Cyprus Hotels",
    excerpt: "Why your Google Business Profile is your most powerful free marketing tool — and exactly how to optimise it to rank #1 on Google Maps in TRNC.",
    date: "5 April 2026",
    category: "Hotel Marketing",
    href: "/blog",
    readTime: "7 min",
  },
  {
    title: "North Cyprus Digital Marketing in 2026: The Complete Market Overview",
    excerpt: "A frank look at the state of digital marketing in TRNC — what's working, what isn't, and the biggest opportunities for restaurants, real estate, and hotels.",
    date: "28 March 2026",
    category: "North Cyprus Market",
    href: "/blog",
    readTime: "10 min",
  },
  {
    title: "Meta Ads for UK Expat Targeting in North Cyprus: Full Strategy Guide",
    excerpt: "How to use Facebook and Instagram ads to reach the 10,000+ British expats living in North Cyprus — and turn them into regular restaurant customers, property buyers, or hotel guests.",
    date: "20 March 2026",
    category: "Google Ads",
    href: "/blog",
    readTime: "9 min",
  },
  {
    title: "Off-Season Hotel Marketing in North Cyprus: Fill Your Rooms Year-Round",
    excerpt: "The seasonal gap is North Cyprus hotels' biggest challenge. Here's a proven strategy to keep occupancy healthy from October through March.",
    date: "12 March 2026",
    category: "Hotel Marketing",
    href: "/blog",
    readTime: "7 min",
  },
];

const categories = [
  "All Posts",
  "Local SEO",
  "Google Ads",
  "Web Design",
  "North Cyprus Market",
  "Real Estate Marketing",
  "Restaurant Marketing",
  "Hotel Marketing",
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Digital Marketing Insights for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              North Cyprus Businesses
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides, market analysis, and strategies built for the TRNC market. No generic content — everything is North Cyprus specific.
          </p>
        </div>
      </section>

      <section className="bg-[#FAF9F7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === "All Posts"
                    ? "bg-purple-600 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>

          <div className="text-center mt-14 p-10 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Want personalised advice for your business?</h2>
            <p className="text-gray-600 mb-6">
              Book a free consultation and get a custom strategy built for your specific North Cyprus business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
