import { useEffect, useState } from "react";
import logoSymbol from "@/assets/logo-symbol.png";

export const IntroAnimation = ({ onDone }: { onDone: () => void }) => {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 1100);
    const t2 = setTimeout(() => {
      setPhase("gone");
      onDone();
    }, 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center transition-opacity duration-400"
      style={{ opacity: phase === "out" ? 0 : 1, pointerEvents: phase === "out" ? "none" : "auto" }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />
      <div className="relative flex items-center gap-3 animate-fade-up">
        <img
          src={logoSymbol}
          alt=""
          className="h-14 md:h-20 animate-scale-in"
          style={{ filter: "drop-shadow(0 0 50px hsl(36 60% 55% / 0.4))" }}
        />
        <span className="font-display font-bold tracking-tight text-3xl md:text-5xl">
          <span className="text-foreground">Kino</span><span className="text-gold">Point</span>
        </span>
      </div>
      <div className="relative mt-8 h-px w-32 overflow-hidden bg-border/60 rounded-full">
        <span className="absolute inset-y-0 left-0 w-1/3 bg-primary animate-[loadbar_1.1s_ease-in-out_infinite]" />
      </div>
      <style>{`@keyframes loadbar { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }`}</style>
    </div>
  );
};
