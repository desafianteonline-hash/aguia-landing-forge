import { Check, X, AlertTriangle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Status = "yes" | "no" | "partial";

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === "yes") return <Check className="h-5 w-5 text-green-600" />;
  if (status === "no") return <X className="h-5 w-5 text-red-500" />;
  return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
};

const StatusLabel = ({ status, label }: { status: Status; label: string }) => (
  <div className="flex items-center gap-1.5">
    <StatusIcon status={status} />
    <span className="text-sm">{label}</span>
  </div>
);

const rows: { feature: string; inverter: { status: Status; label: string }; solar: { status: Status; label: string }; gas: { status: Status; label: string } }[] = [
  { feature: "Funciona em dias frios", inverter: { status: "yes", label: "Sim" }, solar: { status: "no", label: "Não" }, gas: { status: "yes", label: "Sim" } },
  { feature: "Funciona à noite", inverter: { status: "yes", label: "Sim" }, solar: { status: "no", label: "Não" }, gas: { status: "yes", label: "Sim" } },
  { feature: "Consumo", inverter: { status: "yes", label: "Baixo" }, solar: { status: "yes", label: "Baixo" }, gas: { status: "no", label: "Alto" } },
  { feature: "Controle de temperatura", inverter: { status: "yes", label: "Preciso" }, solar: { status: "no", label: "Instável" }, gas: { status: "partial", label: "Médio" } },
  { feature: "Dependência do clima", inverter: { status: "no", label: "Não" }, solar: { status: "partial", label: "Alta" }, gas: { status: "no", label: "Não" } },
  { feature: "Conforto", inverter: { status: "yes", label: "Alto" }, solar: { status: "no", label: "Baixo" }, gas: { status: "partial", label: "Médio" } },
];

const Comparison = () => {
  return (
    <section className="bg-muted px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-extrabold leading-tight text-foreground md:mb-4 md:text-5xl">
            Por Que o aquecedor elétrico Inverter <span className="text-secondary">Águia Hot</span> é a Melhor Escolha
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-primary/5">
                <th className="p-4 text-left text-sm font-semibold text-foreground">Característica</th>
                <th className="p-4 text-center text-sm font-bold text-primary">Inverter Elétrico ÁGUIA HOT</th>
                <th className="p-4 text-center text-sm font-semibold text-foreground">Solar</th>
                <th className="p-4 text-center text-sm font-semibold text-foreground">Gás</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/30"}>
                  <td className="p-4 text-sm font-medium text-foreground">{row.feature}</td>
                  <td className="p-4"><div className="flex justify-center"><StatusLabel {...row.inverter} /></div></td>
                  <td className="p-4"><div className="flex justify-center"><StatusLabel {...row.solar} /></div></td>
                  <td className="p-4"><div className="flex justify-center"><StatusLabel {...row.gas} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 md:hidden">
          {rows.map((row, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p className="mb-3 text-sm font-semibold text-foreground">{row.feature}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="mb-1 text-xs font-bold text-primary">Inverter Águia Hot</p>
                  <div className="flex justify-center"><StatusLabel {...row.inverter} /></div>
                </div>
                <div>
                  <p className="mb-1 text-xs text-muted-foreground">Solar</p>
                  <div className="flex justify-center"><StatusLabel {...row.solar} /></div>
                </div>
                <div>
                  <p className="mb-1 text-xs text-muted-foreground">Gás</p>
                  <div className="flex justify-center"><StatusLabel {...row.gas} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:mt-10 md:text-base">
          O sistema inverter oferece o melhor equilíbrio entre economia, conforto e praticidade, sendo ideal para quem quer usar a piscina com frequência.
        </p>

        <div className="mt-8 text-center md:mt-10">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="relative inline-block w-full sm:w-auto">
            <span className="absolute inset-0 animate-ping rounded-md bg-secondary opacity-20" />
            <Button size="lg" className="relative h-14 w-full gap-2 bg-secondary px-8 text-base font-bold text-secondary-foreground hover:bg-secondary/90 sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar Orçamento Agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
