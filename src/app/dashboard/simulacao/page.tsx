"use client";

import { useState } from 'react';
import Link from 'next/link';
import ChatInterface from '@/components/dashboard/ChatInterface';

const SimulacaoPage = () => {
  const [prompt, setPrompt] = useState('Você é um assistente pessoal de uma clínica de estética chamado "Alex". Sua principal função é agendar consultas para novos pacientes. Seja sempre cordial, profissional e busque coletar o nome, telefone e o procedimento de interesse do paciente antes de sugerir um horário.');

  const handleSaveAndRestart = () => {
    console.log("Prompt salvo:", prompt);
    alert("Assistente atualizado! O chat será reiniciado.");
  };

  return (
    <div className="py-fluid-8 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-fluid-6">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-fluid-4">
              <h2 className="text-fluid-h3 font-bold text-light-foreground dark:text-dark-foreground mb-4">
                Personalize seu Assistente
              </h2>
              <p className="text-light-foreground/70 dark:text-dark-foreground/70 mb-4 text-fluid-sm">
                Use linguagem natural para definir a personalidade, o tom e os objetivos do seu assistente de IA.
              </p>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={10}
                className="w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-fluid-sm text-light-foreground dark:text-dark-foreground"
                placeholder="Ex: Você é um assistente de vendas..."
              />
              <button
                onClick={handleSaveAndRestart}
                className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
              >
                Salvar e Reiniciar Chat
              </button>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-fluid-4 text-white">
              <h3 className="text-fluid-body font-bold">Desbloqueie todo o Potencial</h3>
              <p className="text-fluid-sm opacity-80 mt-2 mb-4">
                Faça o upgrade para o plano Business e tenha acesso a múltiplos assistentes, integrações e muito mais.
              </p>
              <Link href="/planos">
                <button className="w-full py-2 px-4 bg-white/90 text-primary font-semibold rounded-md hover:bg-white">
                  Ver Planos
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ChatInterface />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SimulacaoPage;
