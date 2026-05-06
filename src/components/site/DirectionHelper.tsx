import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  X, ArrowRight, Sparkles, ArrowLeft,
  Heart, PenTool, Video, Theater, BookOpen, Camera,
  Mic, FileText, Clapperboard, Wind, Compass, Zap,
  Star, Award, Tv, Brain, Target, Flame, Calendar,
} from "lucide-react";
import logoSymbol from "@/assets/logo-symbol.png";

type Direction = "acting" | "screenwriting" | "journalism";
type V = "a" | "s" | "j";

interface DirectionHelperProps {
  open: boolean;
  onClose: () => void;
}

interface Option {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  v: V;
}

const QUESTIONS: { q: string; options: Option[] }[] = [
  {
    q: "Що вам зараз відгукується найбільше?",
    options: [
      { icon: Heart, title: "Бути вільнішим у самовираженні", sub: "Хочу краще почуватися в кадрі, на сцені й у житті", v: "a" },
      { icon: PenTool, title: "Навчитися створювати історії", sub: "Хочу працювати з ідеєю, структурою та сценарієм", v: "s" },
      { icon: Video, title: "Спробувати себе в медіа", sub: "Хочу зрозуміти, як працює тележурналістика і камера", v: "j" },
    ],
  },
  {
    q: "У якому форматі вам цікавіше проявляти себе?",
    options: [
      { icon: Theater, title: "Через тіло, голос і емоції", sub: "Мені близька сцена, присутність і жива подача", v: "a" },
      { icon: BookOpen, title: "Через текст і драматургію", sub: "Мені цікаво будувати сюжет, сцени та персонажів", v: "s" },
      { icon: Camera, title: "Через камеру й реальні події", sub: "Мені цікаві інтерв’ю, репортажі й робота в кадрі", v: "j" },
    ],
  },
  {
    q: "Що для вас зараз найважливіше?",
    options: [
      { icon: Wind, title: "Подолати внутрішній затиск", sub: "Хочу стати вільнішим і впевненішим", v: "a" },
      { icon: FileText, title: "Навчитися оформлювати ідеї", sub: "Хочу перетворювати задум у сильну історію", v: "s" },
      { icon: Zap, title: "Отримати швидкий практичний досвід", sub: "Хочу спробувати себе в медіа вже зараз", v: "j" },
    ],
  },
  {
    q: "Який результат вам ближчий?",
    options: [
      { icon: Star, title: "Жити на сцені й у кадрі природно", sub: "Хочу бути живим, виразним і впевненим", v: "a" },
      { icon: Clapperboard, title: "Написати власний сценарний проєкт", sub: "Хочу вийти з курсу з готовою роботою", v: "s" },
      { icon: Tv, title: "Отримати досвід тележурналістики", sub: "Хочу зрозуміти професію зсередини", v: "j" },
    ],
  },
  {
    q: "З чим вам цікавіше працювати?",
    options: [
      { icon: Mic, title: "З тілом, голосом і дикцією", sub: "Мені важлива присутність, подача і свобода", v: "a" },
      { icon: Brain, title: "З ідеєю, структурою і героями", sub: "Мені цікаво створювати історію від початку до форми", v: "s" },
      { icon: Camera, title: "З камерою, текстом і подіями", sub: "Мені цікава реальна медійна практика", v: "j" },
    ],
  },
  {
    q: "Який формат вам зараз підходить найбільше?",
    options: [
      { icon: Calendar, title: "Глибоке навчання з поступовим розвитком", sub: "Хочу регулярно займатися й розкриватися крок за кроком", v: "a" },
      { icon: Target, title: "Практичний курс із власним проєктом", sub: "Хочу працювати над конкретним сценарним результатом", v: "s" },
      { icon: Flame, title: "Короткий інтенсивний формат", sub: "Хочу швидко спробувати себе в новому напрямі", v: "j" },
    ],
  },
];

const TOTAL = QUESTIONS.length;

const RESULTS: Record<Direction, { title: string; text: string; cta: string; href: string }> = {
  acting: {
    title: "Акторська майстерність",
    text: "Вам найбільше може підійти акторська майстерність. Вам близька жива присутність, свобода самовираження, робота з тілом, голосом і внутрішньою впевненістю. Це напрям для тих, хто хоче бути вільнішим у кадрі, на сцені й у житті.",
    cta: "Перейти до напряму",
    href: "/acting",
  },
  screenwriting: {
    title: "Сценарне мистецтво",
    text: "Вам найбільше може підійти сценарне мистецтво. Вам близька робота з ідеєю, історією, структурою та персонажами. Це напрям для тих, хто хоче не просто відчувати, а створювати сильний драматургічний матеріал і доводити його до готового проєкту.",
    cta: "Перейти до напряму",
    href: "/screenwriting",
  },
  journalism: {
    title: "Експрес-курс “Тележурналістика”",
    text: "Вам найбільше може підійти експрес-курс “Тележурналістика”. Вам близький швидкий практичний формат, робота в кадрі, реальні події та медійне середовище. Це хороший варіант для тих, хто хоче спробувати себе в тележурналістиці та зрозуміти професію зсередини.",
    cta: "Перейти до курсу",
    href: "/journalism",
  },
};

