"use client";

import { useState } from 'react';
import Link from 'next/link';

const CadastroPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="py-fluid-16 flex items-center justify-center bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md p-fluid-6 space-y-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg shadow-2xl shadow-primary/10">
        {isSubmitted ? (
          <div className="text-center">
            <h1 className="text-fluid-h2 font-bold text-accent">
              Inscrição Recebida!
            </h1>
            <p className="mt-4 text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">
              Enviamos um e-mail de confirmação para você. Clique no link dentro dele para criar sua senha e finalizar seu cadastro.
            </p>
            <p className="mt-2 text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">
              (Para fins de demonstração, clique no botão abaixo para simular a confirmação do e-mail).
            </p>
            <Link href="/finalizar-cadastro">
              <button className="mt-8 w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md hover:opacity-90 transition-opacity">
                (Simular) Ir para Finalizar Cadastro
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-fluid-h2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Inicie seu Teste Gratuito
              </h1>
              <p className="mt-2 text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">
                Preencha os dados para começar.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">Nome Completo</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">E-mail</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">Celular</label>
                <input id="phone" name="phone" type="tel" required className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="company" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">Nome da Empresa</label>
                <input id="company" name="company" type="text" required className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="business-type" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">Tipo de Negócio</label>
                <input id="business-type" name="business-type" type="text" required className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="agent-name" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">Dê um nome para seu assistente de IA</label>
                <input id="agent-name" name="agent-name" type="text" required className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
                >
                  Solicitar Acesso
                </button>
              </div>
            </form>
            <div className="text-center">
              <p className="text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">
                Já tem uma conta?{' '}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Faça login
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CadastroPage;
