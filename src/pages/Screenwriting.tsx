import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Film, Tv, BookOpen, Theater, Megaphone, Clapperboard, PenTool, PenLine, AlignLeft, Users, Layers, MessageSquare, Lightbulb, FileText, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FactChips, Fact } from "@/components/site/FactChips";
import { CourseMap, CourseMapNode, CourseMapCenter } from "@/components/site/CourseMap";
import heroImg from "@/assets/atmosphere-acting.jpg";
import liveLaptop from "@/assets/live-screen-laptop.jpg";
import liveNotes from "@/assets/live-screen-notes.jpg";

const FOR_WHO = [
  "для тих, хто хоче навчитися писати сценарії з нуля",
  "для акторів і режисерів, яким важливо розуміти структуру історії",
  "для авторів і креаторів, які працюють з відео та контентом",
  "для тих, у кого є ідея, але немає форми",
  "для тих, хто хоче зайти в кіно або творчі індустрії",
];

const FORMATS = [
  { icon: Megaphone, t: "Кліпи, реклама, комерційні сценарії" },
  { icon: Clapperboard, t: "Короткий метр" },
  { icon: Film, t: "Повний метр" },
  { icon: Theater, t: "Сценарії театральних вистав" },
];

const SKILLS = [
  "придумувати і розвивати ідею",
  "писати логлайн",
  "робити синопсис",
  "будувати структуру сценарію",
  "створювати персонажів",
  "писати сцени і діалоги",
];

const HOW = [
  "практичні завдання",
  "робота з власним проєктом",
  "регулярні розбори",
  "фідбек і редагування",
  "проміжні версії сценарію",
];

const FINAL = [
  { label: "Option A", t: "сценарій короткометражного фільму" },
  { label: "Option B", t: "розробка повнометражного проєкту" },
  { label: "Option C", t: "театральний сценарій" },
];

const RECEIVE = [
  "завершений сценарний проєкт",
  "розуміння структури історії",
  "практичний досвід роботи зі сценарієм",
  "матеріал для подальшого просування або подачі",
];

const PROCESS_CENTER: CourseMapCenter = {
  icon: PenLine,
  eyebrow: "Як ми працюємо",
  title: "Від ідеї — до завершеного сценарію",
  text: "Кожен крок — практичний модуль, який наближає вас до готового проєкту.",
};

const PROCESS_NODES: CourseMapNode[] = [
  { icon: Lightbulb, title: "Ідея та логлайн", text: "Знаходимо і формулюємо ідею.", accent: "gold", pulse: true },
  { icon: Layers, title: "Структура і синопсис", text: "Будуємо каркас історії.", accent: "red" },
  { icon: Users, title: "Персонажі", text: "Характери, мотивація, конфлікт.", accent: "gold" },
  { icon: MessageSquare, title: "Сцени і діалоги", text: "Живі сцени з правильним ритмом.", accent: "red" },
  { icon: FileText, title: "Фідбек і редагування", text: "Регулярні розбори і розвиток.", accent: "gold" },
  { icon: Clapperboard, title: "Готовий сценарій", text: "Проєкт, з яким можна працювати далі.", accent: "green" },
];

const FACTS: Fact[] = [
  { kind: "duration", value: "3 місяці" },
  { kind: "frequency", value: "2 рази на тиждень" },
  { kind: "price", value: "4000 грн / місяць" },
];

