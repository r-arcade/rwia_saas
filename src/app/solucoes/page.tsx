import Link from 'next/link';
import Image from 'next/image';
import agenteVendasImage from '@/../public/images/solucoes-agente-vendas.png';
import assistenteInternoImage from '@/../public/images/solucoes-assistente-interno.png';

const SolucoesPage = () => {
  const solutions = [
    {
      title: "Assistente Pessoal de IA",
      description: "Seu assistente pessoal que qualifica clientes, agenda reuniões e gerencia seu calendário 24/7, liberando você para focar no trabalho estratégico.",
      benefits: ["Qualificação Automática de Clientes", "Agendamento de Serviços e Reuniões", "Redução de Tarefas Administrativas"],
      cta: "Crie seu Assistente Pessoal",
      imageSide: "right"
    },
    {
      title: "IA para Equipes",
      description: "Centralize o conhecimento da sua empresa e automatize processos internos. O assistente de IA responde dúvidas da equipe, padroniza informações e agiliza o onboarding de novos colaboradores.",
      benefits: ["Base de Conhecimento Centralizada", "Onboarding Automatizado", "Otimização de Processos Internos"],
      cta: "Conheça a IA para Equipes",
      imageSide: "left"
    }
  ];

  return (
    <div className="bg-light-background dark:bg-dark-background">
      {solutions.map((solution, index) => (
        <section key={index} className={`py-fluid-16 ${index % 2 !== 0 ? 'bg-light-card dark:bg-dark-card' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-fluid-10 items-center">
              <div className={`${solution.imageSide === 'left' ? 'lg:order-last' : ''}`}>
                <h1 className="text-fluid-h1 font-bold mb-4 text-light-foreground dark:text-dark-foreground">{solution.title}</h1>
                <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70 mb-fluid-6">{solution.description}</p>
                <ul className="space-y-4 mb-fluid-6">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-fluid-body text-light-foreground dark:text-dark-foreground">
                      <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/cadastro">
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
                    {solution.cta}
                  </button>
                </Link>
              </div>
              <div className="bg-light-background dark:bg-dark-background/50 border border-light-border dark:border-dark-border h-96 w-full rounded-lg flex items-center justify-center overflow-hidden">
                {index === 0 ? (
                  <Image
                    src={agenteVendasImage}
                    alt={solution.title}
                    width={1200}
                    height={900}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src={assistenteInternoImage}
                    alt={solution.title}
                    width={1200}
                    height={900}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SolucoesPage;
