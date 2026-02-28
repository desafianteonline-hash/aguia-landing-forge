import { useState } from "react";

const products = [
  {
    src: "/placeholder.svg",
    alt: "Aquecedor Águia Hot - Modelo 1",
    title: "Aquecedor Inverter Residencial",
  },
  {
    src: "/placeholder.svg",
    alt: "Aquecedor Águia Hot - Modelo 2",
    title: "Aquecedor Inverter Comercial",
  },
  {
    src: "/placeholder.svg",
    alt: "Aquecedor Águia Hot - Modelo 3",
    title: "Aquecedor Inverter Premium",
  },
  {
    src: "/placeholder.svg",
    alt: "Aquecedor Águia Hot - Modelo 4",
    title: "Aquecedor Inverter Compacto",
  },
];

const Products = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="produtos" className="bg-muted/30 px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-extrabold leading-tight text-foreground md:mb-4 md:text-5xl">
            Nossos <span className="text-secondary">Produtos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Conheça nossa linha completa de aquecedores de piscina com tecnologia inverter.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((product, i) => (
            <button
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.src}
                  alt={product.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 text-center md:p-4">
                <h3 className="text-sm font-semibold text-foreground md:text-base">
                  {product.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelected(null)}>
            <div className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="absolute right-3 top-3 z-10 rounded-full bg-foreground/80 p-2 text-background hover:bg-foreground">
                ✕
              </button>
              <img src={products[selected].src} alt={products[selected].alt} className="max-h-[80vh] w-full object-contain" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-foreground">{products[selected].title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
