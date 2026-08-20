import { Section, SectionHeading } from "@/components/ui/section";
import { UsecaseSlider } from "@/components/sections/usecase-slider";
import { UsecaseStory } from "@/components/sections/usecase-story";
import { TestimonialGrid } from "@/components/sections/testimonial-grid";
import { PressMentions } from "@/components/sections/press-mentions";
import { Cta } from "@/components/sections/cta";
import { why } from "@/content/why";
import { pricing } from "@/content/pricing";
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
      </Section>

      <Section className="border-y border-border">
        <UsecaseSlider />
      </Section>

      <UsecaseStory />

      <Section tone="surface">
        <p className="text-center text-sm font-semibold tracking-wide text-accent uppercase">Kundenstimmen</p>
        <div className="mt-10">
          <TestimonialGrid />
        </div>
      </Section>

      <Section className="pb-[60px] lg:pb-[60px]">
        <p className="text-center text-sm font-semibold tracking-wide text-accent uppercase">Medienberichte</p>
        <div className="mt-10">
          <PressMentions />
        </div>
      </Section>

      <Cta
        title={pricing.cta.title}
        description={pricing.cta.description}
        primaryCta={{ label: pricing.cta.label, href: siteConfig.appUrl, external: true }}
        secondaryCta={{ label: "Alle Funktionen ansehen", href: "/funktionen" }}
        className="pt-[60px] lg:pt-[60px]"
      />
    </>
  );
}
