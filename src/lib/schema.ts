import { siteConfig } from "@/content/site";
import { getBaseUrl } from "@/lib/metadata";

/** Sitewide Organization + WebSite graph, rendered once in the root layout. */
export function organizationAndWebsiteSchema() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: siteConfig.name,
        url: baseUrl,
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        name: siteConfig.name,
        url: baseUrl,
        inLanguage: "de-CH",
        publisher: { "@id": `${baseUrl}/#organization` },
      },
    ],
  };
}

/** FAQPage schema from a question/answer list — pass the exact items shown on the page. */
export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
