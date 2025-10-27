"use client";

import { useRouter } from 'next/navigation';

const FinalizarCadastroPage = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/login');
  };

  return (
    <div className="py-fluid-16 flex items-center justify-center bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md p-fluid-6 space-y-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg shadow-2xl shadow-primary/10">
        <div className="text-center">
          <h1 className="text-fluid-h2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Falta pouco!
          </h1>
          <p className="mt-2 text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">
            Crie uma senha segura para proteger sua conta.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">
              Nova Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">
              Confirme sua Senha
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Finalizar Cadastro e Acessar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinalizarCadastroPage;
