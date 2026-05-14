import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Tv, Star, Sparkles, Mic, Camera, Video, Newspaper, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FactChips, Fact } from "@/components/site/FactChips";
import { CourseMap, CourseMapNode, CourseMapCenter } from "@/components/site/CourseMap";
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
  useEffect(() => { document.title = "Експрес-курс «Тележурналістика» — KinoPoint Film"; }, []);

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

          <div className="mt-10 animate-fade-up">
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
      <section className="container-wide py-20 md:py-24">
        <div className="max-w-5xl mx-auto rounded-3xl border border-gold/30 bg-surface/60 overflow-hidden grid md:grid-cols-12">
          <div className="md:col-span-5 relative bg-gradient-to-br from-background to-surface min-h-[280px] flex items-center justify-center">
            <div className="absolute inset-0 grid-frame opacity-[0.08]" />
            <div className="relative text-center px-6">
              <div className="inline-flex items-center justify-center size-24 rounded-full bg-gold/10 border border-gold/30 text-gold mb-4">
                <Camera className="size-10" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Фото викладача</p>
              <p className="text-sm text-muted-foreground/80 mt-1">з'явиться незабаром</p>
            </div>
          </div>
          <div className="md:col-span-7 p-8 md:p-12">
            <div className="eyebrow mb-4">Куратор курсу</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5 leading-tight">Надія Бондаренко</h2>
            <p className="text-foreground/85 text-lg leading-relaxed">
              Журналістка, телеведуча, сценаристка, режисерка та редакторка. 19 років у медіа, робота на провідних телеканалах Одеси та досвід у міжнародному французькому виданні.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface/40 border-y border-border/60 py-20 md:py-28 relative overflow-hidden">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-4">Що дає курс</div>
            <h2 className="h-section text-balance">Карта курсу — практика, а не теорія.</h2>
          </div>
          <CourseMap center={GIVES_CENTER} nodes={GIVES_NODES} />
        </div>
      </section>

      {/* FORMAT */}
      <section className="container-wide py-20 md:py-28 relative">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">Як проходить курс</div>
          <h2 className="h-section text-balance">Формат — практика в медіасередовищі.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FORMAT.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.t} className="group p-7 rounded-2xl bg-surface border border-border-strong hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <span className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="size-5" />
                </span>
                <p className="font-display font-semibold text-lg mb-2">{f.t}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-wide py-20 md:py-24">
        <div className="max-w-2xl mb-10">
          <div className="eyebrow mb-4">Що ти отримаєш</div>
          <h2 className="h-section text-balance">Без ілюзій. Тільки реальна практика.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {BENEFITS.map((b) => (
            <div key={b} className="p-5 rounded-2xl bg-surface border border-border-strong flex items-start gap-3">
              <span className="mt-1 inline-flex items-center justify-center size-6 rounded-full bg-gold/15 text-gold shrink-0">
                <Check className="size-3.5" />
              </span>
              <p className="text-foreground/90 leading-relaxed text-sm md:text-base">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide pb-8 md:pb-12">
        <div className="max-w-2xl mb-10">
          <div className="eyebrow mb-4">Результат після курсу</div>
          <h2 className="h-section">Що ви забираєте із собою.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {AFTER.map((a) => (
            <div key={a} className="p-6 rounded-2xl bg-surface border border-border-strong flex items-start gap-3">
              <span className="mt-1 inline-flex items-center justify-center size-6 rounded-full bg-success/15 text-success shrink-0">
                <Check className="size-3.5" />
              </span>
              <p className="text-foreground/90 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-7 md:p-9 flex items-start gap-4">
          <Star className="size-6 text-gold shrink-0 mt-1" />
          <p className="font-display text-lg md:text-xl font-semibold leading-snug">
            Кращі студенти отримують можливість працевлаштування на одеському телеканалі.
          </p>
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
