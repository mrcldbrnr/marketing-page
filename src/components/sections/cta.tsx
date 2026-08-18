import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cta as defaultCta } from "@/content/landing";

type CtaProps = {
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  /** Pass `null` to hide the secondary button entirely. */
  secondaryCta?: { label: string; href: string } | null;
  className?: string;
};

export function Cta({
  title = defaultCta.title,
  description = defaultCta.description,
  primaryCta = defaultCta.primaryCta,
  secondaryCta = defaultCta.secondaryCta,
  className,
}: CtaProps = {}) {
  return (
    <Section className={className}>
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface px-6 py-16 text-center">
        <h2 className="max-w-2xl text-[2rem] font-extrabold tracking-tight text-balance sm:text-[2.375rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-lg leading-relaxed text-muted text-pretty">{description}</p>
        ) : null}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink
            href={primaryCta.href}
            size="lg"
            {...(primaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {primaryCta.label}
            {primaryCta.external ? <Icon name="external" className="size-4" /> : null}
          </ButtonLink>
          {secondaryCta ? (
            <ButtonLink href={secondaryCta.href} size="lg" variant="secondary">
              {secondaryCta.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
