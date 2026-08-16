import { Section, SectionHeading } from "@/components/ui/section";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { pricing } from "@/content/pricing";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Preisplan",
  description: pricing.description,
  path: "/preisplan",
});

export default function PricingPage() {
  return (
    <>
      <Section containerWidth="wide" className="pt-[2.25rem] lg:pt-[4.25rem]">
        <SectionHeading
          as="h1"
          eyebrow="Preisplan"
          title={pricing.title}
          description={pricing.description}
          className="mb-26"
        />
        <PricingPlans />
      </Section>
      <Faq />
      <Cta />
    </>
  );
}
