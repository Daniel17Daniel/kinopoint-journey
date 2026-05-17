export type HowStep = { title: string; desc: string };

interface Props {
  heading: string;
  steps: HowStep[];
}

export const HowItWorks = ({ heading, steps }: Props) => {
  return (
    <section className="container-wide py-14 md:py-20">
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-16">
        <div className="md:w-2/5 md:sticky md:top-8">
          <div className="eyebrow mb-4">Як ми працюємо</div>
          <h2 className="h-section text-balance">{heading}</h2>
        </div>

        <div className="md:w-3/5">
          <div className="relative">
            <div
              className="absolute top-2 bottom-2 w-px pointer-events-none"
              style={{
                left: "9px",
                background:
                  "linear-gradient(to bottom, hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.7), hsl(var(--primary) / 0.1))",
                backgroundSize: "100% 200%",
                animation: "timelineFlow 4s ease-in-out infinite",
              }}
              aria-hidden
            />
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`relative flex gap-5 items-start pl-8 ${i === steps.length - 1 ? "mb-0" : "mb-5"}`}
              >
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary/70 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{s.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
