export type HowStep = { title: string; desc: string };

interface Props {
  heading: string;
  steps: HowStep[];
}

export const HowItWorks = ({ heading, steps }: Props) => {
  return (
    <section className="container-wide py-20 md:py-28">
      <div className="max-w-2xl mb-8">
        <div className="eyebrow mb-4">Як ми працюємо</div>
        <h2 className="h-section text-balance">{heading}</h2>
      </div>

      <div className="relative max-w-3xl">
        <div
          className="absolute top-2 bottom-2 w-px pointer-events-none"
          style={{
            left: "9px",
            background:
              "linear-gradient(to bottom, hsl(var(--gold) / 0.5), hsl(var(--primary) / 0.3), transparent)",
          }}
          aria-hidden
        />
        {steps.map((s) => (
          <div key={s.title} className="relative flex gap-5 items-start pl-8 mb-5 last:mb-0">
            <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-background border-2 border-gold/60 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold/80" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">{s.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
