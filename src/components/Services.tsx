import servicePool from "@/assets/aquecedor-inverter.png";
import serviceInverter from "@/assets/service-inverter.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceFamily from "@/assets/service-family.jpg";

const Services = () => {
  return (
    <section id="servicos" className="px-5 py-14 md:px-4 md:py-28 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-4 md:mb-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary md:text-xs">
            O Que Oferecemos
          </span>
        </div>

        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:max-w-md md:text-4xl">
            Levando conforto e economia para a sua{" "}
            <span className="text-secondary">piscina, todos os dias</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-base">
            Trabalhamos com as melhores tecnologias em aquecimento de piscina para garantir eficiência energética, durabilidade e total satisfação.
          </p>
        </div>

        {/* Grid layout inspired by reference */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Image 1 - top left */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={servicePool}
              alt="Piscina aquecida com vapor"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Card 01 - top center */}
          <div className="flex flex-col justify-center rounded-2xl bg-primary/10 p-6 md:p-8">
            <span className="mb-3 text-base font-bold text-secondary md:text-sm">01</span>
            <h3 className="mb-2 text-xl font-bold text-foreground md:text-xl">
              Aquecimento por Trocador de Calor
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:text-sm">
              Tecnologia inverter com alta eficiência energética, capaz de aquecer sua piscina consumindo até 80% menos energia.
            </p>
          </div>

          {/* Image 2 - top right */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={serviceFamily}
              alt="Família aproveitando piscina aquecida"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Card 02 - bottom left */}
          <div className="flex flex-col justify-center rounded-2xl bg-primary/10 p-6 md:p-8">
            <span className="mb-3 text-base font-bold text-secondary md:text-sm">02</span>
            <h3 className="mb-2 text-xl font-bold text-foreground md:text-xl">
              Instalação Profissional
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:text-sm">
              Equipe especializada para instalação segura e otimizada, garantindo o máximo desempenho do seu aquecedor.
            </p>
          </div>

          {/* Image 3 - bottom center */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={serviceInverter}
              alt="Equipamento inverter para piscina"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Card 03 - bottom right */}
          <div className="flex flex-col justify-center rounded-2xl bg-primary/10 p-6 md:p-8">
            <span className="mb-3 text-base font-bold text-secondary md:text-sm">03</span>
            <h3 className="mb-2 text-xl font-bold text-foreground md:text-xl">
              Suporte Técnico Completo
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:text-sm">
              Assistência técnica dedicada para manutenção preventiva e corretiva, com peças originais e garantia de fábrica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
