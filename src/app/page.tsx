import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Benefits } from "@/components/sections/benefits";
import { FeaturesTeaser } from "@/components/sections/features-teaser";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { WhyTeaser } from "@/components/sections/why-teaser";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { faq, faqTeaser, cta as ctaContent } from "@/content/landing";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  const faqTeaserItems = faq.items.filter((item) => faqTeaser.questions.includes(item.question));

  return (
    <>
      <Hero />
      <FeaturesTeaser />
      <Benefits />
      <Problem />
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
