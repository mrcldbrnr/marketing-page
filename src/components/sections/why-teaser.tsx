import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { whyTeaser } from "@/content/landing";

export function WhyTeaser() {
  return (
    <Section tone="surface">
      <blockquote className="mx-auto max-w-3xl text-center text-2xl leading-snug font-semibold text-balance sm:text-3xl">
        «{whyTeaser.quote}»
      </blockquote>

      <ul className="mt-12 flex flex-wrap justify-center gap-4">
        {whyTeaser.usecases.map((usecase) => (
          <li
            key={usecase}
            className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium"
          >
            {usecase}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <ButtonLink href="/warum-myown" variant="secondary" size="lg">
          {whyTeaser.cta}
          <Icon name="arrowRight" className="size-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
