import { Section, SectionHeading } from "@/components/ui/section";
import { UsecaseSlider } from "@/components/sections/usecase-slider";
import { UsecaseStory } from "@/components/sections/usecase-story";
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

      <Section className="border-y border-border bg-[#ffffff]">
        <SectionHeading title={why.examplesIntro.title} description={why.examplesIntro.description} />
        <div className="mt-12">
          <UsecaseSlider />
        </div>
      </Section>

      <UsecaseStory />

      <Section tone="surface">
        <SectionHeading title={why.closingTeaser.title} description={why.closingTeaser.description} />
      </Section>

      <Cta
        title={pricing.cta.title}
        description={pricing.cta.description}
        primaryCta={{ label: pricing.cta.label, href: siteConfig.appUrl, external: true }}
        secondaryCta={{ label: "Alle Funktionen ansehen", href: "/funktionen" }}
      />
    </>
  );
}
