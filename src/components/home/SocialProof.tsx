import { ArrowTrendingUpIcon, ShieldCheckIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline';

const SocialProof = () => {
  const items = [
    { title: "Integração WhatsApp", description: "Conecte-se em segundos.", icon: <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-primary" /> },
    { title: "Segurança de Dados", description: "Conformidade com a LGPD.", icon: <ShieldCheckIcon className="w-8 h-8 text-primary" /> },
    { title: "99.9% Uptime", description: "Alta disponibilidade garantida.", icon: <ArrowTrendingUpIcon className="w-8 h-8 text-primary" /> },
    { title: "Suporte Humanizado", description: "Estamos sempre aqui para ajudar.", icon: <HeartIcon className="w-8 h-8 text-primary" /> },
  ];

  return (
    <section className="w-full py-fluid-12 bg-light-card dark:bg-dark-card/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-fluid-h2 font-semibold mb-fluid-10 text-light-foreground dark:text-dark-foreground">
          Confiança e Segurança em Cada Interação
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-fluid-body font-bold text-light-foreground dark:text-dark-foreground">{item.title}</h3>
              <p className="text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;