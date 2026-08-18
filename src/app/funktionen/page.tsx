import { Section, SectionHeading } from "@/components/ui/section";
import { FeatureRow } from "@/components/sections/feature-row";
import { Cta } from "@/components/sections/cta";
import { funktionen } from "@/content/funktionen";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Funktionen",
  description: funktionen.intro.description,
  path: "/funktionen",
});

export default function FeaturesPage() {
  return (
    <>
      <Section containerWidth="wide" className="pt-[2.25rem] lg:pt-[4.25rem]">
        <SectionHeading
          as="h1"
          eyebrow="Funktionen"
          title={funktionen.intro.title}
          description={funktionen.intro.description}
        />

        <div className="mt-26 flex flex-col">
          {funktionen.features.map((feature, index) => (
            <FeatureRow key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </Section>

      <Cta
        title={funktionen.cta.title}
        description={funktionen.cta.description}
        primaryCta={{ label: funktionen.cta.label, href: siteConfig.appUrl, external: true }}
        secondaryCta={null}
      />
    </>
  );
}
