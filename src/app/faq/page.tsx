import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Antworten auf die häufigsten Fragen zu myown.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Faq headingLevel="h1" />
      <Cta />
    </>
  );
}