export const DirectionHelper = ({ open, onClose }: DirectionHelperProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<V[]>([]);
  const [selected, setSelected] = useState<V | null>(null);

  useEffect(() => {
    if (open) {
      setStep(-1);
      setAnswers([]);
      setSelected(null);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const score = (): Direction => {
    const c = { a: 0, s: 0, j: 0 };
    answers.forEach((v) => c[v]++);
    // tiebreak order: acting > screenwriting > journalism
    const order: Direction[] = ["acting", "screenwriting", "journalism"];
    const map = { a: "acting", s: "screenwriting", j: "journalism" } as const;
    let bestKey: keyof typeof c = "a";
    let bestVal = -1;
    (Object.keys(c) as (keyof typeof c)[]).forEach((k) => {
      if (c[k] > bestVal) { bestVal = c[k]; bestKey = k; }
    });
    // resolve ties by order
    const tied = (Object.keys(c) as (keyof typeof c)[]).filter((k) => c[k] === bestVal);
    if (tied.length > 1) {
      for (const d of order) {
        const k = (Object.keys(map) as (keyof typeof map)[]).find((kk) => map[kk] === d)!;
        if (tied.includes(k)) { bestKey = k; break; }
      }
    }
    return map[bestKey];
  };

  const isResult = step === TOTAL;
  const result: Direction = isResult ? score() : "acting";

  const choose = (v: V) => {
    setSelected(v);
    setTimeout(() => {
      setAnswers((a) => [...a, v]);
      setSelected(null);
      setStep((s) => s + 1);
    }, 220);
  };

  const back = () => {
    if (step <= 0) {
      setStep(-1);
      setAnswers([]);
      return;
    }
    setStep((s) => s - 1);
    setAnswers((a) => a.slice(0, -1));
  };

  const r = RESULTS[result];

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-0 md:p-6 animate-fade-in">
      <button
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
        onClick={onClose}
        aria-label="Закрити"
      />
      <div className="relative w-full h-full md:h-auto md:max-w-3xl md:max-h-[92vh] bg-surface md:border md:border-border-strong md:rounded-3xl shadow-elegant flex flex-col overflow-hidden animate-scale-in">
        <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-border/60 bg-surface/95 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <img src={logoSymbol} alt="" className="size-7" />
            <span className="text-sm font-semibold tracking-wide">
              <span className="text-foreground">Kino</span><span className="text-gold">Point</span>
              <span className="text-muted-foreground"> · підібрати напрям</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            {step >= 0 && step < TOTAL && (
              <span className="hidden sm:inline text-xs text-muted-foreground tabular-nums">
                {step + 1}/{TOTAL}
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-surface-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Закрити"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {step >= 0 && step < TOTAL && (
          <div className="flex gap-1.5 px-5 md:px-7 pt-4">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i <= step ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-5 md:px-10 py-8 md:py-10">
          {step === -1 && (
            <div className="space-y-7 max-w-lg mx-auto text-center md:text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary">
                <Sparkles className="size-3.5" /> Короткий орієнтир
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                З чого вам краще почати?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Кілька коротких запитань — і ми підкажемо напрям, який може підійти вам найбільше.
              </p>
              <button
                onClick={() => setStep(0)}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red transition-all"
              >
                Почати <ArrowRight className="size-4" />
              </button>
            </div>
          )}

          {step >= 0 && step < TOTAL && (
            <div key={step} className="max-w-2xl mx-auto space-y-7 animate-fade-up">
              <p className="text-xs uppercase tracking-[0.22em] text-primary/90 font-semibold">
                Питання {step + 1} з {TOTAL}
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-snug">
                {QUESTIONS[step].q}
              </h2>
              <div className="grid gap-3">
                {QUESTIONS[step].options.map((o) => {
                  const Icon = o.icon;
                  const isSel = selected === o.v;
                  return (
                    <button
                      key={o.title}
                      onClick={() => choose(o.v)}
                      disabled={selected !== null}
                      className={`group text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                        isSel
                          ? "border-primary bg-primary/5 glow-red"
                          : "border-border bg-surface-2 hover:border-primary/50 hover:bg-surface-3"
                      }`}
                    >
                      <span className={`inline-flex items-center justify-center size-11 rounded-xl shrink-0 transition-colors ${
                        isSel ? "bg-primary text-primary-foreground" : "bg-surface-3 text-gold group-hover:bg-primary/10 group-hover:text-primary"
                      }`}>
                        <Icon className="size-5" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-display font-semibold text-base md:text-lg leading-tight">{o.title}</span>
                        <span className="block text-sm text-muted-foreground mt-1 leading-snug">{o.sub}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              {step > 0 && (
                <button
                  onClick={back}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="size-4" /> Назад
                </button>
              )}
            </div>
          )}

          {isResult && (
            <div className="max-w-xl mx-auto space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                <Award className="size-3.5" /> Ваш орієнтир
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                {r.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {r.text}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => { onClose(); navigate(r.href); }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red transition-all"
                >
                  {r.cta} <ArrowRight className="size-4" />
                </button>
                <button
                  onClick={() => { onClose(); navigate(`/apply?direction=${result}`); }}
                  className="flex-1 inline-flex items-center justify-center px-5 py-4 rounded-full border border-border-strong text-foreground hover:border-primary hover:text-primary transition-all font-semibold"
                >
                  Залишити заявку
                </button>
              </div>
              <button
                onClick={() => { setStep(-1); setAnswers([]); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                <Compass className="size-3.5" /> Пройти ще раз
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
