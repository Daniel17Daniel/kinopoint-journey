export type SkillItem = { title: string; desc: string };

interface Props {
  heading: string;
  items: SkillItem[];
}

export const SkillsList = ({ heading, items }: Props) => {
  return (
    <section className="container-wide py-14 md:py-20">
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-16">
        <div className="md:w-2/5 md:sticky md:top-8">
          <div className="eyebrow mb-4">Що ти навчишся</div>
          <h2 className="h-section text-balance">{heading}</h2>
        </div>

        <div className="md:w-3/5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="flex items-start gap-4 border-b border-border/30 py-4 last:border-0"
            >
              <span
                className="text-5xl font-black text-gold/15 leading-none min-w-[48px]"
                style={{ fontFamily: "Georgia, serif" }}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-2">
                <p className="text-sm font-semibold text-foreground mb-1">{it.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsList;