const Screenwriting = () => {
  useEffect(() => { document.title = "Сценарне мистецтво — KinoPoint Film"; }, []);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 grid-frame opacity-[0.06]" />
        </div>
        <div className="container-wide relative pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="eyebrow mb-6">Сценарне мистецтво</div>
          <h1 className="h-display max-w-4xl text-balance animate-fade-up">
            Сценарне мистецтво: <span className="text-primary">від ідеї до сценарію</span>
          </h1>
          <p className="mt-4 text-lg text-gold font-medium animate-fade-up">Авторський практичний курс</p>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-up">
            Ідея — це лише початок. Сценарій — це форма, яка дозволяє їй існувати в кіно, театрі або будь-якому іншому візуальному середовищі. Цей курс — про роботу з історією як із конструкцією: точною, структурованою і готовою до реалізації.
          </p>

          <div className="mt-10 animate-fade-up">
            <FactChips facts={FACTS} />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up">
            <Link to="/apply?direction=screenwriting" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red transition-all">
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
            src={liveLaptop}
            alt="Сценарне мистецтво — атмосфера курсу"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
          <div className="absolute bottom-8 left-0 right-0 container-wide">
            <p className="font-display text-xl md:text-2xl font-bold text-foreground/90 max-w-lg leading-snug">
              Від ідеї до фінального сценарію —<br />
              <span className="text-primary">крок за кроком.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">Для кого цей курс</div>
          <h2 className="h-section text-balance">Кому цей курс буде корисним.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOR_WHO.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface border border-border">
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
            <div className="eyebrow mb-4">З чим ми працюємо</div>
            <h2 className="h-section text-balance">Формати, з якими ви будете писати.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FORMATS.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.t} className="p-6 rounded-2xl bg-background border border-border hover:border-gold/40 transition-colors">
                  <span className="inline-flex items-center justify-center size-11 rounded-xl bg-gold/10 text-gold mb-4">
                    <Icon className="size-5" />
                  </span>
                  <p className="font-display font-semibold text-lg">{f.t}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS — Course Map */}
      <section className="container-wide py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">Як ми працюємо</div>
          <h2 className="h-section text-balance">Карта курсу — від ідеї до готового сценарію.</h2>
        </div>
        <CourseMap center={PROCESS_CENTER} nodes={PROCESS_NODES} />
      </section>

      {/* TEACHER */}
      <section className="container-wide pt-20 pb-4">
        <div className="max-w-5xl mx-auto rounded-3xl border border-border-strong bg-surface/60 overflow-hidden grid md:grid-cols-12">
          <div className="md:col-span-5 relative bg-gradient-to-br from-background to-surface min-h-[280px] flex items-center justify-center">
            <div className="absolute inset-0 grid-frame opacity-[0.08]" />
            <div className="relative text-center px-6">
              <div className="inline-flex items-center justify-center size-24 rounded-full bg-gold/10 border border-gold/30 text-gold mb-4">
                <PenLine className="size-10" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Фото викладача</p>
              <p className="text-sm text-muted-foreground/80 mt-1">з’явиться незабаром</p>
            </div>
          </div>
          <div className="md:col-span-7 p-8 md:p-12">
            <div className="eyebrow mb-4">Викладач курсу</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Авторський курс від практикуючого сценариста.
            </h2>
            <p className="text-foreground/85 leading-relaxed">
              Курс веде практик зі сценарної роботи в кіно, рекламі та театрі. Підхід — від ідеї до завершеного проєкту, з регулярними розборами й роботою над власною історією. Деталі про викладача будуть оновлені незабаром.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-surface/40 border-y border-border/60 py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow mb-4">Фінальний результат</div>
            <h2 className="h-section text-balance mb-8">З чим ви виходите з курсу.</h2>
            <ul className="space-y-3">
              {FINAL.map((s) => (
                <li key={s} className="flex items-start gap-3 p-5 rounded-xl bg-background border border-border-strong">
                  <Clapperboard className="size-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Що ви отримуєте</div>
            <h2 className="h-section text-balance mb-8">Більше, ніж знання.</h2>
            <ul className="space-y-3">
              {RECEIVE.map((s) => (
                <li key={s} className="flex items-start gap-3 p-5 rounded-xl bg-background border border-border">
                  <span className="mt-1 inline-flex items-center justify-center size-6 rounded-full bg-success/15 text-success shrink-0">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-foreground/90 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-wide py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Короткі запитання</div>
            <h2 className="h-section text-balance">Те, що часто запитують перед стартом.</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Чи можна прийти на курс без досвіду у сценарній справі?", a: "Так. Курс підходить тим, хто хоче навчитися писати сценарії з нуля, а також тим, хто вже працює з ідеями, текстом або відео й хоче зробити це більш професійно." },
                { q: "Чи обов’язково вже мати готову ідею?", a: "Ні. Якщо у вас уже є ідея — ми працюємо з нею. Якщо ідеї ще немає або вона не сформована, курс допоможе знайти форму, структуру й напрямок для подальшої роботи." },
                { q: "Що саме я буду робити під час навчання?", a: "Під час курсу ви працюватимете з ідеєю, логлайном, синопсисом, структурою, персонажами, сценами та діалогами. Навчання побудоване так, щоб поступово привести вас до завершеного сценарного проєкту." },
                { q: "Який результат я зможу отримати в кінці курсу?", a: "Фінальним результатом може стати сценарій короткометражного фільму, розробка повнометражного проєкту або театральний сценарій — залежно від формату, з яким ви працюєте під час навчання." },
              ].map((f, i) => (
                <AccordionItem key={i} value={`s-${i}`} className="border border-border rounded-xl bg-surface px-5 data-[state=open]:border-primary/50 data-[state=open]:bg-surface-2 transition-colors">
                  <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline py-5">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface to-background p-10 md:p-14">
          <div className="absolute -top-32 -right-32 size-96 blur-3xl rounded-full bg-primary/15" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <BookOpen className="size-8 text-gold mb-5" />
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-3 text-balance">
                Курс дає не лише знання, а готову роботу, з якою можна входити в індустрію.
              </h2>
            </div>
            <div className="flex md:justify-end">
              <Link to="/apply?direction=screenwriting" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.02] transition-all">
                Залишити заявку <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Screenwriting;
