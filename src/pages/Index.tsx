import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Sparkles,
  MapPin,
  Mic,
  Theater,
  Heart,
  MessageCircle,
  Compass,
  Wind,
  Users,
  Instagram,
} from "lucide-react";
import { useHelper } from "@/components/site/HelperContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-stage.jpg";
import atmActing from "@/assets/atmosphere-acting.jpg";
import atmJourn from "@/assets/atmosphere-journalism.jpg";

const FOR_WHO = [
  "Відчуваєте скутість і хочете почуватися вільніше",
  "Хочете говорити впевненіше й ясніше висловлювати думки",
  "Давно хотіли спробувати себе на сцені, в кадрі або в медіа",
  "Шукаєте творче середовище, де можна розкритися без тиску",
  "Не маєте досвіду, але хочете почати",
  "Хочете відчути більше впевненості не лише на заняттях, а й у житті",
];

const GAINS = [
  { icon: Heart, title: "Більше впевненості", text: "Ви починаєте довіряти власному голосу й тілу — і це залишається з вами поза заняттями." },
  { icon: Wind, title: "Свобода самовираження", text: "Менше внутрішніх блоків. Більше дозволу собі — звучати, рухатися, помилятися." },
  { icon: Mic, title: "Робота з голосом", text: "Вчимося дихати, інтонувати, тримати темп. Голос стає інструментом, а не перешкодою." },
  { icon: MessageCircle, title: "Краща комунікація", text: "Ви чіткіше формулюєте думки. У робочих зустрічах і в особистих розмовах." },
  { icon: Users, title: "Менше скутості", text: "Камерна група дорослих, де нікого не оцінюють — поступово зникає затиск." },
  { icon: Sparkles, title: "Творчий досвід", text: "Реальні етюди, тексти, зйомки. Не теорія, а проживання." },
];

const STORIES = [
  {
    before: "Прийшла, бо в роботі постійно “губилася” на презентаціях.",
    after: "Через два місяці провела свій перший внутрішній воркшоп — і вперше не читала з листочка.",
    name: "Анна, 34, продакт-менеджерка",
  },
  {
    before: "Завжди хотів спробувати сцену, але соромився навіть зайти.",
    after: "Зараз граю в студентському спектаклі. Вдома з’явилася звичка читати вголос — і це окреме задоволення.",
    name: "Олег, 41, інженер",
  },
  {
    before: "Голос здавався тихим і невпевненим, особливо в дзвінках.",
    after: "Колеги почали перепитувати, чи я ходила на якісь курси. Стала спокійніша й тверезіша в подачі.",
    name: "Катерина, 29, юристка",
  },
];

const STEPS = [
  { n: "01", t: "Обираєте напрям", d: "Самостійно або з допомогою короткого орієнтиру." },
  { n: "02", t: "Залишаєте заявку", d: "Коротка форма. Ми зв’яжемося і відповімо на запитання." },
  { n: "03", t: "Приходите на перше заняття", d: "Знайомство з групою та форматом. Без іспитів і прослуховувань." },
  { n: "04", t: "Поступово розкриваєтесь", d: "Робота йде в темпі, який підходить саме вам." },
];

