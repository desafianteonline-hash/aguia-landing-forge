import { Wind, Flame, Thermometer } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const steps = [
  {
    icon: Wind,
    number: "01",
    title: "Captação de energia térmica",
    description: "O sistema extrai energia térmica do ar externo, funcionando com alta eficiência mesmo em dias frios.",
  },
  {
    icon: Flame,
    number: "02",
    title: "Aquecimento da água",
    description: "O calor captado é transferido para a água da piscina de forma eficiente.",
  },
  {
    icon: Thermometer,
    number: "03",
    title: "Manutenção automática da temperatura",
    description: "O sistema ajusta automaticamente para manter a temperatura estável.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-extrabold leading-tight text-foreground md:mb-4 md:text-5xl">
            Como funcionam os aquecedores <span className="text-secondary">Águia Hot</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            O aquecedor elétrico inverter capta o calor do ar e transfere para a água da piscina, aquecendo de forma eficiente e econômica. Ele ajusta automaticamente o funcionamento para manter a temperatura estável, evitando desperdício de energia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-sm md:p-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="mb-2 block text-sm font-bold text-secondary">{step.number}</span>
              <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-12">
          <a href={getWhatsAppUrl("Olá! Quero aquecer minha piscina 🏊‍♂️")} target="_blank" rel="noopener noreferrer" className="relative inline-block w-full sm:w-auto">
            <span className="absolute inset-0 animate-ping rounded-md bg-secondary opacity-20" />
            <Button size="lg" className="relative h-14 w-full gap-2 bg-secondary px-8 text-base font-bold text-secondary-foreground hover:bg-secondary/90 sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              Quero Aquecer Minha Piscina
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
