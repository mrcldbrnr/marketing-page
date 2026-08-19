import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

/**
 * Resolve the canonical base URL.
 *
 * Vercel injects `VERCEL_PROJECT_PRODUCTION_URL` (stable production domain) and
 * `VERCEL_URL` (per-deployment domain). Preview deployments therefore get
 * correct absolute URLs for OG images without hardcoding anything.
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return siteConfig.url;
}

type PageMetadataInput = {
  title: string;
  description?: string;
  /** Path relative to the site root, e.g. "/preisplan". */
  path: string;
  /** Set for pages that should stay out of the index (thank-you pages, etc.). */
  noIndex?: boolean;
};

/**
 * Build per-page metadata with a canonical URL and Open Graph defaults.
 * The root layout supplies the site-wide fallbacks; this only fills in the
 * page-specific parts.
 */
export function createMetadata({
  title,
  description = siteConfig.description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
