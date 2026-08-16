import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { hero } from "@/content/landing";

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
          <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
            {hero.description}
          </p>

          <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          {hero.note ? <p className="text-sm text-muted">{hero.note}</p> : null}
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
