import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { pricing } from "@/content/pricing";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Antworten auf die häufigsten Fragen zu myown.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Faq headingLevel="h1" className="pt-[2.25rem] pb-[60px] lg:pt-[4.25rem] lg:pb-[60px]" />
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
