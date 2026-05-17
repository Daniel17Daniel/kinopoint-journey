import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Send, Phone } from "lucide-react";
import logoSymbol from "@/assets/logo-symbol.png";
import { cn } from "@/lib/utils";

const PHONE = "+380123456789";
const TELEGRAM = "kinopoint_film";

const NAV_DESKTOP = [
  { to: "/acting", label: "Акторська майстерність" },
  { to: "/screenwriting", label: "Сценарне мистецтво" },
  { to: "/journalism", label: "Тележурналістика" },
  { to: "/about", label: "Про кіношколу" },
];

const NAV_MOBILE = [
  { to: "/", label: "Головна" },
  { to: "/acting", label: "Акторська майстерність" },
  { to: "/screenwriting", label: "Сценарне мистецтво" },
  { to: "/journalism", label: "Тележурналістика" },
  { to: "/about", label: "Про кіношколу" },
];

interface HeaderProps {
  onOpenHelper: () => void;
}

export const Header = ({ onOpenHelper }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const Brand = ({ compact = false }: { compact?: boolean }) => (
    <Link
      to="/"
      onClick={() => setOpen(false)}
      className="flex items-center gap-2.5 shrink-0"
      aria-label="KinoPoint Film"
    >
      <img
        src={logoSymbol}
        alt=""
        className={cn("transition-all duration-500 bg-transparent border-0", compact ? "h-8" : "h-9")}
      />
      <span className="font-display font-bold tracking-tight text-lg md:text-xl">
        <span className="text-foreground">Kino</span><span className="text-gold">Point</span>
      </span>
    </Link>
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/60 py-3"
            : "bg-gradient-to-b from-background/70 to-transparent py-4"
        )}
      >
        <div className="container-wide flex items-center justify-between gap-6">
          <Brand compact={scrolled} />

          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_DESKTOP.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-medium transition-colors rounded-md relative whitespace-nowrap",
                    isActive
                      ? "text-primary"
                      : "text-foreground/75 hover:text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gold text-background text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              Залишити заявку
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-foreground relative z-[110]"
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-background animate-fade-in flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
            <Brand compact />
            <button
              onClick={() => setOpen(false)}
              className="p-2 -mr-2 text-foreground"
              aria-label="Закрити меню"
            >
              <X className="size-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 pt-4 pb-8 flex flex-col">
            <ul className="space-y-0">
              {NAV_MOBILE.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between py-4 text-xl font-display font-semibold border-b border-border/40",
                        isActive ? "text-primary" : "text-foreground"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/40 my-4" />

            <div className="flex flex-col gap-3">
              <Link
                to="/apply"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-full h-12 rounded-md bg-gold text-background font-semibold hover:bg-gold/90 transition-colors"
              >
                Залишити заявку
              </Link>
              <a
                href="https://instagram.com/kinopoint.film"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-md border border-border-strong/60 text-foreground hover:border-gold/60 hover:text-gold transition-colors"
              >
                <Instagram className="size-4" />
                Instagram
              </a>
              <a
                href={`https://t.me/${TELEGRAM}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-md border border-border-strong/60 text-foreground hover:border-gold/60 hover:text-gold transition-colors"
              >
                <Send className="size-4" />
                Telegram
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-md border border-border-strong/60 text-foreground hover:border-gold/60 hover:text-gold transition-colors"
              >
                <Phone className="size-4" />
                Зателефонувати
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
