import Link from 'next/link';
import HeroAnimation from './HeroAnimation';

const HeroSection = () => {
  return (
    <section className="relative w-full py-fluid-16 overflow-hidden bg-light-background dark:bg-dark-background">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A1a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side: Content */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          <h1 className="text-fluid-h1 font-bold leading-tight max-w-2xl text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Contrate seu novo assistente. Sem CLT, sem 13º, sem férias.
          </h1>
          <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70 max-w-2xl text-center lg:text-left">
            Nossa IA qualifica seus clientes, agenda seus serviços e reuniões, e trabalha 24/7 por uma fração do custo de um funcionário. Recupere seu tempo para focar no que realmente importa.
          </p>
          <Link href="/cadastro">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-md text-fluid-body hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Crie seu Assistente de IA
            </button>
          </Link>
        </div>
        
        {/* Right Side: Visual Animation */}
        <HeroAnimation />
      </div>
    </section>
  );
};

export default HeroSection;
