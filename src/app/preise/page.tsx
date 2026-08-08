import { Section, SectionHeading } from "@/components/ui/section";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { pricing } from "@/content/pricing";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Preise",
  description: pricing.description,
  path: "/preise",
});

export default function PricingPage() {
  return (
    <>
      <Section containerWidth="wide">
        <SectionHeading
          as="h1"
          eyebrow="Preise"
          title={pricing.title}
          description={pricing.description}
          className="mb-16"
        />
        <PricingPlans />
      </Section>
      <Faq />
      <Cta />
    </>
  );
}
