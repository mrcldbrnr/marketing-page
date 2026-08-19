import Image from "next/image";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Feature } from "@/content/funktionen";

type FeatureRowProps = {
  feature: Feature;
  index: number;
};

/** One zig-zagging text+visual row. Sides flip at `lg` based on `index`; below `lg` text always leads. */
export function FeatureRow({ feature, index }: FeatureRowProps) {
  const flip = index % 2 === 1;

  return (
    <div className="border-t border-border py-16 first:border-t-0 first:pt-0 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">{feature.kicker}</p>
        <h2 className="mt-2 text-[1.625rem] font-extrabold tracking-tight text-balance sm:text-[2rem]">
          {feature.title}
        </h2>
      </div>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className={flip ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}>
          <p className="text-lg leading-relaxed text-muted text-pretty">{feature.description}</p>
          <div className="mt-6">
            <FeatureContentBlock content={feature.content} />
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:col-span-7">
          <Image
            src={feature.visualSrc}
            alt={feature.visualCaption}
            fill
            unoptimized={feature.visualSrc.endsWith(".gif")}
            className="object-cover object-top"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m5 12 5 5L19 7" />
    </svg>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5 text-base">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeatureContentBlock({ content }: { content: Feature["content"] }) {
  switch (content.kind) {
    case "bulletsWithNote":
      return (
        <div className="flex flex-col gap-4">
          <BulletList items={content.items} />
          {content.note ? <p className="text-sm text-muted">{content.note}</p> : null}
        </div>
      );

    case "bulletsWithExample":
      return (
        <div className="flex flex-col gap-4">
          <BulletList items={content.items} />
          {content.example ? (
            <div className="rounded-2xl border border-border bg-surface p-4 text-sm">
              <p>
                <span className="text-muted">Suche:</span> {content.example.search}
              </p>
              <p className="mt-1">
                <span className="text-muted">Treffer:</span> {content.example.hit}
              </p>
              <p className="mt-1">
                <span className="text-muted">Standort:</span> {content.example.location}
              </p>
            </div>
          ) : null}
        </div>
      );

    case "statusExamples":
      return (
        <div className="flex flex-col gap-5">
          <ul className="flex flex-col gap-2.5 text-base">
            {content.items.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-3">
                {item.label}
                <StatusBadge kind="status" value={item.status} />
              </li>
            ))}
          </ul>
          {content.secondaryTitle && content.secondaryItems ? (
            <div>
              <p className="text-sm font-semibold text-muted">{content.secondaryTitle}</p>
              <BulletList items={content.secondaryItems} />
            </div>
          ) : null}
        </div>
      );

    case "pairs":
      return (
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2.5 text-base">
            {content.pairs.map((pair) => (
              <li key={`${pair.from}-${pair.to}`}>
                {pair.from} {content.arrow} {pair.to}
              </li>
            ))}
          </ul>
          {content.note ? <p className="text-sm text-muted">{content.note}</p> : null}
        </div>
      );

    case "bulletsWithProgress":
      return (
        <div className="flex flex-col gap-4">
          <BulletList items={content.items} />
          <div className="rounded-2xl border border-border bg-surface p-4 text-sm">
            <div className="flex items-center justify-between">
              <span>{content.example.label}</span>
              <span className="text-muted">
                {content.example.done} von {content.example.total} eingepackt
              </span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-border">
              <div
                className="h-2 rounded-full bg-accent"
                style={{ width: `${(content.example.done / content.example.total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      );

    case "badgeGroups":
      return (
        <div className="flex flex-col gap-5">
          {content.groups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-semibold text-muted">{group.label}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.values.map((value) => (
                  <StatusBadge key={value} kind={group.kind} value={value} />
                ))}
              </div>
            </div>
          ))}
          {content.note ? <p className="text-sm text-muted">{content.note}</p> : null}
        </div>
      );

    case "sumList":
      return (
        <div className="flex flex-col gap-4">
          <BulletList items={content.items} />
          {content.note ? <p className="text-sm text-muted">{content.note}</p> : null}
        </div>
      );

    default:
      return content satisfies never;
  }
}
