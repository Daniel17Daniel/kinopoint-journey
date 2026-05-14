import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CourseMapNode = {
  icon: LucideIcon;
  title: string;
  text: string;
  accent?: "red" | "gold" | "green";
  pulse?: boolean;
};

export type CourseMapCenter = {
  icon: LucideIcon;
  eyebrow?: string;
  title: string;
  text: string;
};

const accentMap = {
  red: {
    icon: "bg-primary/15 text-primary border-primary/40",
    glow: "from-primary/20",
    ring: "group-hover:border-primary/60",
  },
  gold: {
    icon: "bg-gold/15 text-gold border-gold/40",
    glow: "from-gold/20",
    ring: "group-hover:border-gold/60",
  },
  green: {
    icon: "bg-success/15 text-success border-success/40",
    glow: "from-success/20",
    ring: "group-hover:border-success/50",
  },
};

export const CourseMap = ({
  center,
  nodes,
}: {
  center: CourseMapCenter;
  nodes: CourseMapNode[];
}) => {
  const CenterIcon = center.icon;

  return (
    <div className="relative">
      {/* Decorative ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[520px] blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.18), transparent 70%)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[680px] blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.08), transparent 70%)" }}
        />
      </div>

      {/* Center card */}
      <div className="relative max-w-xl mx-auto">
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/15 via-gold/10 to-transparent blur-2xl opacity-80" />
        <div className="relative rounded-3xl border border-gold/40 bg-gradient-to-br from-surface-2 via-surface to-background p-7 md:p-9 text-center overflow-hidden">
          <div className="absolute inset-0 grid-frame opacity-[0.07]" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-64 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
          <div className="relative">
            <span className="inline-flex items-center justify-center size-16 md:size-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-red mb-5">
              <CenterIcon className="size-7 md:size-9" />
            </span>
            {center.eyebrow && (
              <div className="eyebrow justify-center mb-3 text-gold">{center.eyebrow}</div>
            )}
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-3 text-balance">
              {center.title}
            </h3>
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base max-w-md mx-auto">
              {center.text}
            </p>
          </div>
        </div>
      </div>

      {/* Connecting line (desktop only) */}
      <div className="hidden lg:block relative h-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 size-2 rounded-full bg-gold shadow-gold" />
      </div>

      {/* Nodes grid */}
      <div className="mt-8 lg:mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {nodes.map((n, i) => {
          const Icon = n.icon;
          const a = accentMap[n.accent ?? "red"];
          return (
            <div
              key={i}
              className={cn(
                "group relative rounded-2xl border border-border-strong bg-surface/80 backdrop-blur-sm p-5 md:p-6 transition-all duration-300",
                "hover:-translate-y-1 hover:bg-surface-2",
                a.ring,
              )}
            >
              {/* Soft glow */}
              <div className={cn(
                "pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                a.glow,
              )} />
              {/* Node connector dot */}
              <div className="absolute -top-1.5 left-6 size-3 rounded-full bg-background border border-gold/50" />

              <div className="relative">
                <div className="flex items-start gap-3 mb-2">
                  <span
                    className={cn(
                      "inline-flex items-center justify-center size-11 rounded-xl border shrink-0 transition-transform group-hover:scale-110",
                      a.icon,
                      n.pulse && "animate-pulse-glow",
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <p className="font-display font-semibold text-base md:text-lg leading-snug pt-1.5">
                    {n.title}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
