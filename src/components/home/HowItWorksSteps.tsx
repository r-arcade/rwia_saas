const HowItWorksSteps = () => {
  const steps = [
    {
      title: "Conecte",
      description: "Integre sua agenda e defina seus objetivos em linguagem natural em menos de 5 minutos."
    },
    {
      title: "Personalize",
      description: "Ajuste o tom de voz e as regras do seu assistente para que ele trabalhe do seu jeito."
    },
    {
      title: "Ative",
      description: "Disponibilize seu assistente no seu site ou WhatsApp e comece a economizar tempo."
    }
  ];

  return (
    <section className="w-full py-fluid-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-fluid-h2 font-semibold mb-fluid-10 text-light-foreground dark:text-dark-foreground">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-fluid-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-fluid-body font-bold mb-2 text-light-foreground dark:text-dark-foreground">{step.title}</h3>
              <p className="text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
