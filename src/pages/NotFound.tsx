import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <div className="min-h-[70vh] container-narrow flex flex-col items-center justify-center text-center py-24">
    <p className="eyebrow mb-6">404</p>
    <h1 className="h-display mb-5">Сторінку не знайдено.</h1>
    <p className="text-muted-foreground max-w-md mb-10">
      Можливо, посилання застаріло або сторінка переїхала. Поверніться на головну — звідти все видно.
    </p>
    <Link
      to="/"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-gold-foreground font-semibold hover:shadow-gold transition-all"
    >
      <ArrowLeft className="size-4" /> На головну
    </Link>
  </div>
);

export default NotFound;
