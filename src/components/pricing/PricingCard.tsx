"use client";

import { useState } from 'react';
import Link from 'next/link';

// Define o tipo das props para clareza e segurança
type Props = {
  planName: string;
  price: { monthly: number; annually: number };
  billingCycle: 'monthly' | 'annually';
  description: string;
  features: string[];
  isFeatured?: boolean;
  isEnterprise?: boolean;
};

// Componente para o ícone de carregamento
const LoadingSpinner = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

// Componente principal do Card de Preços
const PricingCard = ({ planName, price, billingCycle, description, features, isFeatured = false, isEnterprise = false }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const currentPrice = billingCycle === 'monthly' ? price.monthly : price.annually;
  const priceSuffix = billingCycle === 'monthly' ? '/mês' : '/ano';

  // Função para lidar com o clique no botão de checkout
  const handleCheckout = async () => {
    setIsLoading(true);
    console.log(`Iniciando checkout para o plano: ${planName}`);
    
    // Simulação de 2 segundos de espera da rede
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simula um resultado para teste (pode ser alterado para testar o fluxo de erro)
    const isSuccess = true; 
    
    if (isSuccess) {
      window.location.href = '/pagamento/sucesso';
    } else {
      window.location.href = '/pagamento/erro';
    }
  };

  return (
    <div className={`bg-light-card dark:bg-dark-card rounded-lg p-fluid-6 flex flex-col border ${isFeatured ? 'border-primary shadow-2xl shadow-primary/20' : 'border-light-border dark:border-dark-border'}`}>
      {isFeatured && (
        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
          MAIS POPULAR
        </span>
      )}
      <h3 className="text-fluid-body font-bold mb-2 text-light-foreground dark:text-dark-foreground">{planName}</h3>
      <p className="text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70 mb-fluid-4">{description}</p>
      
      {/* Renderização condicional do preço ou texto 'Sob Consulta' */}
      {!isEnterprise ? (
        <div className="mb-fluid-4 h-[56px] flex items-center">
          <span className="text-fluid-h2 font-bold text-light-foreground dark:text-dark-foreground">R$ {currentPrice}</span>
          <span className="text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">{priceSuffix}</span>
        </div>
      ) : (
        <div className="mb-fluid-4 h-[56px] flex items-center">
           <span className="text-fluid-body font-bold text-light-foreground dark:text-dark-foreground">Sob Consulta</span>
        </div>
      )}

      <ul className="space-y-3 mb-fluid-6 flex-grow text-light-foreground dark:text-dark-foreground">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-fluid-sm">
            <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Renderização condicional do botão de Ação */}
      {isEnterprise ? (
        <a href="https://wa.me/559284671778" target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3 rounded-md font-semibold transition-opacity text-fluid-sm bg-light-background dark:bg-dark-background/50 text-light-foreground dark:text-dark-foreground hover:bg-light-border dark:hover:bg-dark-border">
          Fale com um Especialista
        </a>
      ) : (
        <button 
          onClick={handleCheckout}
          disabled={isLoading}
          className={`w-full py-3 rounded-md font-semibold transition-opacity text-fluid-sm flex items-center justify-center ${isFeatured ? 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90' : 'bg-light-background dark:bg-dark-background/50 text-light-foreground dark:text-dark-foreground hover:bg-light-border dark:hover:bg-dark-border'} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? <LoadingSpinner /> : `Começar com o Plano ${planName}`}
        </button>
      )}
    </div>
  );
};

export default PricingCard;