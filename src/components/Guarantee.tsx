import { ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const Guarantee = () => {
  return (
    <section className="bg-muted px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary md:mb-6 md:h-20 md:w-20">
          <ShieldCheck className="h-8 w-8 text-primary-foreground md:h-10 md:w-10" />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
          Sua Satisfação é Nossa <span className="text-secondary">Garantia</span>
        </h2>

        <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:mb-8 md:text-base">
          Trabalhamos apenas com equipamentos de alta qualidade e oferecemos <strong className="text-foreground">2 anos de garantia</strong>, instalação profissional e suporte com atendimento rápido. Seu investimento está protegido do início ao fim.
        </p>

        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="w-full gap-2 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90 sm:w-auto">
            <WhatsAppIcon className="h-5 w-5" />
            Garantir Meu Orçamento
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Guarantee;
