import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";

const CTAFinal = () => {
  return (
    <section className="bg-primary px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          Pronto Para Ter Sua Piscina
          <br />
          <span className="text-secondary">Aquecida o Ano Todo?</span>
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/80">
          Solicite agora seu orçamento gratuito e sem compromisso. Nossa equipe responde rapidamente pelo WhatsApp.
        </p>

        <WhatsAppCTAButton>
          Solicitar Orçamento Grátis
        </WhatsAppCTAButton>

        <p className="mt-4 text-sm text-primary-foreground/50">
          Atendimento de segunda a sábado • Resposta rápida
        </p>
      </div>
    </section>
  );
};

export default CTAFinal;
