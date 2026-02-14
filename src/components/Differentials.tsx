import { ShieldCheck, Wrench, Headphones, Award } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const items = [
  { icon: ShieldCheck, title: "Garantia de 2 Anos", description: "Todos os equipamentos com 2 anos de garantia para sua total segurança." },
  { icon: Wrench, title: "Instalação Profissional", description: "Equipe técnica especializada para instalação correta e segura." },
  { icon: Headphones, title: "Suporte e Atendimento Rápido", description: "Assistência pós-venda ágil e dedicada para qualquer dúvida ou manutenção." },
  { icon: Award, title: "Marcas Líderes", description: "Trabalhamos com as melhores marcas do mercado de aquecimento." },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="bg-muted px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
            Nossos <span className="text-secondary">Diferenciais</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex gap-3 rounded-xl bg-card p-5 shadow-sm md:gap-4 md:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20 md:h-10 md:w-10">
                <item.icon className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-12">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="relative inline-block w-full sm:w-auto">
            <span className="absolute inset-0 animate-ping rounded-md bg-primary opacity-20" />
            <Button variant="outline" size="lg" className="relative h-14 w-full gap-2 border-primary text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              Falar com um Especialista
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
