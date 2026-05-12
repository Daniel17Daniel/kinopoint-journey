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
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="relative">
        <span 
          className="absolute inset-0 rounded-full bg-primary/30 animate-ping" 
          style={{ animationDuration: '3s' }} 
        />
        <span className="relative flex items-center justify-center size-14 md:size-16 rounded-full bg-background border border-border-strong shadow-elegant hover:border-primary/60 transition-all duration-300">
          <img src={logoSymbol} alt="" className="size-8 md:size-9" />
          <span className="absolute -top-0.5 -right-0.5 flex size-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-70 animate-ping" />
            <span className="relative inline-flex rounded-full size-3 bg-primary border-2 border-background" />
          </span>
        </span>
      </div>
    </button>
  );
};
