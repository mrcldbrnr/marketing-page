import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();
  // Keep preview deployments out of search results.
  const isProduction = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

  return {
    rules: isProduction ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
