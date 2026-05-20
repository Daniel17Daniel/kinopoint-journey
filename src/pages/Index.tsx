import { Link } from "react-router-dom";
import {
  ArrowRight, Check, Sparkles, Theater, BookOpen, Compass, Instagram, MapPin,
  Heart, Mic, Lightbulb, Users, Award, Quote, Star,
} from "lucide-react";
import { useHelper } from "@/components/site/HelperContext";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-stage-cold.png";
import cardActing from "@/assets/card-acting-stage.jpg";
import cardScreen from "@/assets/card-screen-desk.jpg";
import cardJourn from "@/assets/card-journ-studio.jpg";

const TRAINING_GIVES = [
  { icon: Heart, t: "Внутрішня свобода", d: "Менше затиску, більше живої присутності в кадрі, на сцені й у житті." },
  { icon: Mic, t: "Голос і подача", d: "Робота з тілом, голосом і дикцією — щоб звучати вільно і впевнено." },
  { icon: Lightbulb, t: "Своя історія", d: "Розуміння драматургії — як народжується ідея і стає сценарієм." },
  { icon: Users, t: "Безпечна група", d: "Камерний формат, де можна пробувати, помилятися й рости разом." },
];

const FOR_WHO_GROUPS = [
  {
    icon: Heart,
    title: "Впевненість у собі",
    items: [
      "хочете почуватися впевненіше",
      "відчуваєте сором'язливість або скутість",
    ],
  },
  {
    icon: Mic,
    title: "Тіло та голос",
    items: [
      "хочете краще відчувати своє тіло",
      "шукаєте свободу в голосі та самовираженні",
    ],
  },
  {
    icon: Sparkles,
    title: "Простір для експериментів",
    items: [
      "хочете спробувати щось нове",
      "готові досліджувати себе в безпечному середовищі",
    ],
  },
  {
    icon: Star,
    title: "Довготривалий результат",
    items: [
      "вийдете на театральну сцену на випускному",
      "отримаєте сертифікат про завершення курсу",
    ],
  },
];

const TESTIMONIALS = [
  { initials: "МК", name: "Марія К.", course: "Акторська майстерність", text: "Прийшла зі страшним затиском перед людьми. За три місяці відчула себе вільнішою — і на сцені, і в звичайних розмовах." },
  { initials: "ОР", name: "Олексій Р.", course: "Сценарне мистецтво", text: "Нарешті зрозумів, як з ідеї зробити повноцінну історію. Викладач дійсно вміє пояснювати структуру сценарію." },
  { initials: "ДС", name: "Дар'я С.", course: "Тележурналістика", text: "Один місяць — і я вже знімала свій перший репортаж. Практики набагато більше, ніж очікувала." },
];

