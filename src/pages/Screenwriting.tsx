import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Film, Tv, BookOpen, Theater, Megaphone, Clapperboard, PenTool } from "lucide-react";
import { FactChips, Fact } from "@/components/site/FactChips";
import heroImg from "@/assets/atmosphere-acting.jpg";

const FOR_WHO = [
  "для тих, хто хоче навчитися писати сценарії з нуля",
  "для акторів і режисерів, яким важливо розуміти структуру історії",
  "для авторів і креаторів, які працюють з відео та контентом",
  "для тих, у кого є ідея, але немає форми",
  "для тих, хто хоче зайти в кіно або творчі індустрії",
];

const FORMATS = [
  { icon: Film, t: "Кліпи" },
  { icon: Megaphone, t: "Реклама" },
  { icon: Tv, t: "Комерційні сценарії" },
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
  "сценарій короткометражного фільму",
  "або розробка повнометражного проєкту",
  "або театральний сценарій",
];

const RECEIVE = [
  "завершений сценарний проєкт",
  "розуміння структури історії",
  "практичний досвід роботи зі сценарієм",
  "матеріал для подальшого просування або подачі",
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

      <section className="container-wide py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow mb-4">Ти навчишся</div>
            <h2 className="h-section text-balance mb-8">Конкретні навички сценариста.</h2>
            <ul className="space-y-3">
              {SKILLS.map((s) => (
                <li key={s} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
                  <span className="mt-0.5 inline-flex items-center justify-center size-6 rounded-full bg-primary/15 text-primary-glow shrink-0">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Як проходять заняття</div>
            <h2 className="h-section text-balance mb-8">Формат — практика, не лекції.</h2>
            <ul className="space-y-3">
              {HOW.map((s, i) => (
                <li key={s} className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                  <span className="inline-flex items-center justify-center size-8 rounded-lg bg-gold/15 text-gold font-display font-bold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TEACHER */}
      <section className="container-wide pt-20 pb-4">
        <div className="max-w-5xl mx-auto rounded-3xl border border-border-strong bg-surface/60 overflow-hidden grid md:grid-cols-12">
          <div className="md:col-span-5 relative bg-gradient-to-br from-background to-surface min-h-[280px] flex items-center justify-center">
            <div className="absolute inset-0 grid-frame opacity-[0.08]" />
            <div className="relative text-center px-6">
              <div className="inline-flex items-center justify-center size-24 rounded-full bg-gold/10 border border-gold/30 text-gold mb-4">
                <PenTool className="size-10" />
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
