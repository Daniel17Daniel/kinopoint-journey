import { Link } from "react-router-dom";
import {
  ArrowRight, Check, Sparkles, Theater, BookOpen, Tv, Compass, Instagram, MapPin,
  Heart, Mic, Lightbulb, Users, Calendar, Send,
} from "lucide-react";
import { useHelper } from "@/components/site/HelperContext";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { FactChips, Fact } from "@/components/site/FactChips";
import heroImg from "@/assets/hero-stage.jpg";
import atmActing from "@/assets/atmosphere-acting.jpg";
import atmJourn from "@/assets/atmosphere-journalism.jpg";

const JOURN_FACTS: Fact[] = [
  { kind: "duration", value: "1 місяць" },
  { kind: "frequency", value: "2 рази на тиждень" },
  { kind: "price", value: "3000 грн / місяць" },
];

const TRAINING_GIVES = [
  { icon: Heart, t: "Внутрішня свобода", d: "Менше затиску, більше живої присутності в кадрі, на сцені й у житті." },
  { icon: Mic, t: "Голос і подача", d: "Робота з тілом, голосом і дикцією — щоб звучати вільно і впевнено." },
  { icon: Lightbulb, t: "Своя історія", d: "Розуміння драматургії — як народжується ідея і стає сценарієм." },
  { icon: Users, t: "Безпечна група", d: "Камерний формат, де можна пробувати, помилятися й рости разом." },
];

const HOW_IT_WORKS = [
  { n: "01", t: "Оберіть напрям", d: "Дослідіть сторінки курсів або пройдіть короткий орієнтир, який підкаже найближчий вам шлях.", icon: Compass },
  { n: "02", t: "Залиште заявку", d: "Коротка форма — ім’я, контакт і напрям. Без іспитів і прослуховувань.", icon: Send },
  { n: "03", t: "Ми зв’яжемося", d: "Спокійно з’ясуємо, чи цей формат вам підходить, і розкажемо про деталі та старт групи.", icon: Calendar },
];

const FOR_WHO = [
  "для тих, хто хоче почуватися впевненіше в житті",
  "для тих, хто відчуває сором’язливість або внутрішній затиск",
  "для тих, хто хоче краще відчувати своє тіло і голос",
  "для тих, хто шукає безпечний простір, де можна пробувати і помилятися",
  "для тих, хто хоче спробувати щось нове",
  "для тих, хто готовий поступово виходити із зони звичного і досліджувати себе",
  "для тих, хто хоче бути живим у кадрі, на сцені або в історії, яку створює",
];

const FAQ = [
  {
    q: "Чи можна прийти без жодного досвіду?",
    a: "Так. Більшість наших учнів починають з нуля. Ми працюємо з людьми, які ніколи не виходили на сцену й не стояли перед камерою — і саме на цьому будуємо програму.",
  },
  {
    q: "Що робити, якщо я дуже сором’язлива людина?",
    a: "Ми це чуємо часто. Ніхто не змусить вас робити те, до чого ви не готові. Перші заняття — про звикання й довіру, а не про “проявися негайно”.",
  },
  {
    q: "Чи допомагають заняття стати впевненішим у житті?",
    a: "Так — і це часто головний результат. Робота з голосом, тілом і увагою змінює те, як ви тримаєтесь на роботі, в розмовах, у щоденних ситуаціях.",
  },
  {
    q: "Чи можна обрати кілька напрямів?",
    a: "Так. Ви можете почати з одного напряму, а згодом додати інший. Ми допоможемо побудувати зручний графік.",
  },
];

