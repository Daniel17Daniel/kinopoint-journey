import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface DirectionPageProps {
  accent: "gold" | "red";
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  heroImg: string;
  forWho: string[];
  gives: { title: string; text: string }[];
  feel: string[];
  classes: { t: string; d: string }[];
  teacher: { name: string; role: string; bio: string; img: string };
  gallery: string[];
  faq: { q: string; a: string }[];
  applyDirection: "acting" | "journalism";
}

export const DirectionPage = ({
  accent,
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  heroImg,
  forWho,
  gives,
  feel,
  classes,
  teacher,
  gallery,
  faq,
  applyDirection,
}: DirectionPageProps) => {
  const accentText = accent === "gold" ? "text-gold" : "text-primary-glow";
  const accentBg = accent === "gold" ? "bg-gold text-gold-foreground hover:shadow-gold" : "bg-primary text-primary-foreground hover:shadow-red";
  const accentBorder = accent === "gold" ? "border-gold/40" : "border-primary/40";
  const accentSoftBg = accent === "gold" ? "bg-gold/10 text-gold" : "bg-primary/15 text-primary-glow";

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/65 to-background" />
          <div className="absolute inset-0 grid-frame opacity-[0.06]" />
        </div>
        <div className="container-wide relative pt-20 pb-28 md:pt-28 md:pb-36">
          <div className={`eyebrow mb-6 ${accentText}`} style={{ animationDelay: "0ms" }}>{eyebrow}</div>
          <h1 className="h-display max-w-4xl text-balance animate-fade-up">
            {title} <span className={accentText}>{titleHighlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed animate-fade-up" style={{ animationDelay: "120ms" }}>
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Link
              to={`/apply?direction=${applyDirection}`}
              className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold transition-all hover:scale-[1.02] ${accentBg}`}
            >
              Залишити заявку <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://instagram.com/kinopoint.film"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border-strong hover:border-foreground transition-all font-semibold"
            >
              <Instagram className="size-4" /> Написати в Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="container-wide py-24 md:py-28">
        <div className="max-w-2xl mb-12">
          <div className={`eyebrow mb-4 ${accentText}`}>Кому підходить</div>
          <h2 className="h-section text-balance">Цей напрям — для тих, хто…</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {forWho.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface border border-border hover:border-border-strong transition-colors">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center size-6 rounded-full bg-success/15 text-success shrink-0">
                  <Check className="size-3.5" />
                </span>
                <p className="text-foreground/90 leading-relaxed">{t}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT GIVES */}
      <section className="bg-surface/40 border-y border-border/60 py-24 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className={`eyebrow mb-4 ${accentText}`}>Що дає напрям</div>
            <h2 className="h-section text-balance">Конкретні навички й внутрішні зміни.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gives.map((g) => (
              <div key={g.title} className="p-7 rounded-2xl bg-background border border-border hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-display text-xl font-bold mb-2">{g.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEEL AFTER */}
      <section className="container-wide py-24 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className={`eyebrow mb-4 ${accentText}`}>Перші відчуття</div>
            <h2 className="h-section text-balance">Що ви можете відчути вже після перших занять.</h2>
            <p className="text-muted-foreground mt-5 leading-relaxed max-w-md">
              Не обіцянки. Спостереження, які ми чуємо щотижня від дорослих учнів.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-3">
            {feel.map((t, i) => (
              <div key={i} className={`p-5 rounded-xl bg-surface border border-border flex items-start gap-4 hover:${accentBorder} transition-colors`}>
                <span className={`inline-flex items-center justify-center size-8 rounded-lg ${accentSoftBg} font-display font-bold text-sm shrink-0`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground/90 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section className="bg-surface/40 border-y border-border/60 py-24 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className={`eyebrow mb-4 ${accentText}`}>Як проходять заняття</div>
            <h2 className="h-section">Чесно про формат.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {classes.map((c, i) => (
              <div key={i} className="p-7 rounded-2xl bg-background border border-border">
                <h3 className="font-display text-xl font-bold mb-2">{c.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHER */}
      <section className="container-wide py-24 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border-strong shadow-elegant">
              <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-1 ${accentText}`}>{teacher.role}</p>
                <p className="font-display text-2xl font-bold">{teacher.name}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className={`eyebrow mb-4 ${accentText}`}>Викладач</div>
            <h2 className="h-section text-balance mb-6">Той, хто веде вас крок за кроком.</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">{teacher.bio}</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-surface/40 border-y border-border/60 py-20">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className={`eyebrow mb-3 ${accentText}`}>Атмосфера</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Як це виглядає зсередини.</h2>
            </div>
            <a
              href="https://instagram.com/kinopoint.film"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-gold inline-flex items-center gap-2 link-underline"
            >
              <Instagram className="size-4" /> Більше в Instagram
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl border border-border group ${
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-[4/3]" : "aspect-square"
                }`}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-wide py-24 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className={`eyebrow mb-4 ${accentText}`}>Питання</div>
            <h2 className="h-section text-balance">Те, що варто знати наперед.</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className={`border border-border rounded-xl bg-surface px-5 transition-colors data-[state=open]:bg-surface-2 data-[state=open]:${accentBorder}`}
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section className="container-wide pb-24">
        <div className={`relative overflow-hidden rounded-3xl border ${accentBorder} bg-gradient-to-br from-surface to-background p-10 md:p-14`}>
          <div className={`absolute -top-32 -right-32 size-96 blur-3xl rounded-full ${accent === "gold" ? "bg-gold/10" : "bg-primary/15"}`} />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-3 text-balance">
                Готові спробувати? Перший місяць — зі знижкою <span className={accentText}>50%</span>.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Залиште коротку заявку. Ми зв’яжемося, відповімо на запитання й допоможемо обрати зручний час.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to={`/apply?direction=${applyDirection}`}
                className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Записатись →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
