import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo-full.png";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Головна" },
  { to: "/acting", label: "Акторська майстерність" },
  { to: "/journalism", label: "Журналістика" },
  { to: "/apply", label: "Заявка" },
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
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-gradient-to-b from-background/70 to-transparent py-5"
      )}
    >
      <div className="container-wide flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="КіноPoint Film">
          <img src={logo} alt="" className={cn("transition-all duration-500", scrolled ? "h-9" : "h-11")} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  isActive
                    ? "text-gold"
                    : "text-foreground/75 hover:text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://instagram.com/kinopoint.film"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-gold transition-colors px-2 py-2"
            aria-label="Instagram"
          >
            <Instagram className="size-4" />
          </a>
          <button
            onClick={onOpenHelper}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gold text-gold-foreground font-semibold text-sm hover:shadow-gold hover:scale-[1.02] transition-all duration-300"
          >
            Підібрати напрям
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-foreground"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-background/98 backdrop-blur-2xl transition-all duration-300 origin-top",
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container-wide pt-8 pb-10 flex flex-col h-full">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-4 text-2xl font-display font-semibold border-b border-border/50",
                    isActive ? "text-gold" : "text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://instagram.com/kinopoint.film"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-4 text-2xl font-display font-semibold border-b border-border/50 text-foreground flex items-center gap-3"
            >
              <Instagram className="size-5" /> Instagram
            </a>
          </nav>
          <button
            onClick={() => {
              setOpen(false);
              onOpenHelper();
            }}
            className="mt-8 w-full py-4 rounded-full bg-gold text-gold-foreground font-semibold text-lg"
          >
            Підібрати напрям
          </button>
        </div>
      </div>
    </header>
  );
};
