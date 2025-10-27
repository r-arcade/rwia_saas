import Link from 'next/link';

const SolutionsPreview = () => {
  const solutions = [
    {
      title: "Assistente Pessoal de IA",
      description: "Qualifica clientes e gerencia sua agenda para que você possa focar no que realmente importa.",
      link: "/solucoes"
    },
    {
      title: "IA para Equipes",
      description: "Automatiza processos e centraliza o conhecimento, aumentando a produtividade do seu time.",
      link: "/solucoes"
    }
  ];

  return (
    <section className="w-full py-fluid-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-fluid-h2 font-semibold mb-4 text-light-foreground dark:text-dark-foreground">Nossas Soluções</h2>
        <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70 mb-fluid-10 max-w-2xl mx-auto">
          Do atendimento ao cliente à otimização de processos internos, temos a solução de IA ideal para sua empresa.
        </p>
        <div className="grid md:grid-cols-2 gap-fluid-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-fluid-6 rounded-lg text-left transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-fluid-h3 font-bold mb-2 text-light-foreground dark:text-dark-foreground">{solution.title}</h3>
              <p className="text-light-foreground/70 dark:text-dark-foreground/70 mb-4">
                {solution.description}
              </p>
              <Link href={solution.link} className="text-primary font-semibold hover:underline">
                Saiba Mais &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;
