import Link from 'next/link';
import Image from 'next/image';
import passo1Image from '@/../public/images/como-funciona-passo-1.png';
import passo2Image from '@/../public/images/como-funciona-passo-2.png';
import passo3Image from '@/../public/images/como-funciona-passo-3.png';
import passo4Image from '@/../public/images/como-funciona-passo-4.png';

const ComoFuncionaPage = () => {
  const steps = [
    {
      title: "1. Conecte sua Agenda",
      description: "Integre seu Google Calendar ou Outlook com um clique. Nosso sistema usará sua disponibilidade real para agendar reuniões e evitar conflitos.",
      imageSide: "left",
    },
    {
      title: "2. Defina Seus Objetivos",
      description: "Em linguagem natural, diga ao seu assistente o que você precisa. Ex: 'Qualifique clientes para meu serviço de consultoria e agende uma chamada de 30 minutos'.",
      imageSide: "right",
    },
    {
      title: "3. Teste seu Assistente",
      description: "Converse com seu novo assistente de IA em uma interface de simulação. Ajuste as instruções em tempo real até que ele se comporte exatamente como você deseja.",
      imageSide: "left",
    },
    {
      title: "4. Ative no seu Site ou WhatsApp",
      description: "Com tudo pronto, ative seu assistente no seu site ou conecte-o ao seu número de WhatsApp Business para começar a automatizar seus agendamentos.",
      imageSide: "right",
    },
  ];

  return (
    <div className="py-fluid-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-fluid-12">
          <h1 className="text-fluid-h1 font-bold text-light-foreground dark:text-dark-foreground">Uma Plataforma Simples e Poderosa</h1>
          <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70 mt-4 max-w-3xl mx-auto">
            Veja como é fácil transformar a maneira como sua empresa se comunica e opera em apenas quatro passos.
          </p>
        </div>

        <div className="space-y-fluid-12">
          {steps.map((step, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-fluid-10 items-center">
              <div className={`bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border h-80 w-full rounded-lg flex items-center justify-center overflow-hidden ${step.imageSide === 'right' ? 'lg:order-last' : ''}`}>
                {index === 0 ? (
                  <Image
                    src={passo1Image}
                    alt={step.title}
                    width={1200}
                    height={900}
                    className="object-cover w-full h-full"
                  />
                ) : index === 1 ? (
                  <Image
                    src={passo2Image}
                    alt={step.title}
                    width={1200}
                    height={900}
                    className="object-cover w-full h-full"
                  />
                ) : index === 2 ? (
                  <Image
                    src={passo3Image}
                    alt={step.title}
                    width={1200}
                    height={900}
                    className="object-cover w-full h-full"
                  />
                ) : index === 2 ? (
                  <Image
                    src={passo3Image}
                    alt={step.title}
                    width={1200}
                    height={900}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src={passo4Image}
                    alt={step.title}
                    width={1200}
                    height={900}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="space-y-4">
                <h2 className="text-fluid-h2 font-bold text-light-foreground dark:text-dark-foreground">{step.title}</h2>
                <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <section className="text-center mt-fluid-20">
          <h2 className="text-fluid-h2 font-bold mb-4 text-light-foreground dark:text-dark-foreground">Pronto para começar?</h2>
          <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70 mb-fluid-6">
            Automatize seus processos e melhore seu atendimento hoje mesmo.
          </p>
          <Link href="/cadastro">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-md text-fluid-body hover:opacity-90 transition-opacity">
              Iniciar Teste Grátis
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ComoFuncionaPage;
