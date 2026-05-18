import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Tv, Star, Sparkles, Mic, Camera, Video, Newspaper, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FactChips, Fact } from "@/components/site/FactChips";
import { CourseMap, CourseMapNode, CourseMapCenter } from "@/components/site/CourseMap";
import { WhoIsItFor } from "@/components/site/WhoIsItFor";
import { SkillsList } from "@/components/site/SkillsList";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ResultCard } from "@/components/site/ResultCard";
import heroImg from "@/assets/journalism-hero.jpg";
import liveInterview from "@/assets/live-journ-interview.jpg";
import liveStudio from "@/assets/live-journ-studio.jpg";

const BENEFITS = [
  "розуміння, як реально працює телебачення, без ілюзій і «глянцю»",
  "досвід роботи в кадрі: від першої зйомки до повноцінного сюжету",
  "навички інтерв'ю, репортажу та розслідування",
  "доступ до «кухні» телеканалу: редакція, зйомки, монтаж, ефіри",
  "можливість працювати з реальними героями, подіями та проблемами міста",
  "досвід створення контенту, який впливає на думки людей та змінює реальність на краще",
];

const AFTER = [
  "унікальний досвід праці на телебаченні",
  "якісне портфоліо",
  "розуміння професії зсередини",
  "рекомендації від практиків",
];

const FACTS: Fact[] = [
  { kind: "duration", value: "1 місяць" },
  { kind: "frequency", value: "2 рази на тиждень" },
  { kind: "price", value: "3000 грн / місяць" },
];

const FORMAT = [
  { icon: Camera, t: "Робота в кадрі", d: "Подача, тримання уваги, природність перед камерою." },
  { icon: Mic, t: "Інтерв'ю та репортаж", d: "Як говорити, питати, тримати героя в розмові." },
  { icon: Video, t: "Реальні зйомки", d: "Виходи у місто, реальні події та герої." },
  { icon: Tv, t: "Кухня телеканалу", d: "Як влаштована робота телебачення зсередини." },
];

const GIVES_CENTER: CourseMapCenter = {
  icon: Tv,
  eyebrow: "Що дає курс",
  title: "Реальна медійна практика",
  text: "Зануритись у роботу телеканалу зсередини, спробувати себе в кадрі і отримати перший досвід.",
};

const GIVES_NODES: CourseMapNode[] = [
  { icon: Camera, title: "Робота в кадрі", text: "Природна подача перед камерою.", accent: "red", pulse: true },
  { icon: Mic, title: "Інтерв'ю та репортаж", text: "Запитувати і вести живу розмову.", accent: "gold" },
  { icon: Video, title: "Реальні зйомки", text: "Виходи у місто, реальні події і герої.", accent: "red" },
  { icon: Tv, title: "Кухня телеканалу", text: "Як влаштоване ТБ зсередини.", accent: "gold" },
  { icon: Newspaper, title: "Портфоліо", text: "Матеріал, з яким можна працювати далі.", accent: "red" },
  { icon: Award, title: "Рекомендації", text: "Від практиків медійного середовища.", accent: "green" },
];

