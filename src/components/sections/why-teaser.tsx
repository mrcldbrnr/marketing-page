import { Section } from "@/components/ui/section";
import { whyTeaser } from "@/content/landing";

export function WhyTeaser() {
  return (
    <Section tone="surface">
      <blockquote className="mx-auto max-w-3xl text-center text-2xl leading-snug font-semibold text-balance text-[#0000ff] sm:text-3xl">
        «{whyTeaser.quote}»
      </blockquote>
      <p className="mt-8 text-center">
        <span className="block text-lg font-semibold">{whyTeaser.person}</span>
        <span className="block text-muted">{whyTeaser.role}</span>
      </p>
    </Section>
  );
}
