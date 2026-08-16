import { Features } from "@/components/sections/features";
import { Cta } from "@/components/sections/cta";
import { features } from "@/content/landing";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Funktionen",
  description: features.description,
  path: "/funktionen",
});

export default function FeaturesPage() {
  return (
    <>
      <Features headingLevel="h1" />
      <Cta />
    </>
  );
}
