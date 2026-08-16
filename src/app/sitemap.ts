import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/metadata";

/**
 * Static route list. When dynamic routes (blog, case studies) are added,
 * fetch them here and concatenate.
 */
const routes: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/funktionen", priority: 0.9, changeFrequency: "monthly" },
  { path: "/preisplan", priority: 0.9, changeFrequency: "monthly" },
  { path: "/warum-myown", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ueber-uns", priority: 0.6, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" },
  { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
  { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
