import { why } from "@/content/why";

/** Reduced press "logos" as plain text wordmarks — no real branding to show. */
export function PressMentions() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {why.press.map((item) => (
        <div key={item.outlet} className="flex flex-col gap-3 border-t border-border pt-6">
          <p className="text-sm font-semibold tracking-wide text-[#0000ff] uppercase">{item.outlet}</p>
          <blockquote className="text-[1.75rem] leading-snug text-muted text-pretty">«{item.quote}»</blockquote>
        </div>
      ))}
    </div>
  );
}
