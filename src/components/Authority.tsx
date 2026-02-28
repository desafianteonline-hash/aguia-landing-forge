import { Clock, ShoppingCart, Users, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, value: "+10", label: "Anos de experiência" },
  { icon: ShoppingCart, value: "+1.000", label: "Aquecedores vendidos" },
  { icon: Users, value: "+800", label: "Clientes satisfeitos" },
  { icon: MapPin, value: "+50", label: "Cidades atendidas" },
];

const Authority = () => {
  return (
    <section className="bg-primary px-5 py-14 md:px-4 md:py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-primary-foreground md:mb-14 md:text-4xl">
          Por que confiar na <span className="text-secondary">Águia Hot</span>?
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20">
                <stat.icon className="h-7 w-7 text-secondary" />
              </div>
              <span className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-primary-foreground/80 md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;
