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
  return (
    <Section>
      <SectionHeading title={why.story.title} />

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-6 text-lg leading-relaxed text-muted text-pretty">
        {why.story.paragraphs.map((paragraph, index) => (
          <p key={index}>{renderWithBold(paragraph)}</p>
        ))}
        <p className="mt-4 text-center text-2xl font-semibold text-balance text-foreground">
          {why.story.closing}
        </p>
      </div>
    </Section>
  );
}
