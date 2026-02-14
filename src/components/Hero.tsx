import { MessageCircle, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-secondary" />
      </div>

      <div className="container relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
          <Droplets className="h-4 w-4" />
          Tecnologia Inverter — Economia de até 80%
        </div>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Sua Piscina Aquecida
          <br />
          <span className="text-secondary">o Ano Inteiro</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
          Aquecedores de piscina com tecnologia inverter que garantem conforto térmico e economia real na sua conta de energia.
        </p>

        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="h-14 gap-3 bg-secondary px-8 text-base font-bold text-secondary-foreground shadow-lg hover:bg-secondary/90 md:h-16 md:px-10 md:text-lg">
            <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
            Solicitar Orçamento Grátis
          </Button>
        </a>

        <p className="mt-4 text-sm text-primary-foreground/60">
          Resposta rápida pelo WhatsApp • Sem compromisso
        </p>
      </div>
    </section>
  );
};

export default Hero;
