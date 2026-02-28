import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import t4 from "@/assets/testimonial-4.jpg";
import t5 from "@/assets/testimonial-5.jpg";
import t6 from "@/assets/testimonial-6.jpg";

const screenshots = [
  { id: 1, src: t4, alt: "Depoimento cliente - melhor investimento" },
  { id: 2, src: t1, alt: "Depoimento cliente - piscina quentinha" },
  { id: 3, src: t2, alt: "Depoimento cliente - primeira vez bateu 33 graus" },
  { id: 4, src: t3, alt: "Depoimento cliente - aquecedor aqueceu bem" },
  { id: 5, src: t5, alt: "Depoimento cliente - está maravilhoso" },
  { id: 6, src: t6, alt: "Depoimento cliente - excelente investimento" },
];

const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);

  const prev = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i - 1 + screenshots.length) % screenshots.length : null));
  }, []);

  const next = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i + 1) % screenshots.length : null));
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStart.current = null;
  }, [next, prev]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, prev, next]);

  return (
    <section id="depoimentos" className="bg-primary px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-extrabold text-primary-foreground md:mb-4 md:text-5xl lg:text-6xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-2xl text-base text-primary-foreground/70">
            Veja depoimentos reais de quem já investiu em conforto e economia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {screenshots.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setSelectedIndex(index)}
              className="overflow-hidden rounded-xl border-2 border-primary-foreground/10 transition-transform hover:scale-[1.03] focus:outline-none"
            >
              <img
                src={s.src}
                alt={s.alt}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-white/30 md:left-6"
          >
            <ChevronLeft className="h-7 w-7 md:h-8 md:w-8" />
          </button>

          <img
            src={screenshots[selectedIndex].src}
            alt={screenshots[selectedIndex].alt}
            className="max-h-[85vh] max-w-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-white/30 md:right-6"
          >
            <ChevronRight className="h-7 w-7 md:h-8 md:w-8" />
          </button>

          <div className="absolute bottom-6 flex gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                className={`h-2 w-2 rounded-full transition-colors ${i === selectedIndex ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
