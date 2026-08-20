import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { problem } from "@/content/landing";

/** Same layout as the features teaser: title, image left / text right, button below. */
export function Problem() {
  return (
    <Section tone="surface">
      <SectionHeading title={problem.title} />

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:col-span-7">
          <Image
            src={problem.imageSrc}
            alt={problem.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <p className="text-xl leading-relaxed text-muted text-pretty">{problem.description}</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <ButtonLink href="/warum-myown" variant="primary" size="lg">
          {problem.cta}
          <Icon name="arrowRight" className="size-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
