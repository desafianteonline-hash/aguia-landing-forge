import { Droplets } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import heroImage from "@/assets/hero-pool.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[90vh]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Piscina aquecida com vapor ao entardecer"
          className="h-full w-full object-cover object-center"
          style={{ objectPosition: '50% 50%' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50 md:from-primary/90 md:via-primary/70 md:to-primary/40" />
      </div>

      <div className="container relative mx-auto flex min-h-[70vh] max-w-5xl items-center px-5 pt-20 pb-12 md:min-h-[90vh] md:px-4 md:py-20">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 text-xs font-medium text-secondary backdrop-blur-sm md:mb-6 md:px-4 md:py-2 md:text-sm">
            <Droplets className="h-3.5 w-3.5 md:h-4 md:w-4" />
            Tecnologia Inverter — Economia de até 80%
          </div>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground md:mb-6 md:text-5xl lg:text-6xl">
            Sua Piscina Aquecida
            <br />
            <span className="text-secondary">o Ano Inteiro</span>
          </h1>

          <p className="mb-8 max-w-xl text-base text-primary-foreground md:mb-10 md:text-xl">
            Aquecedores de piscina com tecnologia inverter que garantem conforto térmico e economia real na sua conta de energia.
          </p>

          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="relative inline-block">
            <span className="absolute inset-0 animate-ping rounded-md bg-secondary opacity-20" />
            <Button size="lg" className="relative h-12 gap-2 bg-secondary px-6 text-sm font-bold text-secondary-foreground shadow-lg hover:bg-secondary/90 md:h-16 md:gap-3 md:px-10 md:text-lg">
              <WhatsAppIcon className="h-5 w-5 md:h-6 md:w-6" />
              Solicitar Orçamento Grátis
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
