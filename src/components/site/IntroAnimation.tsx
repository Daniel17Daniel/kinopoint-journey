import { useEffect, useState } from "react";
import logoFull from "@/assets/logo-full.png";

export const IntroAnimation = ({ onDone }: { onDone: () => void }) => {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 1100);
    const t2 = setTimeout(() => {
      setPhase("gone");
      onDone();
    }, 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: phase === "out" ? 0 : 1, pointerEvents: phase === "out" ? "none" : "auto" }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-spotlight opacity-60" />
      <img
        src={logoFull}
        alt=""
        className="relative h-40 md:h-56 animate-scale-in"
        style={{ filter: "drop-shadow(0 0 60px hsl(36 60% 55% / 0.4))" }}
      />
    </div>
  );
};
