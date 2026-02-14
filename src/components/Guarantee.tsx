import { ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const Guarantee = () => {
  return (
    <section className="bg-muted px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
          <ShieldCheck className="h-10 w-10 text-primary-foreground" />
        </div>

        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Sua Satisfação é Nossa <span className="text-secondary">Garantia</span>
        </h2>

        <p className="mx-auto mb-8 max-w-xl text-muted-foreground leading-relaxed">
          Trabalhamos apenas com equipamentos de alta qualidade e oferecemos <strong className="text-foreground">2 anos de garantia</strong>, instalação profissional e suporte com atendimento rápido. Seu investimento está protegido do início ao fim.
        </p>

        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gap-2 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90">
            <WhatsAppIcon className="h-5 w-5" />
            Garantir Meu Orçamento
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Guarantee;