const FAQ = [
  {
    q: "Чи можна прийти без жодного досвіду?",
    a: "Так. Більшість наших учнів починають з нуля. Ми працюємо з дорослими, які ніколи не виходили на сцену й не стояли перед камерою — і саме на цьому будуємо програму.",
  },
  {
    q: "Чи не запізно починати у дорослому віці?",
    a: "Ні. Доросла мотивація — одна з найсильніших. У наших групах є люди від 22 до 55 років. Вік не заважає, навпаки — додає глибини.",
  },
  {
    q: "Що робити, якщо я дуже сором’язлива людина?",
    a: "Ми це чуємо часто. Ніхто не змусить вас робити те, до чого ви не готові. Перші заняття — про звикання й довіру, а не про “проявися негайно”.",
  },
  {
    q: "Чи допомагають заняття стати впевненішим у житті?",
    a: "Так — і це часто головний результат. Робота з голосом, тілом і увагою змінює те, як ви тримаєтесь на роботі, в розмовах, у щоденних ситуаціях.",
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 grid-frame opacity-[0.07]" />
        </div>

        <div className="container-wide relative pt-20 pb-28 md:pt-28 md:pb-40">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 animate-fade-up">Приватна школа для дорослих · Київ</div>
            <h1 className="h-display text-foreground animate-fade-up text-balance" style={{ animationDelay: "60ms" }}>
              Простір, де доросла людина знову <span className="text-primary">дозволяє собі звучати</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "140ms" }}>
              KinoPoint Film — камерна школа акторської майстерності та журналістики. Без шкільних етюдів і без тиску. Лише доросла робота над голосом, тілом і впевненістю — у темпі, який витримуєте саме ви.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
              <button
                onClick={open}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.02] transition-all duration-300"
              >
                Підібрати напрям <ArrowRight className="size-4" />
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
              Для нових учнів — <span className="text-foreground">−50% на перший місяць навчання</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="container-wide py-24 md:py-32">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-4">Кому це підходить</div>
          <h2 className="h-section text-balance">Можливо, це саме для вас, якщо ви…</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOR_WHO.map((t, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-gold/40 hover:bg-surface-2 transition-all duration-300"
            >
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

      {/* DIRECTION CHOICE */}
      <section className="relative py-24 md:py-32 bg-surface/40 border-y border-border/60">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div className="max-w-xl">
              <div className="eyebrow mb-4">Два напрями</div>
              <h2 className="h-section">Що вам ближче зараз?</h2>
            </div>
            <button onClick={open} className="text-sm text-primary hover:text-primary-glow link-underline inline-flex items-center gap-1.5">
              Не знаю, що обрати <Compass className="size-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Acting card */}
            <Link
              to="/acting"
              className="group relative overflow-hidden rounded-3xl border border-border-strong bg-background hover:border-primary/60 transition-all duration-500 min-h-[460px] flex flex-col justify-end"
            >
              <img
                src={atmActing}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border-strong text-foreground/85 text-xs font-semibold uppercase tracking-wider">
                <Theater className="size-3.5" /> Напрям 01
              </div>
              <div className="relative p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Акторська майстерність</h3>
                <p className="text-foreground/75 text-lg mb-6 max-w-md">Тіло, голос, увага, присутність. Простір, де можна нарешті проявитися.</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Перейти до напряму <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>

            {/* Journalism card */}
            <Link
              to="/journalism"
              className="group relative overflow-hidden rounded-3xl border border-border-strong bg-background hover:border-primary/60 transition-all duration-500 min-h-[460px] flex flex-col justify-end"
            >
              <img
                src={atmJourn}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border-strong text-foreground/85 text-xs font-semibold uppercase tracking-wider">
                <Mic className="size-3.5" /> Напрям 02
              </div>
              <div className="relative p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Журналістика</h3>
                <p className="text-foreground/75 text-lg mb-6 max-w-md">Мовлення, подача, камера, структура думки. Для тих, кого мають почути.</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Перейти до напряму <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT TRAINING GIVES */}
      <section className="container-wide py-24 md:py-32">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-4">Що дає навчання</div>
          <h2 className="h-section text-balance">Конкретні зміни, які ви помічаєте — і ви, і ті, хто поруч.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GAINS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl bg-surface border border-border hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center size-11 rounded-xl bg-gold/10 text-gold mb-5 group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSFORMATION STORIES */}
      <section className="relative py-24 md:py-32 bg-surface/30 border-y border-border/60 overflow-hidden">
        <div className="container-wide relative">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-4">Історії змін</div>
            <h2 className="h-section text-balance">Не відгуки. Реальні переходи.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {STORIES.map((s, i) => (
              <article
                key={i}
                className="paper-card rounded-2xl p-7 transform hover:-rotate-1 transition-transform duration-500"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.6 : 0.4}deg)` }}
              >
                <div className="relative">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">До</p>
                  <p className="text-[15px] leading-relaxed mb-5 text-neutral-800">{s.before}</p>
                  <div className="h-px bg-neutral-300 my-4" />
                  <p className="text-xs uppercase tracking-widest text-success font-bold mb-3">Після</p>
                  <p className="text-[15px] leading-relaxed text-neutral-900 mb-6">{s.after}</p>
                  <p className="text-xs text-neutral-600 font-medium">— {s.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-wide py-24 md:py-32">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-4">Як це працює</div>
          <h2 className="h-section">Чотири кроки. Без бюрократії.</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {STEPS.map((s) => (
            <div key={s.n} className="relative p-6 rounded-2xl bg-surface border border-border">
              <div className="font-display text-5xl font-bold text-gold/30 mb-4">{s.n}</div>
              <h3 className="font-display text-lg font-bold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-wide py-24 md:py-32">
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
                  className="border border-border rounded-xl bg-surface px-5 data-[state=open]:border-gold/50 data-[state=open]:bg-surface-2 transition-colors"
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

      {/* OFFER CTA */}
      <section className="container-wide py-12">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface via-surface-2 to-background p-10 md:p-16">
          <div className="absolute -top-32 -right-32 size-96 bg-primary/15 blur-3xl rounded-full" />
          <div className="absolute -bottom-32 -left-32 size-96 bg-gold/5 blur-3xl rounded-full" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="eyebrow mb-4">Спеціальна пропозиція</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-3 text-balance">
                Для нових учнів — знижка <span className="text-primary">50%</span> на перший місяць навчання.
              </h2>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Достатньо, щоб без зайвих ризиків відчути формат, групу й себе всередині процесу.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.02] transition-all"
              >
                Залишити заявку <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="container-wide py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="eyebrow mb-4">Де ми знаходимося</div>
            <h2 className="h-section mb-5">Затишна студія в центрі міста.</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Камерний простір з добрим звуком і світлом. Сюди приємно повертатися — і це відчувається з першого заняття.
            </p>
            <ul className="space-y-3.5 text-[15px]">
              {[
                { k: "Місто", v: "Київ" },
                { k: "Адреса", v: "Уточнюється" },
                { k: "Графік", v: "За попереднім записом" },
                { k: "Instagram", v: "@kinopoint.film" },
              ].map((r) => (
                <li key={r.k} className="flex items-center justify-between gap-4 border-b border-border/50 pb-3">
                  <span className="text-muted-foreground uppercase tracking-wider text-xs">{r.k}</span>
                  <span className="text-foreground font-medium">{r.v}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground hover:shadow-red transition-all font-semibold text-sm"
              >
                Залишити заявку <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://instagram.com/kinopoint.film"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border-strong hover:border-primary hover:text-primary transition-colors font-semibold text-sm"
              >
                <Instagram className="size-4" /> Написати в Instagram
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-border-strong shadow-elegant bg-surface flex items-center justify-center">
              <div className="absolute inset-0 grid-frame opacity-[0.15]" />
              <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/80" />
              <div className="relative text-center px-6">
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-primary/15 text-primary mb-4">
                  <MapPin className="size-6" />
                </div>
                <p className="font-display text-xl font-bold mb-1">Точна адреса — після заявки</p>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Локацію та маршрут надсилаємо особисто, щоб зберегти камерну атмосферу студії.
                </p>
              </div>
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/85 backdrop-blur-xl border border-border-strong">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-wide">KinoPoint Film · студія</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
