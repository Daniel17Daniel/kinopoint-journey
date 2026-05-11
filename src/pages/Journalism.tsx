import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Tv, Star, Sparkles, Mic, Camera, Video } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FactChips, Fact } from "@/components/site/FactChips";
import { CourseCarousel, CarouselCard } from "@/components/site/CourseCarousel";
import heroImg from "@/assets/journalism-hero.jpg";
import carouselImg from "@/assets/carousel-journalism.png";
import cardCamera from "@/assets/card-journalism-camera.png";
import cardInterview from "@/assets/card-journalism-interview.png";

const GIVES = [
  "СЂРѕР·СѓРјС–РЅРЅСЏ, СЏРє СЂРµР°Р»СЊРЅРѕ РїСЂР°С†СЋС” С‚РµР»РµР±Р°С‡РµРЅРЅСЏ",
  "РґРѕСЃРІС–Рґ СЂРѕР±РѕС‚Рё РІ РєР°РґСЂС–",
  "РЅР°РІРёС‡РєРё С–РЅС‚РµСЂРІвЂ™СЋ, СЂРµРїРѕСЂС‚Р°Р¶Сѓ С‚Р° СЂРѕР·СЃР»С–РґСѓРІР°РЅРЅСЏ",
  "РґРѕСЃС‚СѓРї РґРѕ СЂРµР°Р»СЊРЅРѕС— вЂњРєСѓС…РЅС–вЂќ С‚РµР»РµРєР°РЅР°Р»Сѓ",
  "РјРѕР¶Р»РёРІС–СЃС‚СЊ РїСЂР°С†СЋРІР°С‚Рё Р· СЂРµР°Р»СЊРЅРёРјРё РіРµСЂРѕСЏРјРё, РїРѕРґС–СЏРјРё С‚Р° РїСЂРѕР±Р»РµРјР°РјРё РјС–СЃС‚Р°",
  "РґРѕСЃРІС–Рґ СЃС‚РІРѕСЂРµРЅРЅСЏ РєРѕРЅС‚РµРЅС‚Сѓ, СЏРєРёР№ РІРїР»РёРІР°С” РЅР° РґСѓРјРєРё Р»СЋРґРµР№",
];

const AFTER = [
  "СѓРЅС–РєР°Р»СЊРЅРёР№ РґРѕСЃРІС–Рґ РїСЂР°С†С– РЅР° С‚РµР»РµР±Р°С‡РµРЅРЅС–",
  "СЏРєС–СЃРЅРµ РїРѕСЂС‚С„РѕР»С–Рѕ",
  "СЂРѕР·СѓРјС–РЅРЅСЏ РїСЂРѕС„РµСЃС–С— Р·СЃРµСЂРµРґРёРЅРё",
  "СЂРµРєРѕРјРµРЅРґР°С†С–С— РІС–Рґ РїСЂР°РєС‚РёРєС–РІ",
];

const FACTS: Fact[] = [
  { kind: "duration", value: "1 РјС–СЃСЏС†СЊ" },
  { kind: "frequency", value: "2 СЂР°Р·Рё РЅР° С‚РёР¶РґРµРЅСЊ" },
  { kind: "price", value: "3000 РіСЂРЅ / РјС–СЃСЏС†СЊ" },
];

const FORMAT = [
  { icon: Camera, t: "Р РѕР±РѕС‚Р° РІ РєР°РґСЂС–", d: "РџРѕРґР°С‡Р°, С‚СЂРёРјР°РЅРЅСЏ СѓРІР°РіРё, РїСЂРёСЂРѕРґРЅС–СЃС‚СЊ РїРµСЂРµРґ РєР°РјРµСЂРѕСЋ." },
  { icon: Mic, t: "Р†РЅС‚РµСЂРІвЂ™СЋ С‚Р° СЂРµРїРѕСЂС‚Р°Р¶", d: "РЇРє РіРѕРІРѕСЂРёС‚Рё, РїРёС‚Р°С‚Рё, С‚СЂРёРјР°С‚Рё РіРµСЂРѕСЏ РІ СЂРѕР·РјРѕРІС–." },
  { icon: Video, t: "Р РµР°Р»СЊРЅС– Р·Р№РѕРјРєРё", d: "Р’РёС…РѕРґРё Сѓ РјС–СЃС‚Рѕ, СЂРµР°Р»СЊРЅС– РїРѕРґС–С— С‚Р° РіРµСЂРѕС—." },
  { icon: Tv, t: "РљСѓС…РЅСЏ С‚РµР»РµРєР°РЅР°Р»Сѓ", d: "РЇРє РІР»Р°С€С‚РѕРІР°РЅР° СЂРѕР±РѕС‚Р° С‚РµР»РµР±Р°С‡РµРЅРЅСЏ Р·СЃРµСЂРµРґРёРЅРё." },
];

