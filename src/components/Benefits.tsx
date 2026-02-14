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
    <section id="beneficios" className="bg-muted px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Por Que Escolher um Aquecedor <span className="text-secondary">Inverter</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Tecnologia de ponta para máximo conforto com o menor custo operacional.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} className="border-none shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90">
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
