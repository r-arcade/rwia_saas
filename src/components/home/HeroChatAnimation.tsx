"use client";

import { motion } from 'framer-motion';

const messages = [
  { sender: 'user', text: 'Olá! Gostaria de saber mais sobre o plano Pro.' },
  { sender: 'agent', text: 'Claro! O plano Pro inclui 3 agentes e dashboards de análise. Posso ajudar com mais alguma dúvida?' },
  { sender: 'user', text: 'Perfeito, era isso. Obrigado!' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.5, // Time between each message appearing
    },
  },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroChatAnimation = () => {
  return (
    <div className="relative h-80 w-full rounded-lg flex items-center justify-center overflow-hidden bg-light-card dark:bg-dark-card/50 border border-light-border dark:border-dark-border backdrop-blur-sm">
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      
      <motion.div 
        className="relative w-full max-w-sm p-4 space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}
            variants={messageVariants}
          >
            {msg.sender === 'agent' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0"></div>
            )}
            <div
              className={`px-4 py-2 rounded-lg max-w-[80%] ${
                msg.sender === 'user'
                  ? 'bg-light-background dark:bg-dark-background'
                  : 'bg-primary text-white'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroChatAnimation;
