import { useState } from "react";

const screenshots = [
  { id: 1, src: "/placeholder.svg", alt: "Depoimento cliente 1" },
  { id: 2, src: "/placeholder.svg", alt: "Depoimento cliente 2" },
  { id: 3, src: "/placeholder.svg", alt: "Depoimento cliente 3" },
  { id: 4, src: "/placeholder.svg", alt: "Depoimento cliente 4" },
  { id: 5, src: "/placeholder.svg", alt: "Depoimento cliente 5" },
  { id: 6, src: "/placeholder.svg", alt: "Depoimento cliente 6" },
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
