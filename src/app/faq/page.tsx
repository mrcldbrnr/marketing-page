import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { faqPage } from "@/content/faq";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ",
  description: faqPage.hero.description,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Faq
        headingLevel="h1"
        title={faqPage.hero.title}
        description={faqPage.hero.description}
        className="pt-[2.25rem] pb-[60px] lg:pt-[4.25rem] lg:pb-[60px]"
      />
      <Cta
        title={faqPage.cta.title}
        description=""
        primaryCta={{ label: faqPage.cta.label, href: "/funktionen" }}
        secondaryCta={{ label: faqPage.cta.secondaryLabel, href: "/preisplan" }}
        className="pt-[60px] lg:pt-[60px]"
      />
    </>
  );
}
