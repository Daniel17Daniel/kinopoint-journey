import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Award, Theater, Users, Mic, Activity, Heart, Sparkles, Smile, Volume2, Dumbbell } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FactChips, Fact } from "@/components/site/FactChips";
import { CourseCarousel, CarouselCard } from "@/components/site/CourseCarousel";
import heroImg from "@/assets/acting-hero.jpg";
import atmImg from "@/assets/atmosphere-acting.jpg";
import carouselImg from "@/assets/carousel-acting.png";
import cardStage from "@/assets/card-acting-stage.png";
import cardExpression from "@/assets/card-acting-expression.png";
import cardVoice from "@/assets/card-acting-voice.png";
import cardGroup from "@/assets/card-acting-group.png";

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

const HOW = [
  { icon: Activity, t: "Робота з тілом", d: "Розкріпачення, рух, сценічна координація і присутність." },
  { icon: Mic, t: "Голос і дикція", d: "Дихання, чіткість, інтонація — щоб голос звучав вільно." },
  { icon: Heart, t: "Внутрішня свобода", d: "Робота з затиском, страхом сцени та довірою до себе." },
  { icon: Theater, t: "Сценічна практика", d: "Етюди, сцени, акторські вправи в безпечній групі." },
];

const GIVES_CARDS: CarouselCard[] = [
  { image: cardStage, title: "Сценічна присутність", text: "Навчишся бути живим у кадрі і на сцені." },
  { image: cardVoice, title: "Голос і дикція", text: "Чіткість, інтонація і виразність." },
  { image: cardExpression, title: "Внутрішня свобода", text: "Менше затиску, більше відкритості." },
  { image: cardGroup, title: "Безпечна група", text: "Камерний формат, де можна пробувати і помилятися." },
];

const AFTER = [
  { icon: Award, t: "Сертифікат після завершення курсу" },
  { icon: Theater, t: "Випускний показ на сцені театру" },
];

const FACTS: Fact[] = [
  { kind: "age", value: "Від 13 років" },
  { kind: "group", value: "10–12 учнів" },
  { kind: "duration", value: "11 місяців" },
  { kind: "frequency", value: "2 рази на тиждень" },
  { kind: "price", value: "2500 грн / місяць" },
];

const FAQ = [
  {
    q: "Чи можна прийти на курс без досвіду?",
    a: "Так, курс підходить і тим, хто тільки починає. Важливіше не досвід, а готовність пробувати, працювати з собою та поступово розкриватися в процесі.",
  },
  {
    q: "Чи підійде курс, якщо я соромлюся або відчуваю внутрішній затиск?",
    a: "Так. Для багатьох саме це і є одна з причин прийти. Заняття допомагають краще відчувати себе, свій голос, тіло та поступово ставати вільнішими у самовираженні.",
  },
  {
    q: "Як проходять заняття?",
    a: "Заняття побудовані на практиці: робота з тілом, голосом, увагою, присутністю, емоціями та взаємодією. Це живий процес, у якому важливо не просто виконувати вправи, а поступово входити в більш вільний контакт із собою.",
  },
  {
    q: "Що я отримаю після завершення курсу?",
    a: "Після завершення курсу ви отримаєте більше впевненості, кращий контакт із голосом і тілом, досвід сценічної практики, сертифікат і випускний показ на сцені театру.",
  },
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

          <div className="mt-10 animate-fade-up">
            <FactChips facts={FACTS} />
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

      {/* VISUAL BANNER */}
      <section className="w-full overflow-hidden">
        <div className="relative h-[340px] md:h-[460px] overflow-hidden">
          <img
            src={carouselImg}
            alt="Акторська майстерність — атмосфера занять"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
          <div className="absolute bottom-8 left-0 right-0 container-wide">
            <p className="font-display text-xl md:text-2xl font-bold text-foreground/90 max-w-lg leading-snug">
              Свобода починається з першого<br />
              <span className="text-primary">виходу на сцену.</span>
            </p>
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

      {/* HOW */}
      <section className="relative py-20 md:py-28 bg-surface/40 border-y border-border/60 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <img src={atmImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-wide relative">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-4">Як проходять заняття</div>
            <h2 className="h-section text-balance">Чотири живі лінії роботи на кожному занятті.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.t} className="group p-7 rounded-2xl bg-background border border-border-strong hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="size-5" />
                  </span>
                  <p className="font-display font-semibold text-lg mb-2">{h.t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GIVES */}
      <section className="container-wide py-20 md:py-24">
        <div className="max-w-2xl mb-10">
          <div className="eyebrow mb-4">Що дає курс</div>
          <h2 className="h-section text-balance">Конкретні зміни — і всередині, і назовні.</h2>
        </div>
        <CourseCarousel cards={GIVES_CARDS} />
      </section>

      {/* TEACHER */}
      <section className="bg-surface/40 border-y border-border/60 py-20 md:py-24">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto rounded-3xl border border-border-strong bg-background/60 overflow-hidden grid md:grid-cols-12 gap-0">
            <div className="md:col-span-5 relative bg-gradient-to-br from-surface to-background min-h-[280px] md:min-h-full flex items-center justify-center">
              <div className="absolute inset-0 grid-frame opacity-[0.08]" />
              <div className="relative text-center px-6">
                <div className="inline-flex items-center justify-center size-24 rounded-full bg-primary/10 border border-primary/30 text-primary mb-4">
                  <Theater className="size-10" />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Фото викладача</p>
                <p className="text-sm text-muted-foreground/80 mt-1">з’явиться незабаром</p>
              </div>
            </div>
            <div className="md:col-span-7 p-8 md:p-12">
              <div className="eyebrow mb-4">Викладач курсу</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Практик з акторської майстерності.
              </h2>
              <p className="text-foreground/85 leading-relaxed">
                Заняття веде практикуючий фахівець із досвідом сценічної та акторської роботи. Підхід — уважна робота з тілом, голосом і присутністю в безпечній групі. Деталі про викладача будуть оновлені незабаром.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT QUESTIONS */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Короткі запитання</div>
            <h2 className="h-section text-balance">Те, що часто запитують перед стартом.</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`a-${i}`} className="border border-border rounded-xl bg-surface px-5 data-[state=open]:border-primary/50 data-[state=open]:bg-surface-2 transition-colors">
                  <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline py-5">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* AFTER + CTA */}
      <section className="container-wide pb-24">
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

        <div className="mt-14 relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface to-background p-10 md:p-14 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-96 blur-3xl rounded-full bg-primary/15" />
          <div className="relative max-w-xl mx-auto">
            <Sparkles className="size-7 text-gold mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-5 leading-tight text-balance">
              Готові спробувати? <span className="text-primary">Перший крок — найлегший.</span>
            </h3>
            <Link to="/apply?direction=acting" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.02] transition-all">
              Залишити заявку <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acting;
