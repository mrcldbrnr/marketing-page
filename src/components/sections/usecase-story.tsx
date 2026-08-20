import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { why } from "@/content/why";

/** Splits on `**bold**` markers and wraps the matched segments in <strong>. */
function renderWithBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function UsecaseStory() {
  const [firstParagraph, ...restParagraphs] = why.story.paragraphs;

  return (
    <Section>
      <SectionHeading title={why.story.title} />

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-6 text-lg leading-relaxed text-muted text-pretty">
        <p>{renderWithBold(firstParagraph)}</p>

        <div className="relative h-[404px] w-full overflow-hidden rounded-3xl">
          <Image
            src={why.story.imageSrc}
            alt={why.story.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>

        {restParagraphs.map((paragraph, index) => (
          <p key={index}>{renderWithBold(paragraph)}</p>
        ))}
        <p className="mt-4 text-center text-2xl font-semibold text-balance text-foreground">
          {why.story.closing}
        </p>
      </div>
    </Section>
  );
}
