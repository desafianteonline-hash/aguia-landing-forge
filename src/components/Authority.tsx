import { Clock, ShoppingCart, Users, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Clock, numericValue: 10, prefix: "+", suffix: "", label: "Anos de experiência" },
  { icon: ShoppingCart, numericValue: 1000, prefix: "+", suffix: "", label: "Aquecedores vendidos", formatNumber: true },
  { icon: Users, numericValue: 800, prefix: "+", suffix: "", label: "Clientes satisfeitos" },
  { icon: MapPin, numericValue: 50, prefix: "+", suffix: "", label: "Cidades atendidas" },
];

const formatNum = (n: number, format?: boolean) =>
  format ? n.toLocaleString("pt-BR") : String(n);

const CountUp = ({ target, prefix, suffix, format, duration = 2000 }: { target: number; prefix: string; suffix: string; format?: boolean; duration?: number }) => {
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
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
      {prefix}{formatNum(count, format)}{suffix}
    </span>
  );
};

const Authority = () => {
  return (
    <section className="bg-primary px-5 py-14 md:px-4 md:py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-primary-foreground md:mb-14 md:text-5xl lg:text-6xl">
          Por que confiar na <span className="text-secondary">Águia Hot</span>?
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20">
                <stat.icon className="h-7 w-7 text-secondary" />
              </div>
              <CountUp target={stat.numericValue} prefix={stat.prefix} suffix={stat.suffix} format={stat.formatNumber} />
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
