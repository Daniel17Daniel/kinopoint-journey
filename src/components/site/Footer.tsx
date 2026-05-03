import { Link } from "react-router-dom";
import { Instagram, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-full.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 bg-surface/40 mt-24">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logo} alt="КіноPoint Film" className="h-14 mb-5" />
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Камерна школа акторської майстерності та журналістики для дорослих. Без тиску, без сцен зі шкільного театру — лише доросла робота над собою у творчому середовищі.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-red transition-all"
          >
            Залишити заявку <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4">Навігація</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-foreground/80 hover:text-gold transition-colors">Головна</Link></li>
            <li><Link to="/acting" className="text-foreground/80 hover:text-gold transition-colors">Акторська майстерність</Link></li>
            <li><Link to="/journalism" className="text-foreground/80 hover:text-gold transition-colors">Журналістика</Link></li>
            <li><Link to="/apply" className="text-foreground/80 hover:text-gold transition-colors">Заявка</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow mb-4">Контакти</div>
          <a
            href="https://instagram.com/kinopoint.film"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-foreground/85 hover:text-gold transition-colors mb-4"
          >
            <Instagram className="size-5" />
            <span>@kinopoint.film</span>
          </a>
          <div className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="size-5 mt-0.5 text-gold/80 shrink-0" />
            <span>Київ, вул. Антоновича, 47<br />Запис на заняття — за попередньою заявкою</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} КіноPoint Film. Усі права захищені.</p>
          <p className="opacity-70">Створено з увагою до деталей.</p>
        </div>
      </div>
    </footer>
  );
};