const Journalism = () => {
  useEffect(() => {
    document.title = "Експрес-курс «Тележурналістика» — KinoPoint Film";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Курс тележурналістики в Одесі — КіноPoint Film. 1 місяць, робота в кадрі, реальні зйомки. Куратор — Надія Бондаренко, 19 років у медіа.');
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 grid-frame opacity-[0.06]" />
        </div>
        <div className="container-wide relative pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="size-3" /> Експрес-курс
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface border border-border-strong text-foreground/80 text-xs font-semibold uppercase tracking-wider">
              Спеціальний формат
            </span>
          </div>
          <h1 className="h-display max-w-4xl text-balance animate-fade-up">
            Експрес-курс <span className="text-primary">«Тележурналістика»</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-up">
            Короткий практичний курс для тих, хто хоче зрозуміти, як реально працює телебачення, спробувати себе в кадрі та отримати перший досвід у медіасередовищі.
          </p>

          <div className="mt-10 animate-fade-up space-y-4">
            <FactChips facts={FACTS} />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up">
            <Link to="/apply?direction=journalism" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red transition-all">
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
            src={liveInterview}
            alt="Тележурналістика — атмосфера курсу"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
          <div className="absolute bottom-8 left-0 right-0 container-wide">
            <p className="font-display text-xl md:text-2xl font-bold text-foreground/90 max-w-lg leading-snug">
              Реальна медійна практика —<br />
              <span className="text-primary">зсередині професіоналів.</span>
            </p>
          </div>
        </div>
      </section>

      {/* TEACHER */}
      <section className="container-wide py-14 md:py-20">
        <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-lg font-bold text-primary shrink-0">
            НБ
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-widest text-gold/70 mb-1">КУРАТОР КУРСУ</p>
            <p className="text-base font-bold text-foreground">Надія Бондаренко</p>
            <p className="text-sm text-foreground/60 leading-snug">Журналіст, телеведуча, редакторка · 19 років у медіа</p>
          </div>
        </div>
      </section>

      <section className="bg-surface/40 border-y border-border/60 py-14 md:py-20 relative overflow-hidden">
        <div className="container-wide">
          <CourseMap center={GIVES_CENTER} nodes={GIVES_NODES} />
        </div>
      </section>

      <WhoIsItFor
        heading="Для кого цей курс"
        applyTo="/apply?direction=journalism"
        items={[
          { icon: "📺", label: "В телебачення", desc: "Хочеш працювати на телеканалі", result: "Кращі студенти отримують можливість працевлаштування на одеському телеканалі." },
          { icon: "🎤", label: "В кадр", desc: "Хочеш впевнено говорити на камеру", result: "Практика в кадрі з першого тижня." },
          { icon: "📰", label: "Журналістика", desc: "Хочеш писати і знімати репортажі", result: "Навчишся інтерв'ю, репортажу та розслідуванню." },
          { icon: "🌍", label: "Контент і медіа", desc: "Хочеш створювати контент що впливає", result: "Отримаєш досвід реальних зйомок і повноцінне портфоліо." },
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

      <SkillsList
        heading="Що ти отримаєш на курсі"
        items={[
          { title: "Робота в кадрі", desc: "Від першої зйомки до повноцінного сюжету" },
          { title: "Інтерв'ю і репортаж", desc: "Як брати коментарі, будувати матеріал, монтувати" },
          { title: "Кухня телеканалу", desc: "Редакція, ефіри, монтажна — зсередини без ілюзій" },
          { title: "Реальні герої", desc: "Робота з живими людьми, подіями і проблемами міста" },
          { title: "Портфоліо", desc: "Якісні роботи для резюме і подальшого просування" },
          { title: "Рекомендації", desc: "Від практиків з 19-річним досвідом у медіа" },
        ]}
      />

      <ResultCard
        heading="Після курсу ти матимеш"
        showDiscount
        items={[
          "Унікальний досвід праці на телебаченні",
          "Якісне портфоліо з реальними роботами",
          "Розуміння професії зсередини",
          "Рекомендації від практиків медіа",
        ]}
        note="Кращі студенти отримують можливість працевлаштування на одеському телеканалі."
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
                { q: "Чи можна спробувати себе в тележурналістиці без досвіду?", a: "Так. Експрес-курс підходить тим, хто хоче вперше спробувати себе в кадрі, краще зрозуміти медійне середовище та побачити, як реально працює телебачення." },
                { q: "Що саме буде на курсі?", a: "На курсі буде практика, пов'язана з роботою в кадрі, інтерв'ю, репортажем, спостереженням за медійним процесом і зануренням у реальну «кухню» тележурналістики." },
                { q: "Чи буде реальна робота в кадрі?", a: "Так, курс передбачає досвід роботи в кадрі та знайомство з тим, як поводитися перед камерою, працювати з подачею, мовленням і матеріалом." },
                { q: "Що я отримаю після завершення експрес-курсу?", a: "Після завершення курсу ви отримаєте практичний досвід, краще розуміння професії зсередини, матеріал для портфоліо та рекомендації від практиків. Для кращих студентів також передбачена можливість працевлаштування на одеському телеканалі." },
              ].map((f, i) => (
                <AccordionItem key={i} value={`j-${i}`} className="border border-border rounded-xl bg-surface px-5 data-[state=open]:border-primary/50 data-[state=open]:bg-surface-2 transition-colors">
                  <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline py-5">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide pb-24 flex justify-center">
        <Link to="/apply?direction=journalism" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.02] transition-all">
          Залишити заявку <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
};

export default Journalism;
