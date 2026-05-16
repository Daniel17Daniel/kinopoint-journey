import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Award, Theater, Users, Mic, Activity, Heart, Sparkles, Smile, Volume2, Dumbbell, Flame, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FactChips, Fact } from "@/components/site/FactChips";
import { CourseMap, CourseMapNode, CourseMapCenter } from "@/components/site/CourseMap";
import { WhoIsItFor } from "@/components/site/WhoIsItFor";
import { SkillsList } from "@/components/site/SkillsList";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ResultCard } from "@/components/site/ResultCard";
import heroImg from "@/assets/acting-hero.jpg";
import atmImg from "@/assets/atmosphere-acting.jpg";
import liveStage from "@/assets/live-acting-stage.jpg";
import liveVoice from "@/assets/live-acting-voice.jpg";

const FOR_WHO_GROUPS = [
  {
    icon: Sparkles,
    title: "Перші кроки",
    items: [
      "хоче вийти на сцену або почати з нуля",
      "хоче спробувати щось нове",
    ],
  },
  {
    icon: Heart,
    title: "Внутрішня свобода",
    items: [
      "відчуває сором'язливість або внутрішній затиск",
      "шукає безпечний простір, де можна пробувати",
    ],
  },
  {
    icon: Theater,
    title: "Жива присутність",
    items: [
      "хоче краще відчувати своє тіло і голос",
      "хоче бути живим у кадрі та на сцені",
    ],
  },
];

const HOW = [
  { icon: Activity, t: "Робота з тілом", d: "Розкріпачення, рух, сценічна координація і присутність." },
  { icon: Mic, t: "Голос і дикція", d: "Дихання, чіткість, інтонація — щоб голос звучав вільно." },
  { icon: Heart, t: "Внутрішня свобода", d: "Робота з затиском, страхом сцени та довірою до себе." },
  { icon: Theater, t: "Сценічна практика", d: "Етюди, сцени, акторські вправи в безпечній групі." },
];

const GIVES_CENTER: CourseMapCenter = {
  icon: Theater,
  eyebrow: "Що дає курс",
  title: "Жива присутність — на сцені і в житті",
  text: "Курс будує впевненість зсередини: тіло, голос, увага й свобода самовираження.",
};

const GIVES_NODES: CourseMapNode[] = [
  { icon: Activity, title: "Сценічна присутність", text: "Бути живим у кадрі і на сцені.", accent: "red", pulse: true },
  { icon: Volume2, title: "Голос і дикція", text: "Чіткість, інтонація і виразність.", accent: "gold" },
  { icon: Heart, title: "Внутрішня свобода", text: "Менше затиску, більше відкритості.", accent: "red" },
  { icon: Users, title: "Безпечна група", text: "Камерний формат, де можна пробувати.", accent: "gold" },
  { icon: Flame, title: "Емоційна гнучкість", text: "Робота з почуттями, не проти них.", accent: "red" },
  { icon: Eye, title: "Контакт із собою", text: "Відчувати, обирати, проявлятися.", accent: "green" },
];

const AFTER = [
  { icon: Award, t: "Сертифікат після завершення курсу" },
  { icon: Theater, t: "Випускний показ на сцені театру" },
];

const FACTS: Fact[] = [
  { kind: "age", value: "Будь-який вік" },
  { kind: "group", value: "10–12 учнів" },
  { kind: "duration", value: "11 місяців" },
  { kind: "frequency", value: "2 рази на тиждень" },
  { kind: "price", value: "2500 грн / міс · перший міс 1250 грн" },
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

          <div className="mt-10 animate-fade-up space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/50 bg-gold/15 text-gold text-xs font-semibold shadow-gold">
              <Sparkles className="size-3" /> −50% перший місяць
            </span>
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
            src={liveStage}
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

      <WhoIsItFor
        heading="Знайди себе тут"
        applyTo="/apply?direction=acting"
        items={[
          { icon: "🎭", label: "З нуля", desc: "Вперше хочеш спробувати сцену", result: "Почнеш з базових вправ у безпечній групі. Жодних прослуховувань." },
          { icon: "🔓", label: "Внутрішній затиск", desc: "Сором'язливість або страх публіки", result: "Курс побудований саме для цього — поступово і без тиску." },
          { icon: "🎙️", label: "Голос і тіло", desc: "Хочеш краще відчувати себе", result: "Робота з диханням, пластикою і дикцією з першого заняття." },
          { icon: "🎬", label: "Кадр і сцена", desc: "Хочеш бути живим перед камерою", result: "Отримаєш інструменти для роботи в кадрі та на сцені." },
        ]}
      />

      <SkillsList
        heading="Шість навичок що залишаться з тобою"
        items={[
          { title: "Внутрішня свобода", desc: "Менше затиску, більше живої присутності в будь-якій ситуації" },
          { title: "Робота з тілом", desc: "Пластика, дихання, відчуття простору навколо себе" },
          { title: "Голос і дикція", desc: "Чіткість, об'єм, інтонація — голос як інструмент" },
          { title: "Сценічна присутність", desc: "Вміння утримувати увагу глядача без зайвих зусиль" },
          { title: "Робота в парі", desc: "Реагувати на партнера, чути і відповідати живо" },
          { title: "Образ і роль", desc: "Створити персонажа і не загубити себе всередині нього" },
        ]}
      />

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

      {/* GIVES — Course Map */}
      <section className="container-wide py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">Що дає курс</div>
          <h2 className="h-section text-balance">Карта курсу — зміни і всередині, і назовні.</h2>
        </div>
        <CourseMap center={GIVES_CENTER} nodes={GIVES_NODES} />
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
      <section className="container-wide py-16 md:py-24">
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

      <ResultCard
        heading="Після курсу ти матимеш"
        items={[
          "Внутрішню свободу і впевненість перед аудиторією",
          "Навички роботи з голосом, тілом і диханням",
          "Досвід виступу на сцені театру",
          "Сертифікат завершення курсу",
        ]}
      />
    </div>
  );
};

export default Acting;
