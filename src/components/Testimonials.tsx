import { useState } from "react";
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
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="depoimentos" className="bg-primary px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:mb-4 md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-2xl text-base text-primary-foreground/70">
            Veja depoimentos reais de quem já investiu em conforto e economia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {screenshots.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(s.src)}
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

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Depoimento ampliado"
            className="max-h-[90vh] max-w-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Testimonials;
