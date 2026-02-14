import { ShieldCheck, Wrench, Headphones, Award, MessageCircle } from "lucide-react";
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
    <section id="diferenciais" className="bg-muted px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Nossos <span className="text-secondary">Diferenciais</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-xl bg-card p-6 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20">
                <item.icon className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 border-primary font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="h-5 w-5" />
              Falar com um Especialista
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
