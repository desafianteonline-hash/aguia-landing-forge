import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import eagleLogo from "@/assets/eagle-logo.png";
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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // No body overflow lock — menu scrolls internally

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#ffffff] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary md:h-10 md:w-10">
              <img src={eagleLogo} alt="Águia Hot logo" className="h-7 w-7 object-contain md:h-8 md:w-8" />
            </div>
            <span
              className={`text-lg font-extrabold tracking-tight md:text-xl transition-colors duration-300 ${
                scrolled || mobileOpen ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Águia <span className="text-secondary">Hot</span>
            </span>
          </a>

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

          <div className="hidden md:block">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 bg-secondary font-bold text-secondary-foreground hover:bg-secondary/90">
                <WhatsAppIcon className="h-4 w-4" />
                Orçamento Grátis
              </Button>
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="h-9 shrink-0 gap-1.5 bg-secondary px-3 text-xs font-bold text-secondary-foreground hover:bg-secondary/90">
                <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                <span className="whitespace-nowrap">Orçamento</span>
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
      </header>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          className="fixed left-0 right-0 top-[57px] z-[60] max-h-[calc(100vh-57px)] overflow-y-auto border-t border-border shadow-xl md:hidden"
          style={{ backgroundColor: "#ffffff" }}
        >
          <nav className="flex flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-semibold text-foreground transition-colors hover:bg-muted active:bg-muted"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 border-t border-border pt-4 pb-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                <Button className="h-12 w-full gap-2 bg-secondary text-sm font-bold text-secondary-foreground hover:bg-secondary/90">
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  Solicitar Orçamento Grátis
                </Button>
              </a>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Resposta rápida pelo WhatsApp
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
