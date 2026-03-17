import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto gasta um aquecedor de piscina por mês?",
    a: "Com a tecnologia inverter, o consumo é muito baixo — até 60% mais econômico que aquecedores tradicionais. O custo mensal depende do tamanho da piscina, mas geralmente é surpreendentemente acessível.",
  },
  {
    q: "O aquecedor funciona em dias frios?",
    a: "Sim! Os aquecedores inverter funcionam eficientemente mesmo em temperaturas mais baixas. O sistema ajusta automaticamente a potência conforme a necessidade.",
  },
  {
    q: "Precisa de alguma adaptação na piscina?",
    a: "Na maioria dos casos, a instalação é simples e não requer grandes obras. Nossa equipe avalia o local e orienta sobre qualquer adequação necessária.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-extrabold leading-tight text-foreground md:mb-4 md:text-5xl">
            Dúvidas <span className="text-secondary">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
