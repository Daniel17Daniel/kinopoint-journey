import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Film, Tv, BookOpen, Theater, Megaphone, Clapperboard, PenTool, PenLine, AlignLeft, Users, Layers, MessageSquare, Lightbulb, FileText, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FactChips, Fact } from "@/components/site/FactChips";
import { CourseMap, CourseMapNode, CourseMapCenter } from "@/components/site/CourseMap";
import { WhoIsItFor } from "@/components/site/WhoIsItFor";
import { SkillsList } from "@/components/site/SkillsList";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ResultCard } from "@/components/site/ResultCard";
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
  "Практичні завдання на кожному занятті",
  "Робота з власним проєктом від першого дня",
  "Регулярні розбори і фідбек",
  "Редагування і доопрацювання",
  "Проміжні версії — щоб бачити прогрес",
];

const FINAL = [
  { label: "Короткий метр", t: "сценарій короткометражного фільму" },
  { label: "Повний метр", t: "розробка повнометражного проєкту" },
  { label: "Театр", t: "театральний сценарій" },
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
  useEffect(() => {
    document.title = "Сценарне мистецтво — KinoPoint Film";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Курс сценарного мистецтва в Одесі — КіноPoint Film. Від ідеї до готового сценарію за 3 місяці. Короткий метр, повний метр або театральна вистава. Перший місяць — 2000 грн.');
  }, []);

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

          <div className="mt-10 animate-fade-up space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/50 bg-gold/15 text-gold text-xs font-semibold shadow-gold">
              <Sparkles className="size-3" /> −50% перший місяць
            </span>
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

      <WhoIsItFor
        heading="Хто приходить на курс"
        applyTo="/apply?direction=screenwriting"
        items={[
          { icon: "💡", label: "Є ідея", desc: "Але не знаєш як її оформити", result: "Саме з цього починається курс — від ідеї до готового сценарію." },
          { icon: "✍️", label: "З нуля", desc: "Хочеш навчитися писати сценарії", result: "Курс веде від основ до завершеного проєкту в портфоліо." },
          { icon: "🎭", label: "Актори і режисери", desc: "Хочеш розуміти структуру історії", result: "Навчишся читати і будувати драматургію зсередини." },
          { icon: "📱", label: "Контент і відео", desc: "Працюєш з відео або соцмережами", result: "Сценарна логіка зробить твій контент сильнішим." },
        ]}
      />

      <SkillsList
        heading="Шість кроків від ідеї до сценарію"
        items={[
          { title: "Ідея і логлайн", desc: "Сформулювати суть історії в одному реченні" },
          { title: "Синопсис", desc: "Короткий виклад — структура і напрям розповіді" },
          { title: "Побудова структури", desc: "Акти, повороти, кульмінація — каркас сценарію" },
          { title: "Персонажі", desc: "Живі герої з власною логікою, бажаннями і суперечностями" },
          { title: "Сцени і діалоги", desc: "Писати так, щоб це звучало — а не читалось" },
          { title: "Фінальна версія", desc: "Відредагований сценарій готовий до показу і подачі" },
        ]}
      />

      {/* PROCESS — Course Map */}
      <section className="container-wide py-14 md:py-20 relative overflow-hidden">
        <CourseMap center={PROCESS_CENTER} nodes={PROCESS_NODES} />
      </section>

      <HowItWorks
        heading="Крок за кроком до результату"
        steps={[
          { title: "Практичні завдання", desc: "На кожному занятті — конкретна вправа, а не лекція" },
          { title: "Власний проєкт", desc: "Працюєш зі своєю ідеєю від першого дня" },
          { title: "Регулярні розбори", desc: "Фідбек після кожного блоку — бачиш свій прогрес" },
          { title: "Редагування і доопрацювання", desc: "Доводимо до фінального результату разом" },
          { title: "Готова робота", desc: "Виходиш з проєктом або навичкою для реального застосування" },
        ]}
      />

      <ResultCard
        heading="Фінальний результат"
        showDiscount
        items={[
          "Завершений сценарний проєкт для портфоліо",
          "Розуміння структури будь-якої історії",
          "Практичний досвід роботи зі сценарієм",
          "Матеріал для подачі або просування",
        ]}
        note="Варіанти фіналу: короткометражний фільм, повнометражний проєкт або театральний сценарій — обираєш сам."
      />

      {/* FAQ */}
      <section className="container-wide py-14 md:py-20">
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

      <section className="container-wide py-14 md:py-20">
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
