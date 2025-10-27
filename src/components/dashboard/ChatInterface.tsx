"use client";

import { useState } from 'react';

type Message = {
  text: string;
  sender: 'user' | 'agent';
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'agent', text: 'Olá! Como posso ajudar você hoje?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    const userMessage: Message = { sender: 'user', text: inputValue };
    const agentResponse: Message = { sender: 'agent', text: 'Obrigado por sua mensagem. Estou processando sua solicitação...' };
    setMessages([...messages, userMessage, agentResponse]);
    setInputValue('');
  };

  return (
    <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg flex flex-col h-[700px]">
      <div className="flex-grow p-fluid-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-light-border dark:bg-dark-border text-light-foreground dark:text-dark-foreground'
              }`}
            >
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
            onChange={(e) => setInputValue(e.e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Digite sua mensagem..."
            className="w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-fluid-sm text-light-foreground dark:text-dark-foreground"
          />
          <button
            onClick={handleSendMessage}
            className="bg-primary text-white p-2 rounded-md hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
