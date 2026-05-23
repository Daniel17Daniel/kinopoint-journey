import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselCard {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  text: string;
}

interface CourseCarouselProps {
  cards: CarouselCard[];
  className?: string;
  autoplayInterval?: number; // ms, default 4500
}

export const CourseCarousel = ({
  cards,
  className = "",
  autoplayInterval = 4500,
}: CourseCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [total, setTotal] = useState(cards.length);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // How many cards visible at once
  const getVisible = () => {
    const w = trackRef.current?.offsetWidth ?? 0;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  };

  useEffect(() => {
    const update = () => {
      setTotal(Math.max(0, cards.length - getVisible()));
    };
    update();
    const ro = new ResizeObserver(update);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [cards.length]);

  const scrollTo = useCallback(
    (idx: number, fromUser = false) => {
      const clamped = Math.max(0, Math.min(idx, total));
      setActiveIdx(clamped);
      const track = trackRef.current;
      if (!track) return;
      const card = track.children[clamped] as HTMLElement | undefined;
      if (card) {
        track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
      }
      // Pause autoplay on user interaction, resume after 8s
      if (fromUser) {
        setIsPaused(true);
        if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = setTimeout(() => setIsPaused(false), 8000);
      }
    },
    [total]
  );

  // Autoplay
  useEffect(() => {
    if (total === 0 || isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => {
        const next = prev >= total ? 0 : prev + 1;
        const track = trackRef.current;
        if (track) {
          const card = track.children[next] as HTMLElement | undefined;
          if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
        }
        return next;
      });
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [total, isPaused, autoplayInterval]);

  // Sync activeIdx with manual scroll
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
    const clamped = Math.min(nearest, total);
    setActiveIdx(clamped);
    // Pause on manual scroll
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[calc(100%-1rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] flex flex-col rounded-2xl border border-border-strong bg-surface overflow-hidden hover:border-primary/40 transition-colors duration-300"
          >
            {/* Image area */}
            {card.image ? (
              <div className="relative aspect-[16/9] overflow-hidden shrink-0 bg-background [transform:translateZ(0)]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover opacity-95 transition-all duration-500 hover:opacity-100"
                />
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.6) 100%)`
                  }}
                />
              </div>
            ) : card.icon ? (
              <div className="flex items-center justify-center h-[100px] bg-background/60 border-b border-border/60 shrink-0">
                <span className="inline-flex items-center justify-center size-14 rounded-2xl bg-primary/10 text-primary">
                  {card.icon}
                </span>
              </div>
            ) : null}

            {/* Caption block */}
            <div className="p-5 flex flex-col gap-1.5 flex-1">
              <p className="font-display font-semibold text-base text-foreground leading-snug">
                {card.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      {total > 0 && (
        <div className="flex items-center justify-between mt-5">
          {/* Dots */}
          <div className="flex gap-1.5 items-center">
            {Array.from({ length: total + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i, true)}
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
              onClick={() => scrollTo(activeIdx - 1, true)}
              disabled={activeIdx === 0}
              className="inline-flex items-center justify-center size-9 rounded-full border border-border-strong hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Попередній"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => scrollTo(activeIdx + 1, true)}
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
