import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface Props {
  heading: string;
  items: string[];
  note?: string | null;
  softCta?: boolean;
}

export const ResultCard = ({ heading, items, note }: Props) => {
  return (
    <section className="container-wide py-16 md:py-24">
      <div className="max-w-2xl mb-8">
        <div className="eyebrow mb-4">Що ти отримаєш</div>
        <h2 className="h-section text-balance">{heading}</h2>
      </div>

      <div className="max-w-2xl rounded-2xl border border-gold/25 bg-gradient-to-br from-surface to-background p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
        <div className="relative">
          <div className="text-3xl mb-4" aria-hidden>🏆</div>
          <div className="flex flex-col gap-3">
            {items.map((t) => (
              <div key={t} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-md bg-success/10 border border-success/30 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                    <path d="M1 4l2.5 2.5L9 1" stroke="hsl(var(--success))" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm text-foreground/85">{t}</span>
              </div>
            ))}
          </div>

          {note && (
            <div className="mt-4 pt-4 border-t border-gold/20">
              <div className="rounded-xl bg-gold/10 border border-gold/20 p-3 flex items-start gap-2 text-sm text-gold font-medium">
                <Sparkles className="size-4 shrink-0 mt-0.5" />
                <span>{note}</span>
              </div>
            </div>
          )}

          <Link
            to="/apply"
            className="mt-5 w-full inline-flex items-center justify-center bg-primary rounded-xl py-3 text-sm font-semibold text-primary-foreground hover:shadow-red transition-all"
          >
            Залишити заявку
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;
