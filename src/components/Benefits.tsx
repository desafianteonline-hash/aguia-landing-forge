import { Zap, ThermometerSun, TrendingUp, Leaf, Wifi, Volume2, Cpu } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const benefits = [
  {
    icon: Cpu,
    title: "Full Inverter",
    description: "Tecnologia 100% inverter para máxima eficiência energética, reduzindo o consumo em até 80%.",
  },
  {
    icon: Wifi,
    title: "Controle por Wi-Fi",
    description: "Controle a temperatura da sua piscina de qualquer lugar pelo celular, com total praticidade.",
  },
  {
    icon: Volume2,
    title: "Super Silencioso",
    description: "Funcionamento ultrasilencioso que não perturba o ambiente da sua casa ou vizinhança.",
  },
  {
    icon: ThermometerSun,
    title: "Conforto o Ano Todo",
    description: "Aproveite sua piscina mesmo no inverno, com temperatura ideal automaticamente controlada.",
  },
  {
    icon: TrendingUp,
    title: "Valorização do Imóvel",
    description: "Piscina aquecida agrega valor ao seu imóvel e melhora a qualidade de vida da família.",
  },
  {
    icon: Leaf,
    title: "Sustentável",
    description: "Menor impacto ambiental com eficiência energética superior e uso de gás ecológico R-32.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="bg-muted px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
            Por Que Escolher um <span className="text-secondary">Aquecedor Águia Hot</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-base">
            Tecnologia de ponta para máximo conforto com o menor custo operacional.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} className="border-none shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="flex gap-3 p-4 md:gap-4 md:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 md:h-12 md:w-12">
                  <b.icon className="h-5 w-5 text-primary md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-foreground md:text-lg">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-12">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="h-14 w-full gap-2 bg-secondary text-base font-bold text-secondary-foreground hover:bg-secondary/90 sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              Quero Economizar — Falar no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
