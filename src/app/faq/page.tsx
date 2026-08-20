import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema } from "@/lib/schema";
import { faqPage } from "@/content/faq";
import { faq } from "@/content/landing";
import { funktionen } from "@/content/funktionen";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Häufige Fragen",
  description: faqPage.hero.description,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faq.items)} />
      <Faq
        headingLevel="h1"
        title={faqPage.hero.title}
        description={faqPage.hero.description}
        className="pt-[2.25rem] pb-[60px] lg:pt-[4.25rem] lg:pb-[60px]"
      />
      <Cta
        title={funktionen.cta.title}
        description={funktionen.cta.description}
        primaryCta={{ label: funktionen.cta.label, href: siteConfig.appUrl, external: true }}
        secondaryCta={{ label: "Usecases entdecken", href: "/warum-myown" }}
        className="pt-[60px] lg:pt-[60px]"
      />
    </>
  );
}
