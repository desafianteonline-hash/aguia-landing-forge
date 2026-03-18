import { Check, X, AlertTriangle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Status = "yes" | "no" | "partial";

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === "yes") return <Check className="h-5 w-5 text-green-600 md:h-6 md:w-6" />;
  if (status === "no") return <X className="h-5 w-5 text-red-500 md:h-6 md:w-6" />;
  return <AlertTriangle className="h-4 w-4 text-yellow-500 md:h-5 md:w-5" />;
};

const rows = [
  { feature: "Dias frios", inverter: { status: "yes" as Status, label: "Sim" }, solar: { status: "no" as Status, label: "Não" }, gas: { status: "yes" as Status, label: "Sim" } },
  { feature: "À noite", inverter: { status: "yes" as Status, label: "Sim" }, solar: { status: "no" as Status, label: "Não" }, gas: { status: "yes" as Status, label: "Sim" } },
  { feature: "Consumo", inverter: { status: "yes" as Status, label: "Baixo" }, solar: { status: "yes" as Status, label: "Baixo" }, gas: { status: "no" as Status, label: "Alto" } },
  { feature: "Temperatura", inverter: { status: "yes" as Status, label: "Preciso" }, solar: { status: "no" as Status, label: "Instável" }, gas: { status: "partial" as Status, label: "Médio" } },
  { feature: "Clima", inverter: { status: "no" as Status, label: "Não depende" }, solar: { status: "partial" as Status, label: "Depende" }, gas: { status: "no" as Status, label: "Não depende" } },
  { feature: "Conforto", inverter: { status: "yes" as Status, label: "Alto" }, solar: { status: "no" as Status, label: "Baixo" }, gas: { status: "partial" as Status, label: "Médio" } },
];

const Cell = ({ status, label }: { status: Status; label: string }) => (
  <div className="flex flex-col items-center gap-0.5">
    <StatusIcon status={status} />
    <span className="text-xs font-medium md:text-base">{label}</span>
  </div>
);

const Comparison = () => {
  return (
    <section className="bg-muted px-2 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-foreground md:mb-6 md:text-5xl">
            Por Que o aquecedor elétrico Inverter <span className="text-secondary">Águia Hot</span> é a Melhor Escolha
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm md:rounded-2xl">
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b border-border">
                <th className="w-[28%] p-2 text-left text-xs font-semibold text-foreground md:w-auto md:p-5 md:text-base"></th>
                <th className="w-[28%] border-l border-r border-border bg-green-50 p-2 text-center text-xs font-bold text-primary md:w-auto md:p-5 md:text-base">
                  <span className="hidden md:inline">Inverter Elétrico ÁGUIA HOT</span>
                  <span className="md:hidden">Águia Hot</span>
                </th>
                <th className="w-[22%] border-r border-border bg-red-50 p-2 text-center text-xs font-bold uppercase text-foreground md:w-auto md:p-5 md:text-base">Solar</th>
                <th className="w-[22%] bg-red-50 p-2 text-center text-xs font-bold uppercase text-foreground md:w-auto md:p-5 md:text-base">Gás</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/30"}>
                  <td className="p-2 text-xs font-bold uppercase text-foreground md:p-5 md:text-base">{row.feature}</td>
                  <td className="border-l border-r border-border bg-green-50/60 p-2 md:p-5">
                    <div className="flex justify-center"><Cell {...row.inverter} /></div>
                  </td>
                  <td className="border-r border-border bg-red-50/60 p-2 md:p-5">
                    <div className="flex justify-center"><Cell {...row.solar} /></div>
                  </td>
                  <td className="bg-red-50/60 p-2 md:p-5">
                    <div className="flex justify-center"><Cell {...row.gas} /></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground md:mt-10 md:text-xl">
          O sistema inverter oferece o melhor equilíbrio entre economia, conforto e praticidade, sendo ideal para quem quer usar a piscina com frequência.
        </p>

        <div className="mt-8 text-center md:mt-10">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="relative inline-block w-full sm:w-auto">
            <span className="absolute inset-0 animate-ping rounded-md bg-secondary opacity-20" />
            <Button size="lg" className="relative h-14 w-full gap-2 bg-secondary px-8 text-lg font-bold text-secondary-foreground hover:bg-secondary/90 sm:w-auto">
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
