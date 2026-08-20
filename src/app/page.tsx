import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Benefits } from "@/components/sections/benefits";
import { FeaturesTeaser } from "@/components/sections/features-teaser";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { WhyTeaser } from "@/components/sections/why-teaser";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema } from "@/lib/schema";
import { faq, faqTeaser, cta as ctaContent } from "@/content/landing";
import { siteConfig } from "@/content/site";

const title = `${siteConfig.name} – ${siteConfig.tagline}`;

export const metadata: Metadata = {
  // Absolute title: the homepage title already matches the layout default
  // exactly, so it must bypass the "%s | myown" template rather than run
  // through it (which would double up the brand name).
  title: { absolute: title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title,
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  const faqTeaserItems = faq.items.filter((item) => faqTeaser.questions.includes(item.question));

  return (
    <>
      <JsonLd data={faqPageSchema(faqTeaserItems)} />
      <Hero />
      <Problem />
      <Benefits />
      <FeaturesTeaser />
      <PricingTeaser />
      <WhyTeaser />
      <Faq items={faqTeaserItems} cta={{ label: faqTeaser.cta, href: "/faq" }} />
      <Cta
        title={ctaContent.title}
        description={ctaContent.description}
        primaryCta={{ label: ctaContent.primaryCta.label, href: siteConfig.appUrl, external: true }}
        secondaryCta={null}
      />
    </>
  );
}
