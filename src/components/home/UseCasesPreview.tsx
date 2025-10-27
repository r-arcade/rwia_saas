import Link from 'next/link';
import Image from 'next/image';

const UseCasesPreview = () => {
  const cases = [
    {
      title: "Chega de Perder Tempo com Agendamentos",
      description: "Deixe a IA qualificar seus clientes e agendar as reuniões importantes, para que você possa focar no que realmente gera valor para o seu negócio.",
      imageSide: "left",
      link: "/casos-de-uso"
    },
    {
      title: "Reduza Faltas e Mantenha a Agenda Cheia",
      description: "Nossa IA confirma consultas e envia lembretes automáticos via chat, diminuindo o não comparecimento e garantindo um fluxo constante de clientes.",
      imageSide: "right",
      link: "/casos-de-uso"
    }
  ];

  return (
    <section className="w-full py-fluid-16 bg-light-card dark:bg-dark-card">
      <div className="container mx-auto px-4 space-y-fluid-16">
        {cases.map((useCase, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-fluid-10 items-center">
            <div className={`bg-light-background dark:bg-dark-background/50 border border-light-border dark:border-dark-border h-80 w-full rounded-lg flex items-center justify-center overflow-hidden ${useCase.imageSide === 'right' ? 'lg:order-last' : ''}`}>
              {index === 0 ? (
                <Image
                  src="/images/home-usecase-profissionais.png"
                  alt={useCase.title}
                  width={1200}
                  height={900}
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src="/images/home-usecase-clinicas.png"
                  alt={useCase.title}
                  width={1200}
                  height={900}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-fluid-h2 font-bold text-light-foreground dark:text-dark-foreground">{useCase.title}</h3>
              <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">
                {useCase.description}
              </p>
              <Link href={useCase.link} className="text-primary font-semibold hover:underline">
                Ver Caso de Uso &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesPreview;
