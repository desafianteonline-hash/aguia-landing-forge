import { Home, Building2, Hotel, Trees } from "lucide-react";

const profiles = [
  { icon: Home, title: "Residências", description: "Famílias que querem aproveitar a piscina o ano todo com conforto e economia." },
  { icon: Building2, title: "Condomínios", description: "Áreas comuns com piscina aquecida agregam valor e satisfação dos moradores." },
  { icon: Hotel, title: "Hotéis e Pousadas", description: "Ofereça uma experiência premium aos hóspedes com piscina sempre na temperatura ideal." },
  { icon: Trees, title: "Sítios e Chácaras", description: "Transforme sua área de lazer em um refúgio aconchegante mesmo nos dias mais frios." },
];

const Audience = () => {
  return (
    <section id="para-quem" className="px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Para Quem É o <span className="text-secondary">Aquecimento de Piscina</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Se você se identifica com algum desses perfis, temos a solução ideal para você.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <p.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
