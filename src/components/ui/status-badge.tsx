import { cn } from "@/lib/cn";

type BadgeKind = "zustand" | "status";

const neutral = "border-border bg-surface text-foreground";
const mutedNeutral = "border-border bg-surface text-muted";
const amber = "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300";
const red = "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400";
const green = "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-400";
const orange = "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-400";
const accent = "border-accent/30 bg-accent/10 text-accent";

const zustandClasses: Record<string, string> = {
  Neu: neutral,
  "Sehr gut": neutral,
  Gut: neutral,
  "Stark gebraucht": amber,
  Defekt: red,
};

const statusClasses: Record<string, string> = {
  Einsatzbereit: green,
  "Wartung notwendig": amber,
  "In Reparatur": orange,
  Ausgeliehen: accent,
  "Nicht verfügbar": mutedNeutral,
  Aussortiert: mutedNeutral,
  // Not a Status value per Funktion 7's own taxonomy (it's a Zustand), but the
  // Funktion-3 dashboard preview tags it inline next to real Status values —
  // give it the same red treatment there so it doesn't read as unstyled.
  Defekt: red,
};

type StatusBadgeProps = {
  kind: BadgeKind;
  value: string;
};

/** Small colour-coded pill for the fixed set of Zustand/Status values used on /funktionen. */
export function StatusBadge({ kind, value }: StatusBadgeProps) {
  const classes = kind === "zustand" ? zustandClasses : statusClasses;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        classes[value] ?? neutral,
      )}
    >
      {value}
    </span>
  );
}
