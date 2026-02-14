import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Recife, PE",
    text: "Instalamos o aquecedor inverter e a diferença é absurda. A piscina está sempre agradável e a conta de luz quase não mudou. Super recomendo!",
  },
  {
    name: "Fernanda S.",
    location: "Jaboatão dos Guararapes, PE",
    text: "Atendimento excelente desde o orçamento até a instalação. A equipe é muito profissional e o produto funciona perfeitamente.",
  },
  {
    name: "Roberto A.",
    location: "Olinda, PE",
    text: "Meu hotel agora oferece piscina aquecida o ano todo. Os hóspedes adoram e isso virou um diferencial competitivo enorme.",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-primary px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:mb-4 md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-2xl text-base text-primary-foreground/70">
            Depoimentos reais de quem já investiu em conforto e economia.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-none bg-primary-foreground/10 backdrop-blur-sm">
              <CardContent className="p-5 md:p-6">
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary md:h-4 md:w-4" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-primary-foreground/90">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground md:text-base">{t.name}</p>
                  <p className="text-xs text-primary-foreground/60">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
