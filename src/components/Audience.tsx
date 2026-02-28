import { Home, Hotel, Trees, Stethoscope } from "lucide-react";

const profiles = [
  { icon: Home, title: "Residências e Condomínios", description: "Famílias e condomínios que querem aproveitar a piscina o ano todo com conforto e economia." },
  { icon: Hotel, title: "Hotéis e Pousadas", description: "Ofereça uma experiência premium aos hóspedes com piscina sempre na temperatura ideal." },
  { icon: Stethoscope, title: "Clínicas", description: "Piscinas terapêuticas com temperatura controlada para reabilitação e bem-estar dos pacientes." },
  { icon: Trees, title: "Sítios e Chácaras", description: "Transforme sua área de lazer em um refúgio aconchegante mesmo nos dias mais frios." },
];

const Audience = () => {
  return (
    <section id="para-quem" className="px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
            Para quem é o <span className="text-secondary">Aquecedor Águia Hot</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Se você se identifica com algum desses perfis, temos a solução ideal para você.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {profiles.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary md:mb-4 md:h-16 md:w-16 md:rounded-2xl">
                <p.icon className="h-6 w-6 text-primary-foreground md:h-8 md:w-8" />
              </div>
              <h3 className="mb-1 text-base font-semibold text-foreground md:mb-2 md:text-lg">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
