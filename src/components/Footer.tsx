const Footer = () => {
  return (
    <footer className="border-t bg-foreground px-5 py-10 text-background/80 md:px-4 md:py-12">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-6 text-center md:grid-cols-3 md:gap-8 md:text-left">
          <div>
            <h3 className="mb-2 text-lg font-bold text-background md:mb-3">Aguia Hot</h3>
            <p className="text-xs leading-relaxed md:text-sm">
              Especialistas em aquecimento de piscinas com tecnologia inverter. Conforto e economia para você.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-background md:mb-3">Dados da Empresa</h4>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>Razão Social: Aguia Hot LTDA</li>
              <li>CNPJ: 46.589.415/0001-43</li>
              <li>IE PE: 1219767-00</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-background md:mb-3">Contato</h4>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>WhatsApp: (81) 9 9941-4376</li>
              <li>Pernambuco, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-background/20 pt-4 text-center text-xs text-background/50 md:mt-10 md:pt-6">
          © {new Date().getFullYear()} Aguia Hot LTDA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
