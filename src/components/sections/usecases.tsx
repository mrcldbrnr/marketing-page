import { why } from "@/content/why";

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

/** Usecases in a zig-zagging text+visual layout. Sides flip at `lg` based on index. */
export function Usecases() {
  return (
    <div className="flex flex-col">
      {why.usecases.map((usecase, index) => {
        const flip = index % 2 === 1;
        return (
          <div key={usecase.title} className="border-t border-border py-16 first:border-t-0 first:pt-0 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={flip ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}>
                <p className="text-sm font-semibold tracking-wide text-accent uppercase">{usecase.persona}</p>
                <h2 className="mt-2 text-[1.625rem] font-extrabold tracking-tight text-balance sm:text-[2rem]">
                  {usecase.title}
                </h2>
                <blockquote className="mt-4 border-l-2 border-accent pl-4 text-[1.5rem] leading-relaxed text-[#0000ff] text-pretty">
                  «{usecase.quote}»
                </blockquote>
                <ul className="mt-6 flex flex-col gap-2.5 text-sm">
                  {usecase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-surface lg:col-span-7">
                <div className="flex h-full flex-col items-center justify-center gap-1 text-center text-sm text-muted">
                  <p>Screenshot / Produktvideo</p>
                  <p>{usecase.title}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
