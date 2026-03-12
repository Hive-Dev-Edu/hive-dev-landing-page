const Footer = () => {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <span className="font-heading text-xl font-bold text-foreground">
              Hive<span className="honey-gradient-text">.Dev</span>
            </span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              Tecnologia educacional nascida da pesquisa, feita para fortalecer
              o que a escola já faz de melhor.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Origem", href: "#origem" },
                { label: "Valores", href: "#valores" },
                { label: "Soluções", href: "#solucoes" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm">Contato</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:contato@hive.dev" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contato@hive.dev
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Falar com a equipe
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hive.Dev. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground italic">
            Feito com cuidado, por gente da educação.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
