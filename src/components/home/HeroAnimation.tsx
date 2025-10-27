"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const benefits = [
  "Qualificando seus clientes 24/7",
  "Agendando serviços e reuniões na sua agenda",
  "Custando menos que um café por dia",
  "Liberando você para o trabalho que importa"
];
const totalPhases = 3 + benefits.length + 1;

// --- Typewriter Component ---
const TypewriterText = ({ text, className = "" }) => {
  const characters = Array.from(text);
  const typingSpeed = 0.04;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: typingSpeed } },
  };
  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      key={text}
      className={`flex flex-wrap overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={charVariants} aria-hidden="true">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// --- Main Animation Component ---
const HeroAnimation = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const delay = phase < 2 ? 2200 : 2800;
    const timer = setTimeout(() => {
      setPhase((prev) => (prev + 1) % totalPhases);
    }, delay);
    return () => clearTimeout(timer);
  }, [phase]);

  const showCTA = phase === totalPhases - 1;

  return (
    <div className="relative h-80 w-full rounded-lg flex items-center justify-center overflow-hidden bg-dark-background/80 border border-dark-border backdrop-blur-sm">
      <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative w-full max-w-lg h-full p-4 font-mono text-base text-green-400">
        <div className="flex items-center pb-2 mb-2 border-b border-green-400/20">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <AnimatePresence mode="wait">
          {showCTA ? (
            <motion.div
              key="final-cta"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center w-full h-[calc(100%-2.5rem)] flex items-center justify-center"
            >
              <Link href="/planos" className="inline-block p-2">
                <span className="text-fluid-h2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 transition-opacity">
                  Sua Assistente Começa Hoje
                </span>
              </Link>
            </motion.div>
          ) : (
            <motion.div key="terminal-text" className="w-full whitespace-pre-wrap">
              <div className="flex items-start"><span className="text-gray-400 mr-2 mt-px">&gt;</span><TypewriterText text="Por que contratar uma IA para o meu negócio?" className="text-white" /></div>
              {phase >= 1 && <div className="flex items-start"><span className="text-gray-400 mr-2 mt-px">&gt;</span><TypewriterText text="Para focar no seu trabalho, não na sua agenda." className="text-white" /></div>}
              {phase >= 2 && <div className="flex items-start"><span className="text-gray-400 mr-2 mt-px">&gt;</span><TypewriterText text="Como?" className="text-white" /></div>}
              
              {benefits.map((benefit, index) => (
                phase >= 3 + index && (
                  <div className="flex items-start" key={index}>
                    <span className="text-gray-400 mr-2 mt-px">&gt; </span>
                    <TypewriterText text={benefit} className="text-secondary font-bold" />
                  </div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroAnimation;