const FAQ = [
  {
    q: "Чи можна прийти без жодного досвіду?",
    a: "Так, звісно! Більшість наших учнів починають із нуля. Ми працюємо з тими, хто ніколи не виходив на сцену й не стояв перед камерою, і саме під це вибудувана програма.",
  },
  {
    q: "Що робити, якщо я дуже сором’язлива людина?",
    a: "Ми часто це чуємо. І відповідь проста: ніхто не змушуватиме вас робити те, до чого ви не готові. Перші заняття — це про звикання, безпеку й довіру, а не про негайний прояв себе.",
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
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-50 animate-spotlight" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/65 to-background" />
          <div className="absolute inset-0 grid-frame opacity-[0.06]" />
        </div>

        <div className="container-wide relative pt-20 pb-28 md:pt-28 md:pb-40">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 animate-fade-up">Твоя улюблена кіношкола</div>
            <h1 className="h-display text-foreground animate-fade-up text-balance" style={{ animationDelay: "60ms" }}>
              Простір, де не грають ролі — <span className="text-primary">тут стають собою</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "140ms" }}>
              KinoPoint Film — камерна школа акторської майстерності.{" "}
              Тут ти вчишся не грати, а жити в кадрі та на сцені. Відчувати себе, володіти голосом і тілом — і не втрачати цієї свободи під поглядами глядачів.
            </p>
            <p className="mt-5 text-base animate-fade-up font-display font-semibold tracking-tight" style={{ animationDelay: "180ms" }}>
              <span className="text-foreground">Kino</span><span className="text-gold">Point</span>
              <span className="text-primary"> — твоя точка старту.</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.02] transition-all w-full sm:w-auto"
              >
                Залишити заявку
              </Link>
              <button
                onClick={open}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border-strong text-foreground hover:border-primary hover:text-primary transition-all font-semibold"
              >
                <Compass className="size-4" /> Підібрати напрям
              </button>
              <button
                onClick={open}
                className="sm:hidden text-primary text-sm font-semibold inline-flex items-center gap-1 justify-center"
              >
                <Compass className="size-4" /> Підібрати напрям <ArrowRight className="size-3.5" />
              </button>
            </div>

            <div className="border-t border-border/30 mt-8 pt-6 flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: "280ms" }}>
              <span className="inline-flex items-center gap-2 text-sm text-foreground/60">
                <Users className="size-4 text-gold" /> До 12 учнів в групі
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-foreground/60">
                <Award className="size-4 text-gold" /> Сертифікат після завершення курсу
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-foreground/60">
                <MapPin className="size-4 text-gold" /> Одеса
              </span>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FOR_WHO_GROUPS.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="p-6 rounded-2xl bg-surface border border-border-strong hover:border-gold/40 hover:bg-surface-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center size-10 rounded-xl bg-primary/15 text-primary border border-primary/30 shrink-0">
                    <Icon className="size-4" />
                  </span>
                  <p className="font-display font-semibold text-base">{g.title}</p>
                </div>
                <ul className="space-y-2">
                  {g.items.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed">
                      <Check className="size-3.5 text-gold shrink-0 mt-1" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-wide py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Про KinoPoint</div>
            <h2 className="h-section text-balance">
              Простір, де кожна людина проходить свій <span className="text-primary">унікальний шлях</span> розвитку
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-lg text-foreground/85 leading-relaxed">
            <p>
              KinoPoint — творче середовище для тих, хто розвивається через реальну роботу, а не лише теорію.
              Ми поєднуємо акторську майстерність, сценарне мистецтво та тележурналістику в єдиному навчальному процесі, де кожен напрям підсилює інший.
            </p>
            <p>
              У центрі нашого підходу — жива присутність у процесі, уважність до деталей і розвиток через практику, що відбувається тут і зараз, у реальних завданнях і ситуаціях.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold link-underline pt-2">
              Дізнатися більше <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN DIRECTIONS — 3 clean cards */}
      <section className="relative py-24 md:py-28 bg-surface/40 border-y border-border/60">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div className="max-w-xl">
              <div className="eyebrow mb-4">Напрями навчання</div>
              <h2 className="h-section">Три напрями. Один підхід.</h2>
            </div>
            <button onClick={open} className="text-sm text-primary hover:text-primary-glow link-underline inline-flex items-center gap-1.5">
              Не знаю, що обрати <Compass className="size-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                to: "/acting",
                img: cardActing,
                tag: "Основний курс",
                tagIcon: Theater,
                tagAccent: "red" as const,
                title: "Акторська майстерність",
                desc: "Для життя і сцени. Внутрішня свобода, тіло, голос, дикція.",
                duration: "11 місяців",
                oldPrice: "2500 грн",
                newPrice: "1250 грн",
              },
              {
                to: "/screenwriting",
                img: cardScreen,
                tag: "Основний курс",
                tagIcon: BookOpen,
                tagAccent: "red" as const,
                title: "Сценарне мистецтво",
                desc: "Від ідеї до готового сценарію. Авторський практичний курс.",
                duration: "3 місяці",
                oldPrice: "4000 грн",
                newPrice: "2000 грн",
              },
              {
                to: "/journalism",
                img: cardJourn,
                tag: "Експрес-курс",
                tagIcon: Sparkles,
                tagAccent: "gold" as const,
                title: "Тележурналістика",
                desc: "Реальна медійна практика. Робота в кадрі та зйомки.",
                duration: "1 місяць",
                oldPrice: "3000 грн",
                newPrice: "1500 грн",
              },
            ].map((c) => {
              const TagIcon = c.tagIcon;
              const tagClass =
                c.tagAccent === "gold"
                  ? "border-gold/50 text-gold bg-gold/15 shadow-gold"
                  : "border-primary/50 text-primary bg-primary/15 shadow-red";
              return (
                <Link
                  key={c.to}
                  to={c.to}
                  className="group relative overflow-hidden rounded-3xl border border-border-strong bg-background hover:border-primary/60 hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={c.img}
                      alt=""
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />
                    <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border text-[10px] font-semibold uppercase tracking-wider transition-all group-hover:scale-105 ${tagClass}`}>
                      <TagIcon className="size-3" /> {c.tag}
                    </div>
                  </div>
                  <div className="relative p-6 md:p-7 flex flex-col flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2 leading-tight">{c.title}</h3>
                    <p className="text-foreground/75 text-sm md:text-base leading-relaxed mb-4">{c.desc}</p>
                    <div className="mb-5">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{c.duration}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-display font-bold text-gold">{c.oldPrice}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1">за один місяць</p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                      Перейти до напряму <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — removed (redundant) */}



      {/* TESTIMONIALS */}
      <section className="relative py-24 md:py-28 bg-surface/40 border-y border-border/60">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-4">Відгуки учнів</div>
            <h2 className="h-section text-balance">Вони вже зробили перший крок.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.initials} className="p-7 rounded-2xl bg-surface border border-border-strong flex flex-col">
                <Quote className="size-8 text-gold mb-4" />
                <p className="text-foreground/90 leading-relaxed mb-6 flex-1">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <span className="inline-flex items-center justify-center size-10 rounded-full bg-gold/15 text-gold text-sm font-bold shrink-0">
                    {t.initials}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-sm truncate">{t.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
              Залиште коротку заявку — ми зв'яжемося, відповімо на запитання й допоможемо обрати зручний формат.
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

      {/* LOCATION */}
      <section className="container-wide pb-24 overflow-x-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="eyebrow mb-4">Де ми знаходимося</div>
            <h2 className="h-section text-balance">вул. Святослава Караванського, 22, Одеса</h2>
          </div>
          <div className="min-w-0">
            <div className="relative rounded-2xl overflow-hidden border border-border-strong bg-surface w-full min-h-[240px] md:min-h-[320px]">
              <iframe
                src="https://www.google.com/maps?q=%D0%B2%D1%83%D0%BB.%20%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B0%20%D0%9A%D0%B0%D1%80%D0%B0%D0%B2%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE%2C%2022%2C%20%D0%9E%D0%B4%D0%B5%D1%81%D0%B0&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="KinoPoint Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;