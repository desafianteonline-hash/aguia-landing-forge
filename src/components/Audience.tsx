import { Home, Building2, Hotel, Trees } from "lucide-react";

const profiles = [
  { icon: Home, title: "Residências", description: "Famílias que querem aproveitar a piscina o ano todo com conforto e economia." },
  { icon: Building2, title: "Condomínios", description: "Áreas comuns com piscina aquecida agregam valor e satisfação dos moradores." },
  { icon: Hotel, title: "Hotéis e Pousadas", description: "Ofereça uma experiência premium aos hóspedes com piscina sempre na temperatura ideal." },
  { icon: Trees, title: "Sítios e Chácaras", description: "Transforme sua área de lazer em um refúgio aconchegante mesmo nos dias mais frios." },
];

const Audience = () => {
  return (
    <section id="para-quem" className="px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center md:mb-14">
          <h2 className="mb-3 text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
            Para Quem É o <span className="text-secondary">Aquecimento de Piscina</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Se você se identifica com algum desses perfis, temos a solução ideal para você.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {profiles.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary md:mb-4 md:h-16 md:w-16 md:rounded-2xl">
                <p.icon className="h-6 w-6 text-primary-foreground md:h-8 md:w-8" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground md:mb-2 md:text-lg">{p.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
