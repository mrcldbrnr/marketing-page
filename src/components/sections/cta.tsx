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
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-[#0000ff] px-6 py-16 text-center">
        <h2 className="max-w-2xl text-[2rem] font-extrabold tracking-tight text-balance text-white sm:text-[2.375rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-lg leading-relaxed text-white text-pretty">{description}</p>
        ) : null}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink
            href={primaryCta.href}
            size="lg"
            className="border-2 border-transparent bg-white text-[#0000ff] hover:border-white hover:bg-transparent hover:text-white active:border-white active:bg-transparent active:text-white focus-visible:outline-white"
            {...(primaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {primaryCta.label}
            {primaryCta.external ? <Icon name="external" className="size-4" /> : null}
          </ButtonLink>
          {secondaryCta ? (
            <ButtonLink
              href={secondaryCta.href}
              size="lg"
              variant="secondary"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0000ff] focus-visible:outline-white"
            >
              {secondaryCta.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
