import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="w-full py-fluid-16 bg-gradient-to-b from-light-background to-light-card dark:from-dark-background dark:to-dark-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-fluid-h1 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Pronto para transformar seu negócio?
        </h2>
        <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70 mb-fluid-6 max-w-xl mx-auto">
          Comece hoje mesmo. Sem compromisso, sem cartão de crédito.
        </p>
        <Link href="/cadastro">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-md text-fluid-body hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            Iniciar Teste Grátis
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
