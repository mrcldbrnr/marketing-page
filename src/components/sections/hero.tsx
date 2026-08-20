import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { hero } from "@/content/landing";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-section lg:pt-28 lg:pb-section-lg">
      {/* Decorative background wash. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-brand-100),transparent)] opacity-70 dark:opacity-20"
      />

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h1 className="text-[1.75rem] font-extrabold tracking-tight text-balance sm:text-[2.5rem] lg:text-[3.25rem]">
            {hero.title}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
            {hero.description}
          </p>

          <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={siteConfig.appUrl} size="lg" target="_blank" rel="noopener noreferrer">
              {hero.primaryCtaLabel}
              <Icon name="external" className="size-4" />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        {/* Product shot placeholder — replace with next/image once artwork exists. */}
        <div className="mx-auto mt-16 aspect-[16/9] w-full max-w-4xl rounded-3xl border border-border bg-surface">
          <div className="flex h-full items-center justify-center text-sm text-muted">
            Screenshot / Produktvideo
          </div>
        </div>
      </Container>
    </section>
  );
}
