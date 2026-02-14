import { Droplets } from "lucide-react";
import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";
import heroImage from "@/assets/hero-pool.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Piscina aquecida com vapor ao entardecer"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      <div className="container relative mx-auto flex min-h-[90vh] max-w-5xl items-center px-4 py-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary backdrop-blur-sm">
            <Droplets className="h-4 w-4" />
            Tecnologia Inverter — Economia de até 80%
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Sua Piscina Aquecida
            <br />
            <span className="text-secondary">o Ano Inteiro</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg text-primary-foreground/80 md:text-xl">
            Aquecedores de piscina com tecnologia inverter que garantem conforto térmico e economia real na sua conta de energia.
          </p>

          <WhatsAppCTAButton>
            Solicitar Orçamento Grátis
          </WhatsAppCTAButton>

          <p className="mt-4 text-sm text-primary-foreground/60">
            Resposta rápida pelo WhatsApp • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
