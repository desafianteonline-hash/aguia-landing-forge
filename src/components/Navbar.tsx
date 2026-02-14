import { useState, useEffect } from "react";
import { Flame, Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-background shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-4 md:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary md:h-10 md:w-10">
            <Flame className="h-5 w-5 text-secondary-foreground md:h-6 md:w-6" />
          </div>
          <span
            className={`text-lg font-extrabold tracking-tight md:text-xl transition-colors duration-300 ${
              scrolled || mobileOpen ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Águia <span className="text-secondary">Hot</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button desktop */}
        <div className="hidden md:block">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90">
              <WhatsAppIcon className="h-4 w-4" />
              Orçamento Grátis
            </Button>
          </a>
        </div>

        {/* Mobile: CTA mini + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="h-9 gap-1.5 bg-secondary px-3 text-xs font-bold text-secondary-foreground hover:bg-secondary/90">
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Orçamento
            </Button>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`transition-colors duration-300 ${scrolled || mobileOpen ? "text-foreground" : "text-primary-foreground"}`}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - full screen overlay */}
      <div
        className={`fixed inset-0 top-[57px] z-50 transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        <nav className="flex h-full flex-col gap-2 bg-background px-5 py-6">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-4 text-lg font-semibold text-foreground transition-colors hover:bg-muted active:bg-muted"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 border-t border-border pt-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              <Button className="h-14 w-full gap-2 bg-secondary text-base font-bold text-secondary-foreground hover:bg-secondary/90">
                <WhatsAppIcon className="h-5 w-5" />
                Solicitar Orçamento Grátis
              </Button>
            </a>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Resposta rápida pelo WhatsApp
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
