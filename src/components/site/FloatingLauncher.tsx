import logoSymbol from "@/assets/logo-symbol.png";

interface FloatingLauncherProps {
  onClick: () => void;
  visible: boolean;
}

export const FloatingLauncher = ({ onClick, visible }: FloatingLauncherProps) => {
  return (
    <button
      onClick={onClick}
      aria-label="Підібрати напрям"
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-30 group transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="relative flex items-center gap-3 pl-2.5 pr-5 py-2.5 rounded-full bg-surface-2/95 backdrop-blur-xl border border-border-strong shadow-elegant hover:border-gold/60 transition-all duration-300">
        <span className="relative flex items-center justify-center size-10 rounded-full bg-background animate-pulse-glow">
          <img src={logoSymbol} alt="" className="size-7" />
        </span>
        <span className="hidden sm:inline text-sm font-semibold text-foreground">Підібрати напрям</span>
      </span>
    </button>
  );
};
