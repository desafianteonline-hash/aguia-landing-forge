const Footer = () => {
  return (
    <footer className="border-t bg-foreground px-4 py-12 text-background/80">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-background">Aguia Hot</h3>
            <p className="text-sm leading-relaxed">
              Especialistas em aquecimento de piscinas com tecnologia inverter. Conforto e economia para você.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-background">Dados da Empresa</h4>
            <ul className="space-y-1 text-sm">
              <li>Razão Social: Aguia Hot LTDA</li>
              <li>CNPJ: 46.589.415/0001-43</li>
              <li>IE PE: 1219767-00</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-background">Contato</h4>
            <ul className="space-y-1 text-sm">
              <li>WhatsApp: (81) 9 9999-9999</li>
              <li>Pernambuco, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/20 pt-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} Aguia Hot LTDA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
