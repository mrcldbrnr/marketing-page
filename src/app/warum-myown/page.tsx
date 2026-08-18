import { Section, SectionHeading } from "@/components/ui/section";
import { Usecases } from "@/components/sections/usecases";
import { TestimonialGrid } from "@/components/sections/testimonial-grid";
import { PressMentions } from "@/components/sections/press-mentions";
import { Cta } from "@/components/sections/cta";
import { why } from "@/content/why";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Warum myown",
  description: why.hero.description,
  path: "/warum-myown",
});

export default function WhyPage() {
  return (
    <>
      <Section className="pt-[2.25rem] lg:pt-[4.25rem]">
        <SectionHeading as="h1" eyebrow="Warum myown" title={why.hero.title} description={why.hero.description} />
        <div className="mt-26">
          <Usecases />
        </div>
      </Section>

      <Section tone="surface">
        <p className="text-center text-sm font-semibold tracking-wide text-accent uppercase">Kundenstimmen</p>
        <div className="mt-10">
          <TestimonialGrid />
        </div>
      </Section>

      <Section>
        <p className="text-center text-sm font-semibold tracking-wide text-accent uppercase">Medienberichte</p>
        <div className="mt-10">
          <PressMentions />
        </div>
      </Section>

      <Cta
        title={why.cta.title}
        description=""
        primaryCta={{ label: why.cta.label, href: siteConfig.appUrl, external: true }}
        secondaryCta={{ label: why.cta.secondaryLabel, href: "/funktionen" }}
      />
    </>
  );
}
