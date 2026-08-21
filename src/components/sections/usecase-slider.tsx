"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { why } from "@/content/why";

const AUTO_ADVANCE_MS = 7000;
/** Fade out, then fade in — each half of the 1s transition. */
const FADE_MS = 500;

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

/**
 * Tabbed slider: image always on the right, text always on the left.
 * Auto-advances every 5s and loops; picking a tab restarts that timer.
 * Switching cross-fades over 1s (500ms out, 500ms in).
 */
export function UsecaseSlider() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((next: number) => {
    setVisible(false);
    window.setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, FADE_MS);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((index + 1) % why.usecases.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index, goTo]);

  return (
    <div>
      <div role="tablist" aria-label="Usecases" className="flex flex-wrap justify-center gap-3">
        {why.usecases.map((item, i) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            id={`usecase-tab-${i}`}
            aria-selected={i === index}
            aria-controls={`usecase-panel-${i}`}
            onClick={() => goTo(i)}
            className={cn(
              "rounded-full border-2 px-5 py-2 text-sm font-medium transition-colors",
              i === index
                ? "border-[#0000ff] bg-[#0000ff] text-white"
                : "border-border bg-background text-foreground hover:border-[#0000ff]",
            )}
          >
            {item.tabLabel}
          </button>
        ))}
      </div>

      {/* All panels are stacked in the same grid cell so the row's height is always
          the tallest panel — this keeps content below the slider from jumping
          vertically when a shorter/taller panel fades in on mobile. */}
      <div className="mt-10 grid">
        {why.usecases.map((usecase, i) => (
          <div
            key={usecase.title}
            id={`usecase-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`usecase-tab-${i}`}
            aria-hidden={i !== index}
            className={cn(
              "col-start-1 row-start-1 grid items-center gap-10 transition-opacity duration-500 ease-in-out lg:grid-cols-12 lg:gap-16",
              i === index && visible ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <div className="lg:col-span-5">
              <h2 className="text-[1.625rem] font-extrabold tracking-tight text-balance sm:text-[2rem]">
                {usecase.title}
              </h2>
              <div className="mt-4 border-l-2 border-accent pl-4">
                <blockquote className="text-[1.5rem] leading-relaxed text-[#0000ff] text-pretty">
                  «{usecase.quote}»
                </blockquote>
                <p className="mt-3 text-[18px] text-black">{usecase.person}</p>
              </div>
              <ul className="mt-6 flex flex-col gap-2.5 text-lg">
                {usecase.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:col-span-7">
              <Image
                src={usecase.visualSrc}
                alt={usecase.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
