import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import logoBranco from "@/assets/logo-branco.png";

const CTAFinal = () => {
  return (
    <section className="bg-primary px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-extrabold leading-tight text-primary-foreground md:mb-6 md:text-5xl">
          Pronto para aproveitar sua piscina
          <br />
          <span className="text-secondary">o ano todo?</span>
        </h2>

        <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80 md:mb-10 md:text-xl">
          Fale com um especialista e descubra o melhor sistema para sua piscina.
        </p>

        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="relative inline-block w-full sm:w-auto">
          <span className="absolute inset-0 animate-ping rounded-md bg-secondary opacity-20" />
          <Button size="lg" className="relative h-14 w-full gap-2 bg-secondary px-8 text-base font-bold uppercase text-secondary-foreground shadow-xl hover:bg-secondary/90 sm:w-auto md:h-16 md:gap-3 md:px-10 md:text-lg">
            <WhatsAppIcon className="h-8 w-8 md:h-10 md:w-10" />
            Solicitar Orçamento no WhatsApp
          </Button>
        </a>

        <p className="mt-3 text-xs text-primary-foreground/50 md:mt-4 md:text-sm">
          Atendimento de segunda a sábado • Resposta rápida
        </p>

        <img src={logoBranco} alt="Águia Aquecedores" className="mx-auto mt-8 h-12 object-contain md:mt-12 md:h-16" />
      </div>
    </section>
  );
};

export default CTAFinal;
