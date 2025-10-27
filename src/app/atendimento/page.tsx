"use client";

import { useState } from 'react';

const conversations = [
  { id: 1, customerName: 'João Silva', lastMessage: 'Gostaria de agendar uma consulta...', status: 'new' },
  { id: 2, customerName: 'Maria Oliveira', lastMessage: 'Qual o valor do procedimento?', status: 'read' },
  { id: 3, customerName: 'Pedro Martins', lastMessage: 'Ok, estarei aí às 15h.', status: 'read' },
];

const chatHistory = [
    { sender: 'agent', text: 'Olá! Sou Alex, o assistente virtual da clínica. Como posso ajudar?' },
    { sender: 'user', text: 'Olá, gostaria de agendar uma consulta.' },
    { sender: 'agent', text: 'Claro! Para qual procedimento seria?' },
    { sender: 'user', text: 'Seria para uma limpeza de pele.' },
    { sender: 'agent', text: 'Entendido. Um momento, estou transferindo você para um de nossos especialistas para confirmar o melhor horário.' },
];

const AtendimentoPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messages, setMessages] = useState(chatHistory);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    const newMessage = { sender: 'user', text: inputValue };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-light-background dark:bg-dark-background text-light-foreground dark:text-dark-foreground">
      <aside className="w-full md:w-1/3 border-r border-light-border dark:border-dark-border flex flex-col h-1/3 md:h-full">
        <div className="p-fluid-3 border-b border-light-border dark:border-dark-border">
          <h1 className="text-fluid-h3 font-bold">Fila de Atendimento</h1>
        </div>
        <div className="overflow-y-auto">
          {conversations.map(convo => (
            <div
              key={convo.id}
              onClick={() => setSelectedConversation(convo)}
              className={`p-fluid-3 border-b border-light-border dark:border-dark-border cursor-pointer ${selectedConversation.id === convo.id ? 'bg-primary/30' : 'hover:bg-light-card dark:hover:bg-dark-card'}`}
            >
              <div className="flex justify-between">
                <h3 className="font-bold text-fluid-body">{convo.customerName}</h3>
                {convo.status === 'new' && <span className="bg-accent text-dark-background text-xs font-bold px-2 py-1 rounded-full">NOVA</span>}
              </div>
              <p className="text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70 truncate">{convo.lastMessage}</p>
            </div>
          ))}
        </div>
      </aside>

      <main className="w-full md:w-2/3 flex flex-col h-2/3 md:h-full">
        <div className="p-fluid-3 border-b border-light-border dark:border-dark-border">
          <h2 className="text-fluid-body font-bold">Conversa com {selectedConversation.customerName}</h2>
        </div>
        <div className="flex-grow p-fluid-4 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-lg px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light-card dark:bg-dark-card'}`}>
                <p className="text-fluid-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-fluid-3 border-t border-light-border dark:border-dark-border">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua resposta..."
              className="w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-fluid-sm"
            />
            <button onClick={handleSendMessage} className="bg-primary text-white p-2 rounded-md hover:opacity-90">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AtendimentoPage;
