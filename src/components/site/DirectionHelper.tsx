import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, ArrowRight, Sparkles } from "lucide-react";
import logoSymbol from "@/assets/logo-symbol.png";

type Result = "acting" | "journalism" | "both";

interface DirectionHelperProps {
  open: boolean;
  onClose: () => void;
}

const QUESTIONS = [
  {
    q: "Що вам зараз найбільше відгукується?",
    options: [
      { label: "Хочу почуватися вільніше й упевненіше", v: "both" },
      { label: "Хочу краще говорити й проявляти себе", v: "journalism" },
      { label: "Хочу спробувати себе в творчому середовищі", v: "acting" },
      { label: "Поки просто шукаю, що мені ближче", v: "both" },
    ],
  },
  {
    q: "Який формат вам ближчий?",
    options: [
      { label: "Сцена, емоції, самовираження", v: "acting" },
      { label: "Камера, мова, подача", v: "journalism" },
      { label: "Мені цікаво і те, і те", v: "both" },
      { label: "Я поки не впевнений(-а)", v: "both" },
    ],
  },
  {
    q: "Що для вас зараз важливіше?",
    options: [
      { label: "Подолати сором’язливість", v: "acting" },
      { label: "Стати впевненішим у спілкуванні", v: "journalism" },
      { label: "Розвинути мовлення і подачу", v: "journalism" },
      { label: "Просто дозволити собі спробувати щось нове", v: "both" },
    ],
  },
] as const;

export const DirectionHelper = ({ open, onClose }: DirectionHelperProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(-1); // -1 = intro
  const [answers, setAnswers] = useState<string[]>([]);

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

  const result: Result = (() => {
    if (answers.length < 3) return "both";
    const c = { acting: 0, journalism: 0, both: 0 };
    answers.forEach((a) => { c[a as Result]++; });
    if (c.acting > c.journalism && c.acting >= c.both) return "acting";
    if (c.journalism > c.acting && c.journalism >= c.both) return "journalism";
    return "both";
  })();

  const isResult = step === 3;

  const select = (v: string) => {
    const next = [...answers, v];
    setAnswers(next);
    setStep((s) => s + 1);
  };

  const goDirection = () => {
    onClose();
    if (result === "acting") navigate("/acting");
    else if (result === "journalism") navigate("/journalism");
    else navigate("/acting");
  };

  const goApply = () => {
    onClose();
    const param = result === "both" ? "" : `?direction=${result}`;
    navigate(`/apply${param}`);
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-end md:items-center justify-center p-0 md:p-6 animate-fade-in">
      <button
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
        aria-label="Закрити"
      />
      <div className="relative w-full md:max-w-xl bg-surface border border-border-strong md:rounded-2xl rounded-t-3xl shadow-elegant animate-scale-in max-h-[92vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-border/60 sticky top-0 bg-surface/95 backdrop-blur-xl z-10">
          <div className="flex items-center gap-3">
            <img src={logoSymbol} alt="" className="size-7" />
            <span className="text-sm font-semibold tracking-wide">Підібрати напрям</span>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-surface-2 rounded-md text-muted-foreground hover:text-foreground transition-colors" aria-label="Закрити">
            <X className="size-5" />
          </button>
        </div>

        {/* Progress */}
        {!isResult && step >= 0 && (
          <div className="flex gap-1.5 px-6 pt-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`h-0.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-gold" : "bg-border"}`} />
            ))}
          </div>
        )}

        <div className="p-6 md:p-8">
          {step === -1 && (
            <div className="space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
                <Sparkles className="size-3.5" /> Короткий орієнтир
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                Не хвилюйтеся, тут не буде нудного тесту.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Усього кілька коротких запитань, щоб зрозуміти, який напрям може вам відгукнутися більше.
              </p>
              <button
                onClick={() => setStep(0)}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold text-gold-foreground font-semibold hover:shadow-gold transition-all"
              >
                Почати <ArrowRight className="size-4" />
              </button>
            </div>
          )}

          {step >= 0 && step <= 2 && (
            <div className="space-y-6 animate-fade-up" key={step}>
              <p className="text-xs uppercase tracking-[0.2em] text-gold/80">Питання {step + 1} з 3</p>
              <h2 className="font-display text-xl md:text-2xl font-bold leading-snug">
                {QUESTIONS[step].q}
              </h2>
              <div className="space-y-2.5">
                {QUESTIONS[step].options.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => select(o.v)}
                    className="w-full text-left px-5 py-4 rounded-xl bg-surface-2 border border-border hover:border-gold/60 hover:bg-surface-3 transition-all duration-200 group flex items-center justify-between gap-3"
                  >
                    <span className="text-sm md:text-base">{o.label}</span>
                    <ArrowRight className="size-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {isResult && (
            <div className="space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
                <Sparkles className="size-3.5" /> Ваш орієнтир
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                {result === "acting" && "Схоже, вам може відгукнутися акторська майстерність."}
                {result === "journalism" && "Схоже, вам може підійти журналістика."}
                {result === "both" && "Схоже, вам можуть відгукнутися обидва напрями."}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {result === "acting" &&
                  "Цей напрям добре підходить тим, хто хоче розкріпачитися, стати вільнішим у самовираженні та відчути більше впевненості в собі."}
                {result === "journalism" &&
                  "Цей напрям добре підходить тим, хто хоче краще говорити, упевненіше триматися перед камерою та працювати з подачею."}
                {result === "both" &&
                  "Ви можете ознайомитися з ними детальніше або залишити заявку — і ми допоможемо визначитися спокійно та без тиску."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={goDirection}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gold text-gold-foreground font-semibold hover:shadow-gold transition-all"
                >
                  Перейти до напряму <ArrowRight className="size-4" />
                </button>
                <button
                  onClick={goApply}
                  className="flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-full border border-border-strong text-foreground hover:border-gold hover:text-gold transition-all font-semibold"
                >
                  Залишити заявку
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
