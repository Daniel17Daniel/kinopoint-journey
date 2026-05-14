import { Link } from "react-router-dom";
import { Instagram, MapPin, ArrowUpRight, Mail, Phone } from "lucide-react";
import logoSymbol from "@/assets/logo-symbol.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 bg-surface/40 mt-24">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
            <img src={logoSymbol} alt="" className="h-10" />
            <span className="font-display font-bold text-2xl tracking-tight">
              <span className="text-foreground">Kino</span><span className="text-gold">Point</span>
            </span>
          </Link>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Камерна творча школа в Одесі. Акторська майстерність, сценарне мистецтво та експрес-курс тележурналістики — для тих, хто хоче бути живим у кадрі, на сцені й у власній історії.
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
            <li><Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Головна</Link></li>
            <li><Link to="/acting" className="text-foreground/80 hover:text-primary transition-colors">Акторська майстерність</Link></li>
            <li><Link to="/screenwriting" className="text-foreground/80 hover:text-primary transition-colors">Сценарне мистецтво</Link></li>
            <li><Link to="/journalism" className="text-foreground/80 hover:text-primary transition-colors">Тележурналістика</Link></li>
            <li><Link to="/apply" className="text-foreground/80 hover:text-primary transition-colors">Заявка</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow mb-4">Контакти</div>
          <a
            href="https://instagram.com/kinopoint.film"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-foreground/85 hover:text-primary transition-colors mb-3"
          >
            <Instagram className="size-5" />
            <span>Instagram</span>
          </a>
          <a href="mailto:kinopoint.film.odesa@gmail.com" className="flex items-center gap-3 text-foreground/85 hover:text-primary transition-colors mb-3 break-all">
            <Mail className="size-5 shrink-0" />
            <span>kinopoint.film.odesa@gmail.com</span>
          </a>
          <a href="tel:+380123456789" className="flex items-center gap-3 text-foreground/85 hover:text-primary transition-colors mb-4">
            <Phone className="size-5 shrink-0" />
            <span>+38 (012) 345-67-89</span>
          </a>
          <div className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="size-5 mt-0.5 text-primary/80 shrink-0" />
            <span>вул. Святослава Караванського, 22, Одеса</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} KinoPoint Film. Усі права захищені.</p>
          <p className="opacity-70">Створено з увагою до деталей.</p>
        </div>
      </div>
    </footer>
  );
};
