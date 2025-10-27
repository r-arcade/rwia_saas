"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [isAgentLogin, setIsAgentLogin] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isAgentLogin) {
      router.push('/atendimento');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="py-fluid-16 flex items-center justify-center bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md p-fluid-6 space-y-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg shadow-2xl shadow-primary/10">
        <div className="text-center">
          <h1 className="text-fluid-h2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Bem-vindo de Volta
          </h1>
          <p className="mt-2 text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">
            Acesse sua conta para gerenciar seus agentes.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center">
            <input
              id="is-agent"
              name="is-agent"
              type="checkbox"
              checked={isAgentLogin}
              onChange={(e) => setIsAgentLogin(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="is-agent" className="ml-2 block text-fluid-sm text-light-foreground/80 dark:text-dark-foreground/80">
              Entrar como Agente
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">
            Não tem uma conta?{' '}
            <Link href="/cadastro" className="font-medium text-primary hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
