import { Section, SectionHeading } from "@/components/ui/section";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { Cta } from "@/components/sections/cta";
import { pricing } from "@/content/pricing";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Preisplan",
  description: pricing.hero.description,
  path: "/preisplan",
});

export default function PricingPage() {
  return (
    <>
      <Section containerWidth="wide" className="pt-[2.25rem] pb-[60px] lg:pt-[4.25rem] lg:pb-[60px]">
        <SectionHeading
          as="h1"
          eyebrow="Preisplan"
          title={pricing.hero.title}
          description={pricing.hero.description}
          className="mb-26"
        />
        <PricingPlans />
      </Section>

      <Cta
        title={pricing.cta.title}
        description={pricing.cta.description}
        primaryCta={{ label: pricing.cta.label, href: siteConfig.appUrl, external: true }}
        secondaryCta={null}
        className="pt-[60px] lg:pt-[60px]"
      />
    </>
  );
}
