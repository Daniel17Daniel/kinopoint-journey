import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Award, Theater } from "lucide-react";
import heroImg from "@/assets/acting-hero.jpg";

const FOR_WHO = [
  "хоче вийти на сцену або почати з нуля",
  "хоче почуватися впевненіше в житті",
  "відчуває сором’язливість або внутрішній затиск",
  "хоче краще відчувати своє тіло і голос",
  "шукає безпечний простір, де можна пробувати і помилятися",
  "хоче спробувати щось нове",
  "готовий поступово виходити із зони звичного і досліджувати себе",
  "хоче бути живим у кадрі та на сцені",
];

const GIVES = [
  "більше впевненості в собі",
  "кращий контакт із тілом, голосом і дикцією",
  "досвід сценічної та акторської практики",
  "більше свободи у самовираженні",
  "безпечний простір для розвитку через практику",
];

const AFTER = [
  { icon: Award, t: "Сертифікат після завершення курсу" },
  { icon: Theater, t: "Випускний показ на сцені театру" },
];

const FACTS = [
  "Від 13 років",
  "Групи по 10–12 учнів",
  "11 місяців",
  "2 рази на тиждень",
  "2500 грн / місяць",
];

const Acting = () => {
  useEffect(() => { document.title = "Акторська майстерність — KinoPoint Film"; }, []);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 grid-frame opacity-[0.06]" />
        </div>
        <div className="container-wide relative pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="eyebrow mb-6">Акторська майстерність</div>
          <h1 className="h-display max-w-4xl text-balance animate-fade-up">
            Акторська майстерність <span className="text-primary">для життя і сцени</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-up">
            Курс про внутрішню свободу та живу присутність. Робота з тілом, голосом і дикцією. Формування впевненості через дію, практику та поступове розкриття себе.
          </p>

          <div className="mt-10 flex flex-wrap gap-2 animate-fade-up">
            {FACTS.map((f) => (
              <span key={f} className="px-4 py-2 rounded-full border border-border-strong bg-surface/70 text-sm text-foreground/85 backdrop-blur">
                {f}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up">
            <Link to="/apply?direction=acting" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red transition-all">
              Залишити заявку <ArrowRight className="size-4" />
            </Link>
            <a href="https://instagram.com/kinopoint.film" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border-strong hover:border-foreground transition-all font-semibold">
              <Instagram className="size-4" /> Написати в Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">Для кого цей курс</div>
          <h2 className="h-section text-balance">Цей напрям — для тих, хто…</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOR_WHO.map((t, i) => (
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

      <section className="bg-surface/40 border-y border-border/60 py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-4">Що дає курс</div>
            <h2 className="h-section text-balance">Конкретні зміни — і всередині, і назовні.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GIVES.map((g, i) => (
              <div key={i} className="p-7 rounded-2xl bg-background border border-border">
                <span className="font-display text-3xl font-bold text-gold/40 block mb-3">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-foreground/90 leading-relaxed">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="max-w-2xl mb-10">
          <div className="eyebrow mb-4">Після завершення курсу</div>
          <h2 className="h-section">Що ви забираєте із собою.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {AFTER.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.t} className="p-7 rounded-2xl bg-surface border border-border-strong flex items-start gap-4">
                <span className="inline-flex items-center justify-center size-12 rounded-xl bg-gold/10 text-gold shrink-0">
                  <Icon className="size-5" />
                </span>
                <p className="text-lg text-foreground/90 leading-relaxed">{a.t}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/apply?direction=acting" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.02] transition-all">
            Залишити заявку <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Acting;
