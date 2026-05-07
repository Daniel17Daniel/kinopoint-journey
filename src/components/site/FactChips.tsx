import { Calendar, Clock, Wallet, Users, UserCheck, LucideIcon } from "lucide-react";

export type FactKind = "duration" | "frequency" | "price" | "age" | "group";

const META: Record<FactKind, { Icon: LucideIcon; label: string }> = {
  duration: { Icon: Calendar, label: "Тривалість" },
  frequency: { Icon: Clock, label: "Частота" },
  price: { Icon: Wallet, label: "Вартість" },
  age: { Icon: UserCheck, label: "Вік" },
  group: { Icon: Users, label: "Група" },
};

export interface Fact {
  kind: FactKind;
  value: string;
}

export const FactChips = ({
  facts,
  className = "",
  size = "md",
}: {
  facts: Fact[];
  className?: string;
  size?: "sm" | "md";
}) => {
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {facts.map((f) => {
        const { Icon, label } = META[f.kind];
        const isPrice = f.kind === "price";
        const pad = size === "sm" ? "px-3 py-2" : "px-4 py-2.5";
        return (
          <div
            key={f.kind + f.value}
            className={`group inline-flex items-center gap-2.5 rounded-xl border bg-surface/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${pad} ${
              isPrice
                ? "border-primary/40 hover:border-primary hover:shadow-[0_0_24px_-6px_hsl(var(--primary)/0.6)]"
                : "border-border-strong/70 hover:border-gold/50"
            }`}
          >
            <span
              className={`inline-flex items-center justify-center size-7 rounded-lg shrink-0 transition-colors ${
                isPrice
                  ? "bg-primary/15 text-primary group-hover:bg-primary/25"
                  : "bg-background/60 text-gold/90"
              }`}
            >
              <Icon className="size-3.5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground/80 font-semibold">
                {label}
              </span>
              <span className="text-sm font-semibold text-foreground">{f.value}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
