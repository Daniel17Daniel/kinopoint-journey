import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselCard {
  icon?: React.ReactNode;
  title: string;
  text: string;
}

interface CourseCarouselProps {
  cards: CarouselCard[];
  className?: string;
}

export const CourseCarousel = ({ cards, className = "" }: CourseCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [total, setTotal] = useState(cards.length);

  // Calculate how many cards are visible at once based on container width
  const getVisible = () => {
    const w = trackRef.current?.offsetWidth ?? 0;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  };

  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const update = () => {
      const v = getVisible();
      setVisible(v);
      setTotal(Math.max(0, cards.length - v));
    };
    update();
    const ro = new ResizeObserver(update);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [cards.length]);

  const scrollTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, total));
    setActiveIdx(clamped);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  };

  // sync activeIdx with scroll
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let nearest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft - track.scrollLeft);
      if (dist < minDist) { minDist = dist; nearest = i; }
    });
    setActiveIdx(Math.min(nearest, total));
  };

  return (
    <div className={`relative ${className}`}>
      {/* Track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[calc(100%-1rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] flex flex-col rounded-2xl border border-border-strong bg-surface overflow-hidden hover:border-primary/40 transition-colors duration-300"
          >
            {/* Icon area */}
            {card.icon && (
              <div className="flex items-center justify-center h-[100px] bg-background/60 border-b border-border/60 shrink-0">
                <span className="inline-flex items-center justify-center size-14 rounded-2xl bg-primary/10 text-primary">
                  {card.icon}
                </span>
              </div>
            )}
            {/* Caption block */}
            <div className="p-5 flex flex-col gap-1.5 flex-1">
              <p className="font-display font-semibold text-base text-foreground leading-snug">{card.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls — only show when more than visible */}
      {total > 0 && (
        <div className="flex items-center justify-between mt-5">
          {/* Dots */}
          <div className="flex gap-1.5">
            {Array.from({ length: total + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? "w-5 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-border-strong hover:bg-muted-foreground"
                }`}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scrollTo(activeIdx - 1)}
              disabled={activeIdx === 0}
              className="inline-flex items-center justify-center size-9 rounded-full border border-border-strong hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Попередній"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => scrollTo(activeIdx + 1)}
              disabled={activeIdx >= total}
              className="inline-flex items-center justify-center size-9 rounded-full border border-border-strong hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Наступний"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
