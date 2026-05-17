import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export type WhoItem = { icon: string; label: string; desc: string; result: string };

interface Props {
  heading: string;
  items: WhoItem[];
  applyTo?: string;
}

export const WhoIsItFor = ({ heading, items, applyTo = "/apply" }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? items[selected] : null;

  return (
    <section className="container-wide py-14 md:py-20">
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-16">
        {/* Left: heading */}
        <div className="md:w-2/5 md:sticky md:top-8">
          <div className="eyebrow mb-4">Для кого цей курс</div>
          <h2 className="h-section text-balance">{heading}</h2>
        </div>

        {/* Right: cards grid */}
        <div className="md:w-3/5">
          <div className="grid grid-cols-2 gap-4">
            {items.map((it, i) => {
              const isActive = selected === i;
              return (
                <button
                  key={it.label}
                  type="button"
                  onClick={() => setSelected(isActive ? null : i)}
                  className={`text-left rounded-2xl bg-surface border p-4 cursor-pointer transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:scale-[1.02] ${
                    isActive
                      ? "border-primary/60 bg-primary/10"
                      : "border-border-strong"
                  }`}
                >
                  <div className="text-2xl mb-2" aria-hidden>{it.icon}</div>
                  <p className="font-display font-semibold text-sm md:text-base mb-1">{it.label}</p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </button>
              );
            })}
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              active ? "mt-3 opacity-100 max-h-96" : "mt-0 opacity-0 max-h-0"
            }`}
          >
            {active && (
              <div className="rounded-xl border border-primary/25 bg-primary/10 p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <p className="text-sm text-primary font-medium flex-1">→ {active.result}</p>
                <Link
                  to={applyTo}
                  className="text-primary text-xs font-medium underline underline-offset-2 ml-1"
                >
                  Записатись →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
