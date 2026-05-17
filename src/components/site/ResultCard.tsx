import { Link } from "react-router-dom";

interface Props {
  heading: string;
  items: string[];
  note?: string | null;
  showDiscount?: boolean;
}

export const ResultCard = ({ heading, items, note, showDiscount }: Props) => {
  return (
    <section className="container-wide py-14 md:py-20">
      <div className="w-full rounded-2xl border border-border-strong bg-surface/60 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {/* LEFT COLUMN */}
          <div className="flex-1 p-6 md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold/70 mb-2 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-gold/40"></span>
              ЩО ТИ ОТРИМАЄШ
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight mb-6">
              {heading}
            </h2>
            <div className="flex flex-col gap-3">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="w-5 h-5 rounded-md bg-success/10 border border-success/30 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="hsl(var(--success))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-px bg-border/30 my-6" />

          {/* RIGHT COLUMN */}
          <div className="md:w-60 p-6 md:p-8 flex flex-col items-center justify-center gap-4 border-t border-border/20 md:border-t-0">
            {note && (
              <div className="w-full rounded-xl bg-gold/10 border border-gold/20 p-4 text-xs text-gold leading-relaxed text-center">
                {note}
              </div>
            )}
            <Link
              to="/apply"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:scale-[1.02] transition-all"
            >
              Записатись
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {showDiscount && (
              <p className="text-[11px] text-muted-foreground text-center">
                Перший місяць — знижка 50%
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;
