import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, ArrowRight, Sparkles, ArrowLeft } from "lucide-react";
import logoSymbol from "@/assets/logo-symbol.png";

type Direction = "acting" | "journalism";
type V = "a" | "j"; // weights: a = acting, j = journalism

interface DirectionHelperProps {
  open: boolean;
  onClose: () => void;
}

const QUESTIONS: { q: string; options: { label: string; v: V }[] }[] = [
  {
    q: "Що зараз відгукується сильніше?",
    options: [
      { label: "Хочу почуватися вільніше у своєму тілі та емоціях", v: "a" },
      { label: "Хочу говорити чіткіше і впевненіше", v: "j" },
      { label: "Хочу спробувати себе на сцені", v: "a" },
      { label: "Хочу триматися спокійно перед камерою", v: "j" },
    ],
  },
  {
    q: "Який формат вам ближчий?",
    options: [
      { label: "Сцена, етюди, партнерська взаємодія", v: "a" },
      { label: "Камера, мікрофон, мовлення", v: "j" },
      { label: "Імпровізація і робота з емоцією", v: "a" },
      { label: "Інтерв’ю, подача, структура думки", v: "j" },
    ],
  },
  {
    q: "Що зараз заважає найбільше?",
    options: [
      { label: "Внутрішня скутість і затиск", v: "a" },
      { label: "Не вмію коротко й точно формулювати", v: "j" },
      { label: "Соромно проявляти емоції", v: "a" },
      { label: "“Дерев’яність” у дзвінках і виступах", v: "j" },
    ],
  },
  {
    q: "Де ви хочете відчути зміни найперше?",
    options: [
      { label: "У тілі, голосі, присутності", v: "a" },
      { label: "У робочих презентаціях і дзвінках", v: "j" },
      { label: "У стосунках і самовираженні", v: "a" },
      { label: "У публічних виступах і записах", v: "j" },
    ],
  },
  {
    q: "Що звучить як ваша мета на найближчі місяці?",
    options: [
      { label: "Дозволити собі сцену і бути живішим", v: "a" },
      { label: "Стати впевненим спікером", v: "j" },
      { label: "Розкритися як особистість", v: "a" },
      { label: "Запустити блог, подкаст або медіа-проєкт", v: "j" },
    ],
  },
];

const TOTAL = QUESTIONS.length;

export const DirectionHelper = ({ open, onClose }: DirectionHelperProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(-1); // -1 intro, 0..TOTAL-1 questions, TOTAL result
  const [answers, setAnswers] = useState<V[]>([]);

  useEffect(() => {
    if (open) {
      setStep(-1);
      setAnswers([]);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const result: Direction = (() => {
    let a = 0, j = 0;
    answers.forEach((v) => (v === "a" ? a++ : j++));
    // ties — bias toward acting (more common adult goal in this school)
    return j > a ? "journalism" : "acting";
  })();

  const isResult = step === TOTAL;

  const select = (v: V) => {
    const next = [...answers, v];
    setAnswers(next);
    setStep((s) => s + 1);
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

  const goDirection = () => {
    onClose();
    navigate(result === "acting" ? "/acting" : "/journalism");
  };

  const goApply = () => {
    onClose();
    navigate(`/apply?direction=${result}`);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-0 md:p-6 animate-fade-in">
      <button
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
        onClick={onClose}
        aria-label="Закрити"
      />
      <div className="relative w-full h-full md:h-auto md:max-w-2xl md:max-h-[90vh] bg-surface md:border md:border-border-strong md:rounded-3xl shadow-elegant flex flex-col overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-border/60 bg-surface/95 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <img src={logoSymbol} alt="" className="size-7" />
            <span className="text-sm font-semibold tracking-wide">Підібрати напрям</span>
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

        {/* Progress */}
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

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 md:px-10 py-8 md:py-10">
          {step === -1 && (
            <div className="space-y-7 max-w-lg mx-auto text-center md:text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary">
                <Sparkles className="size-3.5" /> Короткий орієнтир
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                П’ять коротких запитань — і у вас буде орієнтир.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Це не тест і не оцінка. Просто спокійний спосіб зрозуміти, який напрям зараз ближчий саме вам.
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
            <div key={step} className="max-w-xl mx-auto space-y-7 animate-fade-up">
              <p className="text-xs uppercase tracking-[0.22em] text-primary/90 font-semibold">
                Питання {step + 1} з {TOTAL}
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-snug">
                {QUESTIONS[step].q}
              </h2>
              <div className="space-y-2.5">
                {QUESTIONS[step].options.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => select(o.v)}
                    className="w-full text-left px-5 py-4 rounded-xl bg-surface-2 border border-border hover:border-primary/60 hover:bg-surface-3 transition-all duration-200 group flex items-center justify-between gap-3"
                  >
                    <span className="text-[15px] md:text-base">{o.label}</span>
                    <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
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
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary">
                <Sparkles className="size-3.5" /> Ваш орієнтир
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                {result === "acting"
                  ? "Схоже, вам ближча акторська майстерність."
                  : "Схоже, вам ближча журналістика."}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {result === "acting"
                  ? "Цей напрям підходить тим, хто хоче дозволити собі більше — у тілі, голосі, проявленості. Працюємо з присутністю, увагою і свободою самовираження."
                  : "Цей напрям підходить тим, хто хоче говорити чіткіше, тримати думку й спокійно почуватися перед камерою — у роботі, виступах і власних медіа."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={goDirection}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red transition-all"
                >
                  Перейти до напряму <ArrowRight className="size-4" />
                </button>
                <button
                  onClick={goApply}
                  className="flex-1 inline-flex items-center justify-center px-5 py-4 rounded-full border border-border-strong text-foreground hover:border-primary hover:text-primary transition-all font-semibold"
                >
                  Залишити заявку
                </button>
              </div>
              <button
                onClick={() => { setStep(-1); setAnswers([]); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Пройти ще раз
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
