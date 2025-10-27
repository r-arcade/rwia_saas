import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-light-background dark:bg-dark-background border-t border-light-border dark:border-dark-border">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            <Link href="/">RW IA</Link>
          </div>
          <p className="text-sm text-light-foreground/50 dark:text-dark-foreground/50 mt-2">© 2025 RW IA. Todos os direitos reservados.</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
          <Link href="/politica-de-privacidade" className="text-light-foreground/80 dark:text-dark-foreground/80 hover:text-accent transition-colors">Política de Privacidade</Link>
          <Link href="/termos-de-uso" className="text-light-foreground/80 dark:text-dark-foreground/80 hover:text-accent transition-colors">Termos de Uso</Link>
          <a href="https://wa.me/559284671778" target="_blank" rel="noopener noreferrer" className="text-light-foreground/80 dark:text-dark-foreground/80 hover:text-accent transition-colors">Fale conosco</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
        </div>
      </div>
    </footer>
  );
};

export default Footer;