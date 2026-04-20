import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mzubairkhan.com";
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/local-seo", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/web-design", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/google-ads", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/meta-ads", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/seo-audit", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/google-business-profile", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/blog/local-seo-for-restaurants-in-north-cyprus", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
    { url: "/locations/girne", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/lefkosa", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/gazimagusa", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/iskele", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/lapta", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/locations/guzelyurt", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
