import { Thermometer } from "lucide-react";

const PainPoint = () => {
  return (
    <section className="px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 md:h-16 md:w-16">
          <Thermometer className="h-7 w-7 text-secondary md:h-8 md:w-8" />
        </div>

        <h2 className="mb-6 text-3xl font-extrabold leading-tight text-foreground md:mb-8 md:text-5xl">
          Piscina Linda… <span className="text-secondary">Mas Gelada?</span>
        </h2>

        <div className="mx-auto max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:space-y-5 md:text-lg">
          <p>
            Você investiu em uma área de lazer completa, construiu uma piscina incrível e imaginou momentos de diversão com a família e amigos.
          </p>
          <p>
            Mas na prática, em muitos dias do ano, a água da piscina fica <strong className="text-foreground">fria demais para aproveitar</strong>.
          </p>
          <p className="text-foreground font-medium">
            Resultado: a piscina acaba se tornando apenas um elemento decorativo.
          </p>
          <p>
            Com um sistema de aquecimento de piscina adequado, você pode manter a água sempre na temperatura ideal e <strong className="text-foreground">aproveitar sua piscina em qualquer época do ano</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoint;
