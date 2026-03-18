import { Zap, ThermometerSun, Volume2, Shield, Calendar, Wifi } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Economia de energia" },
  { icon: Calendar, title: "Piscina aquecida todos os dias e noites" },
  { icon: ThermometerSun, title: "Temperatura estável" },
  { icon: Volume2, title: "Baixo ruído" },
  { icon: Shield, title: "Alta durabilidade" },
  { icon: Wifi, title: "Controle Wi\u2011Fi" },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-foreground md:mb-6 md:text-5xl">
            Vantagens do <span className="text-secondary">Aquecimento Inverter</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground md:text-base">{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
