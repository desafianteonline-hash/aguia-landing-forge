import { useEffect, useRef, useState } from "react";
import { Clock, ShoppingCart, Users, MapPin } from "lucide-react";
import equipe from "@/assets/equipe-aguia-hot.png";
import suporte from "@/assets/suporte-aguia-hot.png";
import serviceInstallation from "@/assets/service-installation.jpg";

const stats = [
  { icon: Clock, value: 10, prefix: "+", label: "Anos de experiência" },
  { icon: ShoppingCart, value: 1000, prefix: "+", label: "Aquecedores vendidos", format: true },
  { icon: Users, value: 1000, prefix: "+", label: "Clientes satisfeitos", format: true },
  { icon: MapPin, value: 50, prefix: "+", label: "Cidades atendidas" },
];

const formatNum = (n: number, fmt?: boolean) => fmt ? n.toLocaleString("pt-BR") : String(n);

const CountUp = ({ target, prefix, format, duration = 2000 }: { target: number; prefix: string; format?: boolean; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="text-3xl font-extrabold text-secondary md:text-4xl">
      {prefix}{formatNum(count, format)}
    </span>
  );
};

const AboutUs = () => {
  return (
    <section id="sobre" className="bg-primary px-5 py-14 md:px-4 md:py-28">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
            Conheça a <span className="text-secondary">Águia Hot</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-primary-foreground/80 md:text-lg">
            Somos especialistas em aquecimento de piscina com tecnologia inverter, levando conforto e economia para centenas de famílias em todo o Brasil.
          </p>
        </div>

        {/* Photos grid */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mb-16 md:gap-6">
          <div className="overflow-hidden rounded-2xl">
            <img src={equipe} alt="Equipe Águia Hot" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={serviceInstallation} alt="Instalação profissional de aquecedor" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={suporte} alt="Suporte técnico Águia Hot" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20">
                <stat.icon className="h-7 w-7 text-secondary" />
              </div>
              <CountUp target={stat.value} prefix={stat.prefix} format={stat.format} />
              <span className="mt-1 text-sm text-primary-foreground/80 md:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
