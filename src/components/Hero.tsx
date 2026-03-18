import { CheckCircle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import heroImage from "@/assets/hero-pool.jpg";

const proofs = [
  "Piscina aquecida o ano inteiro",
  "Baixo consumo de energia",
  "Instalação profissional",
];

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[90vh]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Piscina aquecida com vapor ao entardecer"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50 md:from-primary/90 md:via-primary/70 md:to-primary/40" />
      </div>

      <div className="container relative mx-auto flex min-h-[70vh] max-w-5xl items-center px-5 pt-20 pb-12 md:min-h-[90vh] md:px-4 md:py-20">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl tracking-tight text-primary-foreground md:mb-8 md:text-5xl lg:text-6xl" style={{ lineHeight: 1.15, fontWeight: 900 }}>
            Chega de Piscina Fria.
          </h1>
          <h1 className="mb-6 text-4xl tracking-tight text-secondary md:mb-8 md:text-5xl lg:text-6xl" style={{ lineHeight: 1.15, fontWeight: 900 }}>
            Aproveite Sua Piscina o Ano Inteiro.
          </h1>

          <p className="mb-6 max-w-xl text-xl text-primary-foreground/90 md:mb-8 md:text-2xl" style={{ lineHeight: 1.6 }}>
            Instalação profissional de aquecimento para piscina com tecnologia inverter que mantém a água sempre na temperatura ideal com baixo consumo de energia.
          </p>

          <div className="mb-8 flex flex-col gap-3 md:mb-10">
            {proofs.map((proof) => (
              <div key={proof} className="flex items-center gap-2 text-primary-foreground">
                <CheckCircle className="h-5 w-5 shrink-0 text-secondary md:h-5 md:w-5" />
                <span className="text-base md:text-lg">{proof}</span>
              </div>
            ))}
          </div>

          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="relative inline-block">
            <span className="absolute inset-0 animate-ping rounded-md bg-secondary opacity-20" />
            <Button size="lg" className="relative h-12 gap-2 bg-secondary px-6 text-sm font-bold uppercase text-secondary-foreground shadow-lg hover:bg-secondary/90 md:h-16 md:gap-3 md:px-10 md:text-lg">
              <WhatsAppIcon className="h-5 w-5 md:h-6 md:w-6" />
              Solicitar Orçamento no WhatsApp
            </Button>
          </a>

          <p className="mt-3 text-xs text-primary-foreground/60 md:mt-4 md:text-sm">
            Resposta rápida pelo WhatsApp • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
