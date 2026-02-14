import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const faqs = [
  {
    q: "Quanto custa para manter um aquecedor de piscina ligado?",
    a: "Com a tecnologia inverter, o consumo é muito baixo — até 80% mais econômico que aquecedores tradicionais. O custo mensal depende do tamanho da piscina e da região, mas geralmente é surpreendentemente acessível.",
  },
  {
    q: "O aquecedor funciona em dias frios ou chuvosos?",
    a: "Sim! Os aquecedores inverter funcionam eficientemente mesmo em temperaturas mais baixas. O sistema ajusta automaticamente a potência conforme a necessidade.",
  },
  {
    q: "Qual o prazo de instalação?",
    a: "Após a aprovação do orçamento, a instalação é geralmente realizada em 1 a 3 dias úteis, dependendo da complexidade do projeto.",
  },
  {
    q: "Qual a garantia do equipamento?",
    a: "Oferecemos 2 anos de garantia em todos os equipamentos, além de suporte técnico com atendimento rápido para qualquer necessidade.",
  },
  {
    q: "Preciso de alguma adaptação na minha piscina?",
    a: "Na maioria dos casos, a instalação é simples e não requer grandes obras. Nossa equipe avalia o local e orienta sobre qualquer adequação necessária.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
            Perguntas <span className="text-secondary">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center md:mt-12">
          <p className="mb-4 text-sm text-muted-foreground">Ainda tem dúvidas? Fale direto com a gente!</p>
          <a href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre aquecedores de piscina.")} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full gap-2 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90 sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              Tirar Minhas Dúvidas
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
