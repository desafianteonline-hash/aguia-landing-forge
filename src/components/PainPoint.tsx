import { Thermometer } from "lucide-react";

const PainPoint = () => {
  return (
    <section className="px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 md:h-16 md:w-16">
          <Thermometer className="h-7 w-7 text-secondary md:h-8 md:w-8" />
        </div>

        <h2 className="mb-8 text-4xl font-extrabold leading-tight text-foreground md:mb-10 md:text-5xl">
          Piscina Linda… <span className="text-secondary">Mas é Gelada?</span>
        </h2>

        <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground md:space-y-7 md:text-xl">
          <p>
            <span className="bg-secondary/30 px-1 text-foreground">Você investiu em uma área de lazer completa, construiu uma piscina incrível e imaginou momentos de diversão com a família e amigos.</span>
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