const GIVES_CARDS: CarouselCard[] = [
  { image: cardCamera, title: "Робота в кадрі", text: "Досвід природної подачі перед камерою." },
  { image: cardInterview, title: "Інтерв'ю і репортаж", text: "Навчишся запитувати і вести живу розмову." },
  { image: cardCamera, title: "Реальні зйомки", text: "Виходи у місто, реальні події і герої." },
  { image: cardInterview, title: "Кухня телеканалу", text: "Як влаштована робота телебачення зсередини." },
  { image: cardCamera, title: "Портфоліо", text: "Матеріал, з яким можна працювати далі." },
  { image: cardInterview, title: "Рекомендації", text: "Від практиків з реального медійного середовища." },
];

const Journalism = () => {
  useEffect(() => { document.title = "Р•РєСЃРїСЂРµСЃ-РєСѓСЂСЃ вЂњРўРµР»РµР¶СѓСЂРЅР°Р»С–СЃС‚РёРєР°вЂќ вЂ” KinoPoint Film"; }, []);

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
              <Sparkles className="size-3" /> Р•РєСЃРїСЂРµСЃ-РєСѓСЂСЃ
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface border border-border-strong text-foreground/80 text-xs font-semibold uppercase tracking-wider">
              РЎРїРµС†С–Р°Р»СЊРЅРёР№ С„РѕСЂРјР°С‚
            </span>
          </div>
          <h1 className="h-display max-w-4xl text-balance animate-fade-up">
            Р•РєСЃРїСЂРµСЃ-РєСѓСЂСЃ <span className="text-primary">вЂњРўРµР»РµР¶СѓСЂРЅР°Р»С–СЃС‚РёРєР°вЂќ</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-up">
            РљРѕСЂРѕС‚РєРёР№ РїСЂР°РєС‚РёС‡РЅРёР№ РєСѓСЂСЃ РґР»СЏ С‚РёС…, С…С‚Рѕ С…РѕС‡Рµ Р·СЂРѕР·СѓРјС–С‚Рё, СЏРє СЂРµР°Р»СЊРЅРѕ РїСЂР°С†СЋС” С‚РµР»РµР±Р°С‡РµРЅРЅСЏ, СЃРїСЂРѕР±СѓРІР°С‚Рё СЃРµР±Рµ РІ РєР°РґСЂС– С‚Р° РѕС‚СЂРёРјР°С‚Рё РїРµСЂС€РёР№ РґРѕСЃРІС–Рґ Сѓ РјРµРґС–Р°СЃРµСЂРµРґРѕРІРёС‰С–.
          </p>

          <div className="mt-10 animate-fade-up">
            <FactChips facts={FACTS} />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up">
            <Link to="/apply?direction=journalism" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red transition-all">
              Р—Р°Р»РёС€РёС‚Рё Р·Р°СЏРІРєСѓ <ArrowRight className="size-4" />
            </Link>
            <a href="https://instagram.com/kinopoint.film" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border-strong hover:border-foreground transition-all font-semibold">
              <Instagram className="size-4" /> РќР°РїРёСЃР°С‚Рё РІ Instagram
            </a>
          </div>
        </div>
      </section>

      {/* VISUAL BANNER */}
      <section className="w-full overflow-hidden">
        <div className="relative h-[340px] md:h-[460px] overflow-hidden">
          <img
            src={carouselImg}
            alt="РўРµР»РµР¶СѓСЂРЅР°Р»С–СЃС‚РёРєР° вЂ” Р°С‚РјРѕСЃС„РµСЂР° РєСѓСЂСЃСѓ"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
          <div className="absolute bottom-8 left-0 right-0 container-wide">
            <p className="font-display text-xl md:text-2xl font-bold text-foreground/90 max-w-lg leading-snug">
              Р РµР°Р»СЊРЅР° РјРµРґС–Р№РЅР° РїСЂР°РєС‚РёРєР° вЂ”<br />
              <span className="text-primary">Р·СЃРµСЂРµРґРёРЅС– РїСЂРѕС„РµСЃС–Р№РЅР°Р»С–РІ.</span>
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
                <Tv className="size-10" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Р¤РѕС‚Рѕ РІРёРєР»Р°РґР°С‡Р°</p>
              <p className="text-sm text-muted-foreground/80 mt-1">Р·вЂ™СЏРІРёС‚СЊСЃСЏ РЅРµР·Р°Р±Р°СЂРѕРј</p>
            </div>
          </div>
          <div className="md:col-span-7 p-8 md:p-12">
            <div className="eyebrow mb-4">РљСѓСЂР°С‚РѕСЂ РєСѓСЂСЃСѓ</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5 leading-tight">РќР°РґС–СЏ Р‘РѕРЅРґР°СЂРµРЅРєРѕ</h2>
            <p className="text-foreground/85 text-lg leading-relaxed">
              Р–СѓСЂРЅР°Р»С–СЃС‚РєР°, С‚РµР»РµРІРµРґСѓС‡Р°, СЃС†РµРЅР°СЂРёСЃС‚РєР°, СЂРµР¶РёСЃРµСЂРєР° С‚Р° СЂРµРґР°РєС‚РѕСЂРєР°. 19 СЂРѕРєС–РІ Сѓ РјРµРґС–Р°, СЂРѕР±РѕС‚Р° РЅР° РїСЂРѕРІС–РґРЅРёС… С‚РµР»РµРєР°РЅР°Р»Р°С… РћРґРµСЃРё С‚Р° РґРѕСЃРІС–Рґ Сѓ РјС–Р¶РЅР°СЂРѕРґРЅРѕРјСѓ С„СЂР°РЅС†СѓР·СЊРєРѕРјСѓ РІРёРґР°РЅРЅС–.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface/40 border-y border-border/60 py-20 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow mb-4">Р©Рѕ РґР°С” РєСѓСЂСЃ</div>
            <h2 className="h-section text-balance">Р РµР°Р»СЊРЅР° РјРµРґС–Р№РЅР° РїСЂР°РєС‚РёРєР° вЂ” Р±РµР· С‚РµРѕСЂРµС‚РёС‡РЅРѕС— РІРѕРґРё.</h2>
          </div>
          <CourseCarousel cards={GIVES_CARDS} />
        </div>
      </section>

      {/* FORMAT */}
      <section className="container-wide py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">РЇРє РїСЂРѕС…РѕРґРёС‚СЊ РєСѓСЂСЃ</div>
          <h2 className="h-section text-balance">Р¤РѕСЂРјР°С‚ вЂ” РїСЂР°РєС‚РёРєР° РІ РјРµРґС–Р°СЃРµСЂРµРґРѕРІРёС‰С–.</h2>
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

      <section className="container-wide py-20 md:py-28">
        <div className="max-w-2xl mb-10">
          <div className="eyebrow mb-4">РџС–СЃР»СЏ Р·Р°РІРµСЂС€РµРЅРЅСЏ РєСѓСЂСЃСѓ</div>
          <h2 className="h-section">Р©Рѕ РІРё Р·Р°Р±РёСЂР°С”С‚Рµ С–Р· СЃРѕР±РѕСЋ.</h2>
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
            РљСЂР°С‰С– СЃС‚СѓРґРµРЅС‚Рё РѕС‚СЂРёРјР°СЋС‚СЊ РјРѕР¶Р»РёРІС–СЃС‚СЊ РїСЂР°С†РµРІР»Р°С€С‚СѓРІР°РЅРЅСЏ РЅР° РѕРґРµСЃСЊРєРѕРјСѓ С‚РµР»РµРєР°РЅР°Р»С–.
          </p>
        </div>

      </section>

      {/* FAQ */}
      <section className="container-wide py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">РљРѕСЂРѕС‚РєС– Р·Р°РїРёС‚Р°РЅРЅСЏ</div>
            <h2 className="h-section text-balance">РўРµ, С‰Рѕ С‡Р°СЃС‚Рѕ Р·Р°РїРёС‚СѓСЋС‚СЊ РїРµСЂРµРґ СЃС‚Р°СЂС‚РѕРј.</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Р§Рё РјРѕР¶РЅР° СЃРїСЂРѕР±СѓРІР°С‚Рё СЃРµР±Рµ РІ С‚РµР»РµР¶СѓСЂРЅР°Р»С–СЃС‚РёС†С– Р±РµР· РґРѕСЃРІС–РґСѓ?", a: "РўР°Рє. Р•РєСЃРїСЂРµСЃ-РєСѓСЂСЃ РїС–РґС…РѕРґРёС‚СЊ С‚РёРј, С…С‚Рѕ С…РѕС‡Рµ РІРїРµСЂС€Рµ СЃРїСЂРѕР±СѓРІР°С‚Рё СЃРµР±Рµ РІ РєР°РґСЂС–, РєСЂР°С‰Рµ Р·СЂРѕР·СѓРјС–С‚Рё РјРµРґС–Р№РЅРµ СЃРµСЂРµРґРѕРІРёС‰Рµ С‚Р° РїРѕР±Р°С‡РёС‚Рё, СЏРє СЂРµР°Р»СЊРЅРѕ РїСЂР°С†СЋС” С‚РµР»РµР±Р°С‡РµРЅРЅСЏ." },
                { q: "Р©Рѕ СЃР°РјРµ Р±СѓРґРµ РЅР° РєСѓСЂСЃС–?", a: "РќР° РєСѓСЂСЃС– Р±СѓРґРµ РїСЂР°РєС‚РёРєР°, РїРѕРІвЂ™СЏР·Р°РЅР° Р· СЂРѕР±РѕС‚РѕСЋ РІ РєР°РґСЂС–, С–РЅС‚РµСЂРІвЂ™СЋ, СЂРµРїРѕСЂС‚Р°Р¶РµРј, СЃРїРѕСЃС‚РµСЂРµР¶РµРЅРЅСЏРј Р·Р° РјРµРґС–Р№РЅРёРј РїСЂРѕС†РµСЃРѕРј С– Р·Р°РЅСѓСЂРµРЅРЅСЏРј Сѓ СЂРµР°Р»СЊРЅСѓ вЂњРєСѓС…РЅСЋвЂќ С‚РµР»РµР¶СѓСЂРЅР°Р»С–СЃС‚РёРєРё." },
                { q: "Р§Рё Р±СѓРґРµ СЂРµР°Р»СЊРЅР° СЂРѕР±РѕС‚Р° РІ РєР°РґСЂС–?", a: "РўР°Рє, РєСѓСЂСЃ РїРµСЂРµРґР±Р°С‡Р°С” РґРѕСЃРІС–Рґ СЂРѕР±РѕС‚Рё РІ РєР°РґСЂС– С‚Р° Р·РЅР°Р№РѕРјСЃС‚РІРѕ Р· С‚РёРј, СЏРє РїРѕРІРѕРґРёС‚РёСЃСЏ РїРµСЂРµРґ РєР°РјРµСЂРѕСЋ, РїСЂР°С†СЋРІР°С‚Рё Р· РїРѕРґР°С‡РµСЋ, РјРѕРІР»РµРЅРЅСЏРј С– РјР°С‚РµСЂС–Р°Р»РѕРј." },
                { q: "Р©Рѕ СЏ РѕС‚СЂРёРјР°СЋ РїС–СЃР»СЏ Р·Р°РІРµСЂС€РµРЅРЅСЏ РµРєСЃРїСЂРµСЃ-РєСѓСЂСЃСѓ?", a: "РџС–СЃР»СЏ Р·Р°РІРµСЂС€РµРЅРЅСЏ РєСѓСЂСЃСѓ РІРё РѕС‚СЂРёРјР°С”С‚Рµ РїСЂР°РєС‚РёС‡РЅРёР№ РґРѕСЃРІС–Рґ, РєСЂР°С‰Рµ СЂРѕР·СѓРјС–РЅРЅСЏ РїСЂРѕС„РµСЃС–С— Р·СЃРµСЂРµРґРёРЅРё, РјР°С‚РµСЂС–Р°Р» РґР»СЏ РїРѕСЂС‚С„РѕР»С–Рѕ С‚Р° СЂРµРєРѕРјРµРЅРґР°С†С–С— РІС–Рґ РїСЂР°РєС‚РёРєС–РІ. Р”Р»СЏ РєСЂР°С‰РёС… СЃС‚СѓРґРµРЅС‚С–РІ С‚Р°РєРѕР¶ РїРµСЂРµРґР±Р°С‡РµРЅР° РјРѕР¶Р»РёРІС–СЃС‚СЊ РїСЂР°С†РµРІР»Р°С€С‚СѓРІР°РЅРЅСЏ РЅР° РѕРґРµСЃСЊРєРѕРјСѓ С‚РµР»РµРєР°РЅР°Р»С–." },
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
          Р—Р°Р»РёС€РёС‚Рё Р·Р°СЏРІРєСѓ <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
};

export default Journalism;

