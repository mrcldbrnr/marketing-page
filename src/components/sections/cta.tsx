import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { cta } from "@/content/landing";

export function Cta() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface px-6 py-16 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {cta.title}
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted text-pretty">{cta.description}</p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href={cta.primaryCta.href} size="lg">
            {cta.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={cta.secondaryCta.href} size="lg" variant="secondary">
            {cta.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