const Index = () => {
  const { open } = useHelper();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-50 animate-spotlight" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/65 to-background" />
          <div className="absolute inset-0 grid-frame opacity-[0.06]" />
        </div>

        <div className="container-wide relative pt-20 pb-28 md:pt-28 md:pb-40">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 animate-fade-up">Твоя улюблена кіношкола · Одеса</div>
            <h1 className="h-display text-foreground animate-fade-up text-balance" style={{ animationDelay: "60ms" }}>
              Простір, де не грають ролі — <span className="text-primary">тут стають собою</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "140ms" }}>
              KinoPoint Film — камерна творча школа, де акторська майстерність і сценарне мистецтво стають точкою входу в живу творчу практику. Тут ти вчишся не просто виконувати роль, а відчувати себе, працювати з тілом, голосом, історією та присутністю — у кадрі, на сцені й у творчому процесі.
            </p>
            <p className="mt-5 text-base text-gold animate-fade-up" style={{ animationDelay: "180ms" }}>
              <span className="text-foreground">Kino</span><span className="text-gold">Point</span> — твоя точка старту.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
              <button
                onClick={open}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.02] transition-all duration-300"
              >
                <Compass className="size-4" /> Підібрати напрям
              </button>
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border-strong text-foreground hover:border-primary hover:text-primary transition-all font-semibold"
              >
                Залишити заявку
              </Link>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "300ms" }}>
              <span className="inline-flex items-center justify-center size-5 rounded-full bg-success/15 text-success">
                <Check className="size-3" />
              </span>
              Для нових учнів діє знижка <span className="text-foreground">50% на перший місяць навчання</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="container-wide py-24 md:py-28">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">Для кого ця школа</div>
          <h2 className="h-section text-balance">Можливо, це саме для вас.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOR_WHO.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface border border-border hover:border-border-strong hover:bg-surface-2 transition-all duration-300">
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

      {/* MAIN DIRECTIONS */}
      <section className="relative py-24 md:py-28 bg-surface/40 border-y border-border/60">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div className="max-w-xl">
              <div className="eyebrow mb-4">Основні напрями</div>
              <h2 className="h-section">Два повноцінні курси.</h2>
            </div>
            <button onClick={open} className="text-sm text-primary hover:text-primary-glow link-underline inline-flex items-center gap-1.5">
              Не знаю, що обрати <Compass className="size-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Link
              to="/acting"
              className="group relative overflow-hidden rounded-3xl border border-border-strong bg-background hover:border-primary/60 transition-all duration-500 min-h-[440px] flex flex-col justify-end"
            >
              <img src={atmActing} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border-strong text-foreground/85 text-xs font-semibold uppercase tracking-wider">
                <Theater className="size-3.5" /> Напрям 01
              </div>
              <div className="relative p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Акторська майстерність</h3>
                <p className="text-foreground/80 text-base md:text-lg mb-6 max-w-md leading-relaxed">
                  Для життя і сцени. Курс про внутрішню свободу, живу присутність і роботу з тілом, голосом та дикцією.
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Перейти до напряму <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>

            <Link
              to="/screenwriting"
              className="group relative overflow-hidden rounded-3xl border border-border-strong bg-background hover:border-primary/60 transition-all duration-500 min-h-[440px] flex flex-col justify-end"
            >
              <img src={atmJourn} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border-strong text-foreground/85 text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="size-3.5" /> Напрям 02
              </div>
              <div className="relative p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Сценарне мистецтво</h3>
                <p className="text-foreground/80 text-base md:text-lg mb-6 max-w-md leading-relaxed">
                  Від ідеї до сценарію. Авторський практичний курс для тих, хто хоче навчитися будувати історію та доводити її до готового проєкту.
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Перейти до напряму <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNALISM EXPRESS */}
      <section className="container-wide py-24 md:py-28">
        <Link
          to="/journalism"
          className="group relative block overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-surface to-background p-8 md:p-12 hover:border-gold/70 transition-all"
        >
          <div className="absolute -top-32 -right-32 size-96 blur-3xl rounded-full bg-gold/10" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="size-3" /> Експрес-курс
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface border border-border-strong text-foreground/75 text-xs font-semibold uppercase tracking-wider">
                  Спеціальний формат
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 text-balance">
                Тележурналістика
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl mb-6">
                Короткий практичний курс для тих, хто хоче зрозуміти, як реально працює телебачення, спробувати себе в кадрі та отримати перший досвід у медіасередовищі.
              </p>
              <div className="mb-6">
                <FactChips facts={JOURN_FACTS} />
              </div>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Перейти до курсу <ArrowRight className="size-4" />
              </span>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative size-48 md:size-56 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Tv className="size-20 md:size-24 text-gold" />
                <div className="absolute inset-0 rounded-full animate-pulse-glow" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* FAQ */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Поширені запитання</div>
            <h2 className="h-section text-balance">Те, про що питають найчастіше.</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border rounded-xl bg-surface px-5 data-[state=open]:border-primary/50 data-[state=open]:bg-surface-2 transition-colors"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface to-background p-10 md:p-16 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-96 blur-3xl rounded-full bg-primary/15" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5 text-balance">
              Перший крок — найлегший. Решту ми пройдемо <span className="text-primary">разом</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Залиште коротку заявку — ми зв’яжемося, відповімо на запитання й допоможемо обрати зручний формат.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.02] transition-all">
                Залишити заявку <ArrowRight className="size-4" />
              </Link>
              <button onClick={open} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border-strong hover:border-primary hover:text-primary transition-all font-semibold">
                <Compass className="size-4" /> Підібрати напрям
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="container-wide pb-24">
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://instagram.com/kinopoint.film" target="_blank" rel="noreferrer" className="p-7 rounded-2xl bg-surface border border-border hover:border-gold/40 transition-colors flex items-start gap-4">
            <Instagram className="size-6 text-gold shrink-0 mt-1" />
            <div>
              <p className="font-display text-lg font-bold mb-1">Instagram</p>
              <p className="text-muted-foreground text-sm">Найшвидший спосіб зв’язатися та побачити атмосферу школи.</p>
            </div>
          </a>
          <div className="p-7 rounded-2xl bg-surface border border-border flex items-start gap-4">
            <MapPin className="size-6 text-primary shrink-0 mt-1" />
            <div>
              <p className="font-display text-lg font-bold mb-1">Одеса</p>
              <p className="text-muted-foreground text-sm">Точну адресу студії надішлемо разом із підтвердженням заявки.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
