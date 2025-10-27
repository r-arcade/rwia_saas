"use client";

import { useState } from 'react';
import PricingCard from '@/components/pricing/PricingCard';
import Accordion from '@/components/pricing/Accordion';

const pricingData = [
  {
    planName: 'Profissional',
    price: { monthly: 129, annually: 1290 },
    description: 'Ideal para autônomos e freelancers que precisam de uma solução robusta.',
    features: ['4.000 Requisições/mês', '1 Agente de IA', 'Integração com WhatsApp/Site', 'Suporte Padrão'],
  },
  {
    planName: 'Business',
    price: { monthly: 399, annually: 3990 },
    description: 'Perfeito para clínicas e pequenas empresas com maior volume de interações.',
    features: ['15.000 Requisições/mês', 'Até 3 Agentes de IA', 'Integração com CRM e Agenda', 'Dashboard de Análise'],
    isFeatured: true,
  },
  {
    planName: 'Performance',
    price: { monthly: 1199, annually: 11990 },
    description: 'Para operações em crescimento que necessitam de escala e análise avançada.',
    features: ['50.000 Requisições/mês', 'Agentes de IA Ilimitados', 'Acesso à API', 'Suporte Prioritário'],
  },
  {
    planName: 'Enterprise',
    price: { monthly: 0, annually: 0 }, // Preço não aplicável
    description: 'Para grandes volumes, infraestrutura dedicada e necessidades customizadas.',
    features: ['Volume de Requisições Sob Medida', 'Gerente de Contas Dedicado', 'SLA Personalizado'],
    isEnterprise: true,
  },
];

const faqData = [
    {
        question: "O que é considerado uma 'requisição'?",
        answer: "Cada mensagem enviada para a inteligência artificial para ser processada conta como uma requisição. Uma conversa típica entre um cliente e a IA consome, em média, de 6 a 8 requisições."
    },
    {
        question: "O que acontece se eu exceder o limite de requisições?",
        answer: "Você será notificado e terá a opção de comprar pacotes de requisições adicionais para continuar o serviço sem interrupções, ou poderá fazer o upgrade para o próximo plano."
    },
    {
        question: "Posso mudar de plano a qualquer momento?",
        answer: "Sim, você pode fazer o upgrade ou downgrade do seu plano a qualquer momento. A alteração será refletida no seu próximo ciclo de faturamento."
    },
    {
        question: "Vocês oferecem um teste gratuito?",
        answer: "Sim, oferecemos um teste gratuito de 7 dias do nosso plano Business, sem a necessidade de cartão de crédito, para que você possa experimentar todo o potencial da nossa plataforma."
    }
];

const PlanosPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <div className="py-fluid-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-fluid-12">
          <h1 className="text-fluid-h1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Planos Flexíveis para o Seu Crescimento</h1>
          <p className="text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70 mt-4 max-w-3xl mx-auto">
            Escolha o plano ideal para sua necessidade e pague apenas pelo que usar. Sem surpresas.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-fluid-10 text-light-foreground/70 dark:text-dark-foreground/70">
          <span className="text-fluid-body">Mensal</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={billingCycle === 'annually'}
              onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
            />
            <div className="w-11 h-6 bg-light-border dark:bg-dark-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
          <span className="text-fluid-body">Anual (Pague 10, Leve 12)</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-fluid-6">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} billingCycle={billingCycle} />
          ))}
        </div>

        {/* FAQ Section */}
        <section className="mt-fluid-20 max-w-3xl mx-auto">
            <h2 className="text-fluid-h2 font-bold text-center mb-fluid-6 text-light-foreground dark:text-dark-foreground">Perguntas Frequentes</h2>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <Accordion key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default PlanosPage;