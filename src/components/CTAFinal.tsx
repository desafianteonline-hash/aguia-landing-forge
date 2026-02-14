import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import logoBranco from "@/assets/logo-branco.png";

const CTAFinal = () => {
  return (
    <section className="bg-primary px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:mb-4 md:text-4xl lg:text-5xl">
          Pronto para ter sua piscina
          <br />
          <span className="text-secondary">aquecida o ano todo?</span>
        </h2>

        <p className="mx-auto mb-8 max-w-xl text-sm text-primary-foreground/80 md:mb-10 md:text-lg">
          Solicite agora seu orçamento gratuito e sem compromisso. Nossa equipe responde rapidamente pelo WhatsApp.
        </p>

        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="relative inline-block w-full sm:w-auto">
          <span className="absolute inset-0 animate-ping rounded-md bg-secondary opacity-20" />
          <Button size="lg" className="relative h-14 w-full gap-2 bg-secondary px-8 text-base font-bold text-secondary-foreground shadow-xl hover:bg-secondary/90 sm:w-auto md:h-16 md:gap-3 md:px-10 md:text-lg">
            <WhatsAppIcon className="h-5 w-5 md:h-6 md:w-6" />
            Solicitar Orçamento Grátis
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
