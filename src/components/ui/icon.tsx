/**
 * Minimal inline icon set (stroke-based, 24×24 grid).
 * Add new icons here so the site never pulls in an icon library it barely uses.
 */

const paths = {
  map: "M9 4 3 7v13l6-3 6 3 6-3V4l-6 3-6-3Zm0 0v13m6-10v13",
  bolt: "M13 3 5 14h6l-1 7 8-11h-6l1-7Z",
  chart: "M4 20h16M7 16v-5m5 5V7m5 9v-7",
  shield: "M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Zm-2.5 8.5 2 2 4-4",
  plug: "M9 3v5m6-5v5M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8Zm6 12v2",
  chat: "M20 12a7 7 0 0 1-7 7H8l-4 3 1.2-4.2A7 7 0 0 1 11 5h2a7 7 0 0 1 7 7Z",
  external: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14 21 3",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
