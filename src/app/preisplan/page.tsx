import { Section, SectionHeading } from "@/components/ui/section";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { PricingComparison } from "@/components/sections/pricing-comparison";
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
      <Section containerWidth="wide" className="pt-[2.25rem] lg:pt-[4.25rem]">
        <SectionHeading
          as="h1"
          eyebrow="Preisplan"
          title={pricing.hero.title}
          description={pricing.hero.description}
          className="mb-26"
        />
        <PricingPlans />
      </Section>

      <Section containerWidth="wide" tone="surface">
        <PricingComparison />
      </Section>

      <Cta
        title={pricing.cta.title}
        description={pricing.cta.description}
        primaryCta={{ label: pricing.cta.label, href: siteConfig.appUrl, external: true }}
        secondaryCta={null}
      />
    </>
  );
}
