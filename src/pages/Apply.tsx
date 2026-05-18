import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { Check, Instagram, ArrowRight, Sparkles, Mail, Phone, MapPin, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Будь ласка, введіть ім’я").max(80),
  contact: z.string().trim().min(4, "Вкажіть номер телефону або Telegram").max(120),
  direction: z.enum(["acting", "screenwriting", "journalism"], {
    errorMap: () => ({ message: "Оберіть напрям, якщо вже визначилися" }),
  }),
  comment: z.string().trim().max(600).optional(),
});

const directionLabels: Record<string, string> = {
  acting: "Акторська майстерність",
  screenwriting: "Сценарне мистецтво",
  journalism: "Тележурналістика",
};

const Apply = () => {
  const [params] = useSearchParams();
  const initialDir = (params.get("direction") || "") as string;
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [direction, setDirection] = useState<string>(initialDir || "");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Заявка — KinoPoint Film";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Залишити заявку до КіноPoint Film — школи акторської майстерності в Одесі. Без прослуховувань. Перший місяць зі знижкою 50%.');
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || submitted) return;
    const result = schema.safeParse({ name, contact, direction, comment });
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);

    try {
      const token = import.meta.env.VITE_TG_TOKEN;
      const chatId = import.meta.env.VITE_TG_CHAT_ID;
      const text = `📋 Нова заявка — KinoPoint\n\n👤 Ім'я: ${name}\n📞 Контакт: ${contact}\n🎭 Напрям: ${directionLabels[direction] || direction}\n💬 Коментар: ${comment || '—'}\n\n⏰ ${new Date().toLocaleString('uk-UA')}`;
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, parse_mode: "HTML", text }),
      });
      if (!res.ok) throw new Error("tg failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Щось пішло не так. Напишіть нам в Telegram — @KinoPointOdesa");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-frame opacity-[0.05]" />
        <div className="container-narrow relative pt-16 pb-12">
          <div className="eyebrow mb-5">Заявка</div>
          <h1 className="h-display text-balance max-w-3xl">
            Один короткий крок — і <span className="text-primary">ми зв’яжемося з вами.</span>
          </h1>
          <p className="mt-5 text-lg text-foreground/75 max-w-2xl leading-relaxed">
            Це не запис на курс — лише початок розмови. Спокійно з’ясуємо, чи цей формат вам підходить.
          </p>
        </div>
      </section>

      <section className="container-narrow pb-24">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            {!submitted ? (
              <form onSubmit={submit} noValidate className="rounded-3xl border border-border-strong bg-surface p-7 md:p-10 shadow-elegant space-y-6">
                <div className="flex items-start gap-3 rounded-2xl border border-gold/40 bg-gold/[0.06] p-4 md:p-5">
                  <span className="inline-flex items-center justify-center size-9 rounded-xl bg-gold/15 text-gold shrink-0">
                    <Sparkles className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-foreground text-sm md:text-base leading-snug">
                      Спеціальна пропозиція для перших учнів групи
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1">
                      Залиште заявку зараз — і ми збережемо для вас знижку на перший місяць навчання.
                    </p>
                  </div>
                </div>

                <Field label="Ім’я" error={errors.name}>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={80}
                    placeholder="Як до вас звертатися"
                    className="w-full bg-input border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </Field>

                <Field label="Телефон або Telegram" error={errors.contact}>
                  <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    maxLength={120}
                    placeholder="+380… або @username"
                    className="w-full bg-input border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </Field>

                <Field label="Напрям, який цікавить" error={errors.direction}>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {(["acting", "screenwriting", "journalism"] as const).map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setDirection(v)}
                        className={`px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all text-left leading-tight ${
                          direction === v
                            ? "bg-primary/10 text-foreground border-primary glow-red"
                            : "bg-input border-border text-foreground/80 hover:border-primary/50"
                        }`}
                      >
                        {directionLabels[v]}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Коментар" hint="за бажанням" error={errors.comment}>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    maxLength={600}
                    rows={4}
                    placeholder="Що було б важливо нам знати наперед"
                    className="w-full bg-input border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-red hover:scale-[1.01] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitting ? (
                    <>
                      <span className="size-4 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
                      Надсилаємо...
                    </>
                  ) : (
                    <>Надіслати заявку <ArrowRight className="size-4" /></>
                  )}
                </button>
                {submitError && (
                  <p className="text-sm text-destructive text-center">{submitError}</p>
                )}
                <p className="text-xs text-muted-foreground text-center">
                  Ми відповімо протягом робочого дня. Без розсилок і нав’язливих дзвінків.
                </p>
              </form>
            ) : (
              <div className="rounded-3xl border border-success/40 bg-surface p-10 md:p-14 shadow-elegant animate-scale-in text-center">
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-success/15 text-success mb-6">
                  <Check className="size-7" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Дякуємо за заявку.</h2>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Найближчим часом ми зв’яжемося з вами, щоб уточнити деталі.
                </p>
                <a
                  href="https://instagram.com/kinopoint.film"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-border-strong hover:border-primary hover:text-primary transition-all font-semibold"
                >
                  <Instagram className="size-4" /> Перейти в Instagram
                </a>
              </div>
            )}
          </div>

          {/* Side */}
          <aside className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-border bg-surface p-7">
              <p className="font-display text-lg font-bold mb-2">Зручніше написати?</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Ми відповідаємо швидко в будь-якому каналі.
              </p>
              <div className="space-y-2.5">
                <a
                  href="https://instagram.com/kinopoint.film"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border-strong hover:border-primary hover:text-primary transition-all text-sm font-semibold"
                >
                  <Instagram className="size-4 shrink-0" />
                  <span>@kinopoint.film</span>
                </a>
                <a
                  href="mailto:kinopoint.film.odesa@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border-strong hover:border-primary hover:text-primary transition-all text-sm font-semibold break-all"
                >
                  <Mail className="size-4 shrink-0" />
                  <span>kinopoint.film.odesa@gmail.com</span>
                </a>
                <a
                  href="https://t.me/KinoPointOdesa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border-strong hover:border-primary hover:text-primary transition-all text-sm font-semibold"
                >
                  <Send className="size-4 shrink-0" />
                  <span>@KinoPointOdesa</span>
                </a>
                <a
                  href="tel:+380949980285"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border-strong hover:border-primary hover:text-primary transition-all text-sm font-semibold"
                >
                  <Phone className="size-4 shrink-0" />
                  <span>+38 (094) 998-02-85</span>
                </a>
                <div className="flex items-start gap-3 px-4 py-3 rounded-xl border border-border text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0 mt-0.5 text-primary/80" />
                  <span>вул. Святослава Караванського, 22, Одеса</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7 space-y-3 text-sm">
              {[
                "Без прослуховувань і іспитів",
                "Заявка не зобов’язує до запису на курс",
                "Ми не передаємо ваші дані третім сторонам",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex items-center justify-center size-5 rounded-full bg-success/15 text-success shrink-0">
                    <Check className="size-3" />
                  </span>
                  <span className="text-foreground/85">{t}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

const Field = ({
  label, hint, error, children,
}: { label: string; hint?: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <div className="flex items-baseline justify-between mb-2">
      <span className="text-sm font-semibold text-foreground/90">{label}</span>
      {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
    </div>
    {children}
    {error && <p className="mt-2 text-sm text-primary-glow">{error}</p>}
  </label>
);

export default Apply;
