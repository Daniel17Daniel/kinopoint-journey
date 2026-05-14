import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { useHelper } from "@/components/site/HelperContext";
import heroImg from "@/assets/hero-stage.jpg";
import valPresence from "@/assets/value-presence.jpg";
import valPractice from "@/assets/value-practice.jpg";
import valGrowth from "@/assets/value-growth.jpg";
import valReal from "@/assets/value-real.jpg";

const VALUES = [
  { img: valPresence, t: "Жива присутність", d: "Робота з людиною, а не з «матеріалом». Увага до того, що відбувається тут і зараз." },
  { img: valPractice, t: "Практика над теорією", d: "Більшість часу — це дія: етюди, сцени, тексти, зйомки, розбори." },
  { img: valGrowth, t: "Поступовий розвиток", d: "Ми будуємо процес так, щоб впевненість і свобода зростали органічно." },
  { img: valReal, t: "Реальні умови", d: "Сцена, камера, медіа — простір, де навички перевіряються в дії." },
];

const About = () => {
  const { open } = useHelper();
  useEffect(() => { document.title = "Про KinoPoint — KinoPoint Film"; }, []);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 grid-frame opacity-[0.06]" />
        </div>
        <div className="container-wide relative pt-20 pb-20 md:pt-28 md:pb-24">
          <div className="eyebrow mb-6">Про кіношколу</div>
          <h1 className="h-display max-w-4xl text-balance">
            KinoPoint — простір, де <span className="text-primary">творчість поєднується з практикою</span>
          </h1>
        </div>
      </section>

      <section className="container-wide py-16 md:py-20">
        <div className="max-w-3xl space-y-6 text-lg md:text-xl text-foreground/85 leading-relaxed">
          <p>
            KinoPoint — це простір, де творчість поєднується з практикою, а навчання будується на уважній роботі з людиною. Тут важливо не просто отримати досвід, а поступово відчути більше свободи, впевненості та ясності у власному прояві.
          </p>
          <p>
            Ми поєднуємо різні творчі напрями — акторську майстерність, сценарну роботу та тележурналістику — і в кожному з них для нас важливі жива присутність, увага до деталей і реальний розвиток через практику.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="container-wide pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto rounded-3xl border border-border-strong bg-surface/60 overflow-hidden grid md:grid-cols-12">
          <div className="md:col-span-4 relative bg-gradient-to-br from-background to-surface min-h-[260px] flex items-center justify-center p-8">
            <div className="absolute inset-0 grid-frame opacity-[0.08]" />
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center size-28 rounded-full bg-gold/10 border border-gold/40 text-gold font-display text-3xl font-bold shadow-gold">
                КЛ
              </div>
            </div>
          </div>
          <div className="md:col-span-8 p-8 md:p-12">
            <div className="eyebrow mb-3">Засновниця</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">Катерина Лебедєва</h2>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary text-[11px] font-semibold uppercase tracking-wider mb-5">
              Режисерка · Викладачка
            </span>
            <p className="text-foreground/85 leading-relaxed mb-5">
              Засновниця KinoPoint та відеопродакшну КіноPoint. Викладачка курсу «Акторська майстерність та сценічна мова» з 18-річним досвідом на знімальному майданчику. Пройшла весь шлях — від перших епізодичних ролей та каскадерських трюків до створення власних проєктів.
            </p>
            <blockquote className="border-l-2 border-gold pl-4 italic text-gold/90 leading-relaxed">
              «Я ділюся не просто теорією з підручників, а практикою, загартованою роками реальної роботи.»
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-surface/40 border-y border-border/60 py-20 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-4">Наші принципи</div>
            <h2 className="h-section text-balance">Чотири речі, які формують KinoPoint.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {VALUES.map((v) => (
              <div
                key={v.t}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border-strong hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={v.img}
                    alt=""
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
                </div>
                <div className="relative p-5 md:p-6">
                  <p className="font-display font-semibold text-lg mb-2">{v.t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface to-background p-10 md:p-14 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-96 blur-3xl rounded-full bg-primary/15" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-tight mb-5 text-balance">
              Не знаєте, з чого почати? <span className="text-primary">Підкажемо напрям.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={open} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red transition-all">
                <Compass className="size-4" /> Підібрати напрям
              </button>
              <Link to="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border-strong hover:border-primary hover:text-primary transition-all font-semibold">
                Залишити заявку <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
