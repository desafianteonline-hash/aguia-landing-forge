import { useState } from "react";
import { CheckCircle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import productResidencial from "@/assets/product-residencial.png";
import productComercial from "@/assets/product-comercial.png";
import productPremium from "@/assets/product-premium.png";
import productCompacto from "@/assets/product-compacto.png";

const products = [
  {
    src: productResidencial,
    alt: "Aquecedor Inverter - Linha Residencial",
    title: "Linha Residencial",
    application: "Piscinas até 30 mil litros",
  },
  {
    src: productComercial,
    alt: "Aquecedor Inverter - Linha Comercial",
    title: "Linha Comercial",
    application: "Piscinas até 80 mil litros",
  },
  {
    src: productPremium,
    alt: "Aquecedor Inverter - Linha Premium",
    title: "Linha Premium",
    application: "Piscinas até 120 mil litros",
  },
  {
    src: productCompacto,
    alt: "Aquecedor Inverter - Linha Compacta",
    title: "Linha Compacta",
    application: "Piscinas até 15 mil litros",
  },
];

const miniBenefits = [
  "Mais economia energética",
  "Funcionamento silencioso",
  "Longa durabilidade",
];

const Products = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="produtos" className="bg-muted/30 px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-foreground md:mb-6 md:text-5xl">
            Aquecedores <span className="text-secondary">Águia Hot</span> para sua Piscina
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Equipamentos de alta eficiência com tecnologia inverter para diferentes tamanhos de piscina.
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
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {product.application}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Mini-benefits */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:mt-10 md:gap-6">
          {miniBenefits.map((b) => (
            <div key={b} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-4 w-4 shrink-0 text-secondary" />
              <span className="text-sm md:text-base">{b}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center md:mt-10">
          <a href={getWhatsAppUrl("Olá! Quero saber qual aquecedor é ideal para minha piscina 🏊")} target="_blank" rel="noopener noreferrer" className="relative inline-block w-full sm:w-auto">
            <span className="absolute inset-0 animate-ping rounded-md bg-secondary opacity-20" />
            <Button size="lg" className="relative h-14 w-full gap-2 bg-secondary px-8 text-base font-bold text-secondary-foreground shadow-lg hover:bg-secondary/90 sm:w-auto">
              <WhatsAppIcon className="h-8 w-8" />
              Quero Saber Qual é o Ideal para Minha Piscina
            </Button>
          </a>
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
                <p className="text-sm text-muted-foreground">{products[selected].application}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
