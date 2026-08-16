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
      <Section containerWidth="wide">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            as="h1"
            align="left"
            title={funktionen.intro.title}
            description={funktionen.intro.description}
          />
        </div>

        <div className="mt-16 flex flex-col">
          {funktionen.features.map((feature, index) => (
            <FeatureRow key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </Section>

      <Cta
        title={funktionen.cta.title}
        primaryCta={{ label: funktionen.cta.label, href: siteConfig.appUrl, external: true }}
        secondaryCta={null}
      />
    </>
  );
}
