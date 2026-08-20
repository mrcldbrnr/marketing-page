import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { why } from "@/content/why";

export function UsecaseStory() {
  return (
    <Section>
      <SectionHeading title={why.story.title} />

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-8">
        <p className="text-lg leading-relaxed text-muted text-pretty">{why.story.intro}</p>

        <div className="relative h-[404px] w-full overflow-hidden rounded-3xl">
          <Image
            src={why.story.imageSrc}
            alt={why.story.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>

        {why.story.beats.map((beat) => (
          <div key={beat.heading} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{beat.heading}</h3>
            {beat.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-muted text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <p className="mt-4 text-center text-2xl font-semibold text-balance text-foreground">
          {why.story.closing}
        </p>
      </div>
    </Section>
  );
}
