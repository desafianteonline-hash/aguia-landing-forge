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

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-lg backdrop-blur-md"
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
            className={`text-lg font-extrabold tracking-tight md:text-xl ${
              scrolled ? "text-foreground" : "text-primary-foreground"
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background shadow-xl md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
              onClick={() => setMobileOpen(false)}
            >
              <Button className="w-full gap-2 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90">
                <WhatsAppIcon className="h-4 w-4" />
                Orçamento Grátis
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
