import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PagamentoSucessoPage = () => {
  return (
    <div className="py-fluid-16 flex items-center justify-center bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md p-fluid-6 text-center bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg shadow-2xl shadow-primary/10">
        
        <CheckCircleIcon className="w-20 h-20 text-accent mx-auto" />

        <h1 className="text-fluid-h2 font-bold text-accent mt-4">
          Pagamento Aprovado!
        </h1>
        
        <p className="mt-4 text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">
          Sua assinatura foi ativada com sucesso. Estamos felizes em ter você conosco!
        </p>
        
                  <p className="mt-2 text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">
                    Agora você pode configurar seu novo assistente de IA e começar a automatizar seus agendamentos.
                  </p>        
        <Link href="/dashboard">
          <button className="mt-8 w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md hover:opacity-90 transition-opacity">
            Ir para o Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PagamentoSucessoPage;
