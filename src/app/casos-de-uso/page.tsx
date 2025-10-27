"use client";

import { useState } from 'react';
import Image from 'next/image';

const useCases = [
  {
    sector: "Profissionais Liberais",
    challenge: "Você perde tempo valioso em chamadas e e-mails com potenciais clientes que não estão prontos para fechar, em vez de focar no trabalho que gera receita.",
    solution: "Seu assistente de IA qualifica cada lead com perguntas-chave. Ela identifica as melhores oportunidades e agenda reuniões apenas com os clientes certos, diretamente no seu calendário.",
    features: ["Qualificação de Clientes 24/7", "Agendamento Direto na Agenda", "Filtro de Leads Desqualificados"],
  },
  {
    sector: "Clínicas e Consultórios",
    challenge: "A gestão manual de agendamentos e confirmações consome horas do seu dia, resultando em falhas de comunicação e horários vagos por falta de comparecimento.",
    solution: "A IA funciona como sua recepcionista. Ela agenda, confirma e reagenda consultas via chat, enviando lembretes automáticos para reduzir o não comparecimento e garantir sua agenda cheia.",
    features: ["Agendamento Inteligente", "Lembretes Automáticos via Chat", "Respostas a Dúvidas Frequentes"],
  },
];

const CasosDeUsoPage = () => {
  const [activeTab, setActiveTab] = useState(useCases[0].sector);
  const activeUseCase = useCases.find(uc => uc.sector === activeTab);

  return (
    <div className="py-fluid-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-fluid-10">
          <h1 className="text-fluid-h1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Soluções Sob Medida para o Seu Setor
          </h1>
          <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70 mt-4 max-w-3xl mx-auto">
            Não importa o tamanho ou a área da sua empresa, a automação com IA pode gerar um impacto real.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b border-light-border dark:border-dark-border mb-fluid-10">
          {useCases.map((useCase) => (
            <button
              key={useCase.sector}
              onClick={() => setActiveTab(useCase.sector)}
              className={`px-6 py-3 text-fluid-body font-semibold transition-colors ${
                activeTab === useCase.sector
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-light-foreground/70 dark:text-dark-foreground/70 hover:text-light-foreground dark:hover:text-dark-foreground'
              }`}
            >
              {useCase.sector}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeUseCase && (
          <div className="grid lg:grid-cols-2 gap-fluid-10 items-center">
            <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border h-96 w-full rounded-lg flex items-center justify-center overflow-hidden">
              {activeUseCase.sector === "Profissionais Liberais" ? (
                <Image
                  src="/images/casos-de-uso-profissionais.png"
                  alt={activeUseCase.sector}
                  width={1200}
                  height={900}
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src="/images/casos-de-uso-clinicas.png"
                  alt={activeUseCase.sector}
                  width={1200}
                  height={900}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-fluid-h3 font-semibold text-secondary mb-2">O Desafio</h3>
                <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">{activeUseCase.challenge}</p>
              </div>
              <div>
                <h3 className="text-fluid-h3 font-semibold text-primary mb-2">A Solução</h3>
                <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">{activeUseCase.solution}</p>
              </div>
              <div>
                <h3 className="text-fluid-h3 font-semibold text-accent mb-2">Funcionalidades em Destaque</h3>
                <ul className="space-y-2 text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">
                  {activeUseCase.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CasosDeUsoPage;
