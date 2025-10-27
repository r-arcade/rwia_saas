import Link from 'next/link';
import { XCircleIcon } from '@heroicons/react/24/solid';

const PagamentoErroPage = () => {
  return (
    <div className="py-fluid-16 flex items-center justify-center bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md p-fluid-6 text-center bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg shadow-2xl shadow-red-500/10">
        
        <XCircleIcon className="w-20 h-20 text-red-500 mx-auto" />

        <h1 className="text-fluid-h2 font-bold text-red-500 mt-4">
          Pagamento Falhou
        </h1>
        
        <p className="mt-4 text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">
          Houve um problema ao processar seu pagamento ou a transação foi cancelada.
        </p>
        
        <p className="mt-2 text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">
          Nenhuma cobrança foi realizada. Por favor, tente novamente ou entre em contato com o suporte se o problema persistir.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/planos" className="w-full">
            <button className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md hover:opacity-90 transition-opacity">
              Tentar Novamente
            </button>
          </Link>
          <Link href="/" className="w-full">
            <button className="w-full py-3 px-4 bg-light-border dark:bg-dark-border text-light-foreground dark:text-dark-foreground font-semibold rounded-md hover:bg-light-border/80 dark:hover:bg-dark-border/80 transition-opacity">
              Voltar para a Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PagamentoErroPage;
